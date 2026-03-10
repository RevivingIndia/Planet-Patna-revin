import { NextResponse } from 'next/server';

const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScez7YjivsWVMMGJ-aD37FFHb2vl-b1BbrrJmaSQyNR7MXUiw/formResponse';

const GOOGLE_FORM_ENTRIES = {
  name: '1633920210',
  phone: '1770822543',
  email: '1351640074',
  subject: '790080973',
  message: '1846923513',
} as const;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, subject, message } = body;

    if (!name || !phone || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const formData = new URLSearchParams({
      ['entry.' + GOOGLE_FORM_ENTRIES.name]: String(name),
      ['entry.' + GOOGLE_FORM_ENTRIES.phone]: String(phone),
      ['entry.' + GOOGLE_FORM_ENTRIES.email]: String(email),
      ['entry.' + GOOGLE_FORM_ENTRIES.subject]: String(subject),
      ['entry.' + GOOGLE_FORM_ENTRIES.message]: String(message),
    });

    const res = await fetch(GOOGLE_FORM_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'Mozilla/5.0 (compatible; PlanetPatna/1.0; +https://planetpatna.com)',
      },
      body: formData.toString(),
      redirect: 'follow',
    });

    // Google Forms returns 200 or 302 on successful submission
    if (res.ok || res.status === 302 || res.status === 303) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { error: 'Form submission failed' },
      { status: 502 }
    );
  } catch (err) {
    console.error('Contact form proxy error:', err);
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
