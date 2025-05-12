import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const { subject, ...rest } = data;

    await resend.emails.send({
      from: 'info@ihlasyurdu.com', // This should be a verified sender in Resend
      to: 'info@ihlasyurdu.com',
      subject: subject || 'Yeni Form Başvurusu',
      text: JSON.stringify(rest, null, 2),
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
} 