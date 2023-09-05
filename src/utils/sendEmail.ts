import supabase from "@/lib/supabase";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NEXT_EMAIL_USERNAME,
    pass: process.env.NEXT_EMAIL_PASSWORD,
  },
});

const sendEmail = async (data: any) => {
  try {
    await saveUserData(data);

    await transporter.sendMail({
      from: process.env.EMAIL_USERNAME,
      to: data.email,
      subject: "Envio do report",
      html: "Tai deadline ja pronta",
    });
    console.log('Email sent successfully');

    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error();
  };
};

const saveUserData = async (data: any) => {
  try {
    const { data: res, error } = await supabase
    .from("users_data")
    .insert([{
      name: data.firstName,
      email: data.email,
      surname: data.lastName,
      instituitionName: data.companyOrUniversityName,
      role: data.jobOrCourseTitle,
      residence: data.province
    }])
    .select();

    if (error) {
      console.error("Supabase error:", error);
    } else {
      console.log("Supabase response:", res);
    };

    return true;
  } catch (error) {
    console.error(error);
  };

  return false;
};

export default sendEmail;