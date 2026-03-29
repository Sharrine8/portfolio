import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = ContactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = parsed.data;
    const toEmail = process.env.CONTACT_EMAIL;

    if (!toEmail) {
      console.error("CONTACT_EMAIL environment variable is not set.");
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Update with your verified domain
      to: [toEmail],
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <style>
              body { font-family: sans-serif; background: #0b0b0f; color: #f0ede8; margin: 0; padding: 0; }
              .container { max-width: 560px; margin: 40px auto; background: #13131c; border-radius: 16px; overflow: hidden; border: 1px solid rgba(255,255,255,0.07); }
              .header { background: linear-gradient(135deg, #c8f05c22, #7c6bff22); padding: 32px; border-bottom: 1px solid rgba(255,255,255,0.07); }
              .header h1 { font-size: 1.4rem; margin: 0; color: #c8f05c; font-weight: 700; }
              .header p { margin: 4px 0 0; font-size: 0.85rem; color: #6e6e80; }
              .body { padding: 32px; }
              .field { margin-bottom: 20px; }
              .label { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: #6e6e80; margin-bottom: 4px; }
              .value { font-size: 0.95rem; color: #f0ede8; line-height: 1.6; }
              .message-box { background: rgba(255,255,255,0.04); border-radius: 8px; padding: 16px; }
              .footer { padding: 20px 32px; border-top: 1px solid rgba(255,255,255,0.07); font-size: 0.75rem; color: #6e6e80; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Message ✦</h1>
                <p>Received via your portfolio contact form</p>
              </div>
              <div class="body">
                <div class="field">
                  <div class="label">From</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email</div>
                  <div class="value"><a href="mailto:${email}" style="color: #c8f05c;">${email}</a></div>
                </div>
                <div class="field">
                  <div class="label">Subject</div>
                  <div class="value">${subject}</div>
                </div>
                <div class="field">
                  <div class="label">Message</div>
                  <div class="value message-box">${message.replace(/\n/g, "<br/>")}</div>
                </div>
              </div>
              <div class="footer">Reply directly to this email to respond to ${name}.</div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
