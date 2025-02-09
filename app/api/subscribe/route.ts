import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    // Validate email format
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ message: "Invalid email address" }), { status: 400 });
    }

    // Send email via Resend
    const { error } = await resend.emails.send({
      from: "Newsletter <newsletter@codebook.com>",
      to: [email],
      subject: "Thanks for Subscribing!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2563eb;">Welcome to Our Newsletter! 🎉</h1>
          <p>Hi there,</p>
          <p>Thank you for subscribing to our newsletter. Here's what you can expect:</p>
          <ul style="list-style: none; padding: 0;">
            <li style="margin-bottom: 8px;">📰 Latest updates in our industry</li>
            <li style="margin-bottom: 8px;">🎁 Exclusive subscriber-only content</li>
            <li style="margin-bottom: 8px;">💡 Helpful tips and resources</li>
          </ul>
          <p>We're excited to have you on board!</p>
          <p>Best regards,<br/>The Newsletter Team</p>
          <hr style="margin: 24px 0; border-color: #e5e7eb;"/>
          <p style="font-size: 0.8rem; color: #6b7280;">
            You received this email because you subscribed at our website.<br/>
            <a href="#" style="color: #2563eb; text-decoration: none;">Unsubscribe</a>
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Email sending error:", error);
      return new Response(JSON.stringify({ message: "Failed to send confirmation email" }), { status: 500 });
    }

    return new Response(JSON.stringify({ message: "Subscription successful" }), { status: 200 });
  } catch (error) {
    console.error("Subscription error:", error);
    return new Response(JSON.stringify({ message: "Internal server error" }), { status: 500 });
  }
}
