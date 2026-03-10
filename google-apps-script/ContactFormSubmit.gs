/**
 * Google Apps Script - Contact Form Submission
 * 
 * SETUP:
 * 1. Go to script.google.com and create a new project
 * 2. Paste this code and REPLACE FORM_EDIT_URL with your form's EDIT URL:
 *    - Open your Google Form in edit mode (forms.google.com)
 *    - Copy the URL from the address bar (looks like: https://docs.google.com/forms/d/XXXXX/edit)
 *    - NOT the viewform or formResponse URL
 * 3. Deploy: Deploy > New deployment > Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy the Web app URL (ends with /exec) and add to .env.local as NEXT_PUBLIC_CONTACT_SCRIPT_URL
 */

const FORM_EDIT_URL = 'https://docs.google.com/forms/d/1I2Z_HoSwHhG6XVEZ7lyOTUwlTcvfcfqA1ABjLbhRpZk/edit';

function doGet() {
  if (!FORM_EDIT_URL || FORM_EDIT_URL.includes('PASTE_YOUR')) {
    return jsonResponse({ ok: false, error: 'Set FORM_EDIT_URL in the script first' });
  }
  try {
    const form = FormApp.openByUrl(FORM_EDIT_URL);
    const items = form.getItems().map(function(item) {
      return { title: item.getTitle().trim(), type: item.getType().toString() };
    });
    return jsonResponse({ ok: true, fields: items });
  } catch (err) {
    return jsonResponse({ ok: false, error: err.toString() });
  }
}

function doOptions() {
  return ContentService.createTextOutput('')
    .setMimeType(ContentService.MimeType.JSON)
    .setHeader('Access-Control-Allow-Origin', '*')
    .setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    .setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const { name, phone, email, subject, message } = data;

    if (!name || !phone || !email || !subject || !message) {
      return jsonResponse({ success: false, error: 'All fields required' });
    }

    const form = FormApp.openByUrl(FORM_EDIT_URL);
    const formResponse = form.createResponse();

    const items = form.getItems();
    const titleMap = { name: name, phone: phone, email: email, subject: subject, message: message };
    const matchPatterns = {
      name: ['Name'],
      phone: ['Phone number', 'Phone'],
      email: ['Email', 'E-mail'],
      subject: ['Subject'],
      message: ['Your Message', 'Message']
    };

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const title = item.getTitle().trim();
      let response = null;

      try {
        for (const [key, patterns] of Object.entries(matchPatterns)) {
          if (patterns.includes(title)) {
            const value = titleMap[key];
            if (value) response = item.asTextItem().createResponse(value);
            break;
          }
        }
        if (response) formResponse.withItemResponse(response);
      } catch (e) { /* skip items that are not text fields */ }
    }

    formResponse.submit();
    return jsonResponse({ success: true });
  } catch (err) {
    console.error(err);
    return jsonResponse({ success: false, error: err.toString() });
  }
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeader('Access-Control-Allow-Origin', '*')
    .setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    .setHeader('Access-Control-Allow-Headers', 'Content-Type');
}
