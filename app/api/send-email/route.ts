import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

// Basic email validation regex
const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Basic input sanitization to prevent XSS or injection
const sanitizeInput = (input: string) => {
  return input.replace(/[<>]/g, "") // Remove < and > characters
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json()

    // Validate inputs
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 })
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ message: "Invalid email format" }, { status: 400 })
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name)
    const sanitizedSubject = sanitizeInput(subject)
    const sanitizedMessage = sanitizeInput(message)

    // Configure transporter with Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER || "ridhbht4@gmail.com",
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // Email to YOU
    await transporter.sendMail({
      from: '"Portfolio Contact Form" <ridhbht4@gmail.com>',
      to: "ridhbht4@gmail.com",
      subject: `New Contact Form Submission: ${sanitizedSubject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${sanitizedSubject}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedMessage}</p>
        <hr>
        <p>Sent from your portfolio website.</p>
      `,
    })

    // Auto-reply to USER
    await transporter.sendMail({
      from: '"Ridhi Bhatia" <ridhbht4@gmail.com>',
      to: email,
      subject: "Thank You for Contacting Me!",
      html: `
        <h2>Hello ${sanitizedName},</h2>
        <p>Thank you for reaching out through my website! I have received your message regarding "${sanitizedSubject}".</p>
        <p>I will review your request and get back to you as soon as possible.</p>
        <p>In the meantime, feel free to check out my projects or connect with me on:</p>
        <ul>
          <li><a href="https://www.linkedin.com/in/ridhibhatia17">LinkedIn</a></li>
          <li><a href="https://github.com/ridhibhatia17">GitHub</a></li>
        </ul>
        <p>Best regards,<br>Ridhi Bhatia</p>
      `,
    })

    return NextResponse.json({ message: "Emails sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending emails:", error)
    return NextResponse.json(
      { message: "Error sending emails. Please try again later." },
      { status: 500 }
    )
  }
}
