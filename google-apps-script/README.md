# Contact Form - Google Apps Script Setup

**Direct POST to Google Forms does not save responses.** This script uses Google's FormApp API and reliably saves responses.

## Step-by-step setup

### 1. Get your form's Edit URL

1. Go to [forms.google.com](https://forms.google.com) and open your **Contact Us** form
2. You should see the form in **edit mode** (you can add/edit questions)
3. Copy the full URL from your browser's address bar
4. It must look like: `https://docs.google.com/forms/d/1ABC...xyz/edit`
   - ✅ Must contain `/edit` at the end
   - ❌ NOT `.../viewform` or `.../formResponse`

### 2. Create and deploy the script

1. Go to [script.google.com](https://script.google.com) → **New project**
2. Replace all default code with the contents of `ContactFormSubmit.gs`
3. Find the line: `const FORM_EDIT_URL = 'PASTE_YOUR_FORM_EDIT_URL_HERE';`
4. Replace `PASTE_YOUR_FORM_EDIT_URL_HERE` with your edit URL (include the quotes)
5. Click **Save** (Ctrl+S)
6. Click **Deploy** → **New deployment**
7. Click the gear icon → **Web app**
8. Set **Execute as:** Me | **Who has access:** Anyone
9. Click **Deploy** → **Authorize access** (sign in with the same Google account that owns the form)
10. Copy the **Web app URL** (ends with `/exec`)

### 3. Test the script

Open the Web app URL in your browser. You should see JSON like:
```json
{"ok":true,"fields":[{"title":"Name","type":"TEXT"},...]}
```
If you see an error, check that FORM_EDIT_URL is correct and the form is in the same Google account.

### 4. Add URL to your project

Edit `.env.local` in your project root:

```
NEXT_PUBLIC_CONTACT_SCRIPT_URL=https://script.google.com/macros/s/YOUR_ID/exec
```

Restart the dev server: `npm run dev`

### 5. Form field names

The script looks for these question titles (case-sensitive): **Name**, **Phone number**, **Email**, **Subject**, **Your Message**. If your form uses different titles, run the test (step 3) to see your exact titles, then edit the `matchPatterns` in the script.
