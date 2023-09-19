import supabase from "@/lib/supabase";
// import nodemailer from "nodemailer";

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.NEXT_EMAIL_USERNAME,
//     pass: process.env.NEXT_EMAIL_PASSWORD,
//   },
// });

// const sendEmail = async (data: any) => {
//   try {
//     await saveUserData(data);

//     await transporter.sendMail({
//       from: process.env.EMAIL_USERNAME,
//       to: data.email,
//       subject: "Envio do report",
//       html: "Tai deadline ja pronta",
//     });
//     console.log("Email sent successfully");

//     return true;
//   } catch (error) {
//     console.error("Error sending email:", error);
//     throw new Error();
//   }
// };

const saveUserData = async (data: any) => {
  try {
    const { data: res, error } = await supabase
      .from("users_data")
      .insert([
        {
          name: data.firstName,
          email: data.email,
          surname: data.lastName,
          instituitionName: data.companyOrUniversityName,
          role: data.jobOrCourseTitle,
          residence: data.province,
        },
      ])
      .select();

    if (error) {
      throw new Error(JSON.stringify(error));
    }

    return true;
  } catch (error) {
    throw new Error(JSON.stringify(error));
  }
};

function downloadFile(blob: Blob) {
  var anchor = document.createElement("a");
  const url = URL.createObjectURL(blob);
  anchor.style.display = "none";
  document.body.appendChild(anchor);

  anchor.href = url;

  anchor.download = blob.name || "MozDevz Survey 1st Edition";

  anchor.click();

  document.body.removeChild(anchor);
}

export { saveUserData, downloadFile };
