"use client";

import { useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { ArrowCircleDown } from "phosphor-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CountryModal from "./modal/CountryModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTranslation from "next-translate/useTranslation";

import { downloadSurvey, saveUserData } from '@/utils'
const { t, lang } = useTranslation("common");

const submitFormDataSchema = z.object({
  email: z
    .string()
    .nonempty(t("email"))
    .toLowerCase()
    .email(t("errorEmail")),
  firstName: z
    .string()
    .nonempty(t("firstName"))
    .min(3, t("charNr")),
  lastName: z
    .string()
    .nonempty(t("lastName"))
    .min(3, t("charNr")),
  companyOrUniversityName: z
    .string()
    .nonempty(t("companyOrUniversityName"))
    .min(3, t("charNr")),
  jobOrCourseTitle: z
    .string()
    .nonempty(t("jobOrCourseTitle"))
    .min(3, t("charNr")),
  province: z.string().nonempty(t("province")),
});

type SubmitFormData = z.infer<typeof submitFormDataSchema>;
const style = {
  main: "flex flex-col text-center w-full lg:max-w-[250px] group",
  input:
    "border-b border-gray-500 group-focus-within:border-primary p-2 text-center w-full lg:max-w-[250px] bg-white outline-none text-black",
};

const SubmitForm: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const success = () => toast(t("downloadMessage"), { theme: "colored" });
  const failed = () => toast(t("errorDownlaod"));

  const { t, lang } = useTranslation("common");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(submitFormDataSchema),
  });

  const sendPDF = async (data: any) => {
    saveUserData(data)
      .then(() => {
        reset();
        downloadSurvey(`${'/static/docs/'}${t("url")}`)
        success();
      })
      .catch(() => {
        failed();
      });
  };
  const handleSelect = ($event: any) => {
    if ($event.target.value === "others") {
      setVisible(true);
    }
  };

  return (
    <div
      className="flex justify-center items-center w-screen flex-col p-5 pb-20 pt-[200px]"
      id="form"
    >
      <ToastContainer className={"text-red-500"} />
      <h3 className="text-white text-4xl font-bold pb-10 text-center">
        {t("form_title")}
      </h3>
      <form
        onSubmit={handleSubmit(sendPDF)}
        className="p-4 w-full max-w-2xl bg-white py-7 pt-12 rounded"
      >
        <div className="flex gap-10 flex-wrap justify-center">
          <div className={style.main}>
            <label>{t("form_email_text")}</label>
            <input className={style.input} {...register("email")} />
            {errors?.email && (
              <span className="text-red-700">{`${errors.email.message}`}</span>
            )}
          </div>
          <div className={style.main}>
            <label>{t("form_name_text")}</label>
            <input className={style.input} {...register("firstName")} />
            {errors?.firstName && (
              <span className="text-red-700">{`${errors.firstName.message}`}</span>
            )}
          </div>
          <div className={style.main}>
            <label>{t("form_surname_text")}</label>
            <input className={style.input} {...register("lastName")} />
            {errors?.lastName && (
              <span className="text-red-700">{`${errors?.lastName.message}`}</span>
            )}
          </div>
          <div className={style.main}>
            <label>{t("form_IName_text")}</label>
            <input
              className={style.input}
              {...register("companyOrUniversityName")}
            />
            {errors?.companyOrUniversityName && (
              <span className="text-red-700">{`${errors.companyOrUniversityName.message}`}</span>
            )}
          </div>
          <div className={style.main}>
            <label>{t("form_role_text")}</label>
            <input className={style.input} {...register("jobOrCourseTitle")} />
            {errors?.jobOrCourseTitle && (
              <span className="text-red-700">{`${errors.jobOrCourseTitle.message}`}</span>
            )}
          </div>
          <div className={style.main}>
            <label>{t("form_residence_text")}</label>
            <select
              id="select"
              className={style.input}
              {...register("province")}
              onChange={handleSelect}
            >
              <option id="country"></option>
              <option value="Cabo Delegado">Cabo Delegado</option>
              <option value="Gaza">Gaza</option>
              <option value="Inhambane">Inhambane</option>
              <option value="Manica">Manica</option>
              <option value="Maputo Cidade">Maputo Cidade</option>
              <option value="Maputo Provincia">Maputo Província</option>
              <option value="Nampula">Nampula</option>
              <option value="Niassa">Niassa</option>
              <option value="Sofala">Sofala</option>
              <option value="Tete">Tete</option>
              <option value="Zambézia">Zambézia</option>
              <option value="others">Outros</option>
            </select>
            {errors?.province && (
              <span className="text-red-700">{`${errors.province.message}`}</span>
            )}
          </div>
        </div>

        <div className="mx-auto w-min relative top-14">
          <button
            type="submit"
            className="flex items-center justify-center gap-5 bg-[#e2363c] p-4 sm:w-80 text-white font-bold rounded cursor-pointer"
          >
            <ArrowCircleDown size={36} />
            <p>{t("form_send_result")}</p>
          </button>
        </div>
        <div>
          <CountryModal visible={visible} setVisible={setVisible} />
        </div>
      </form>
    </div>
  );
};

export default SubmitForm;
