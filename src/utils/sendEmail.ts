import supabase from "@/lib/supabase";

const sendEmail = async (data: any) => {
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