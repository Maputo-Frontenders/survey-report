import supabase from "@/lib/supabase";

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
