"use server";
import { createTransport } from "nodemailer";
export type MailProps = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
const transport = createTransport({
  service: "gmail",
  auth: {
    user: "vicnet.video@gmail.com",
    pass: process.env.GPASS ?? "",
  },
});

export async function sendMail({ name, email, subject, message }: MailProps) {
  const mail = await transport.sendMail({
    from: "vicnet.video@gmail.com",
    to: "opaliora.business@gmail.com",
    subject: `[Opaliora Website Form Submission] ${subject}`,
    cc: "vicnet.video@gmail.com",
    replyTo: email,
    html: `
			<h1>${name} sent a message from the opaliora website contact form  </h1>
			<p><strong>EMAIL:</strong> ${email} </p>
			<p><strong>MESSAGE:</strong> ${message} </p>

		`,
  });

  if (mail.accepted.length > 0) {
    return true;
  } else {
    return false;
  }
}
