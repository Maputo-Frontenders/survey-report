import sendEmail from "@/utils/sendEmail";

export async function POST(request: Request, response: Response) {
  const emailDataText = await request.text();
  const emailData = JSON.parse(emailDataText);

  try {
    console.log(emailData);
    await sendEmail(emailData);
    return new Response("Email sent successfully", { status: 200 });
  } catch (error) {
    return new Response("Error", { status: 500 })
  }
};
