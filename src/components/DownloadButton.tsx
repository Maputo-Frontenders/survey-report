"use client";

import { ArrowCircleDown } from "phosphor-react";
import useTranslation from "next-translate/useTranslation";

const DownloadButton = () => {
  const { t, lang } = useTranslation("common");

  return (
    <a
      href="#form"
      className="py-3 px-14 flex items-center gap-4 max-w-xs bg-red-500 rounded-sm hover:brightness-75  transition-all"
    >
      <ArrowCircleDown size={36} />
      <span className="text-lg font-bold">{t("hero_button")}</span>
    </a>
  );
};

export default DownloadButton;
