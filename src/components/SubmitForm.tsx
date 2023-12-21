"use client";

import { ArrowCircleDown } from "phosphor-react";
import useTranslation from "next-translate/useTranslation";
import { downloadSurvey } from "@/utils";


const SubmitForm: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <div
      className="flex justify-center items-center w-screen flex-col p-5 pb-20 pt-[200px]"
      id="form"
    >
      <div className="mx-auto w-min relative top-14">
        <button
          onClick={() => downloadSurvey(`${'/static/docs/'}${t("url")}`)}
          className="flex items-center justify-center gap-5 bg-[#e2363c] p-4 sm:w-80 text-white font-bold rounded cursor-pointer"
        >
          <ArrowCircleDown size={36} />
          <p>{t("form_send_result")}</p>
        </button>
      </div>
    </div>
  );
};

export default SubmitForm;
