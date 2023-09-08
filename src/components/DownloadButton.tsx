"use client";

import { ArrowCircleDown } from "phosphor-react";

const DownloadButton = () => {
  return (
    <a
      href="#form"
      className="py-3 px-14 flex items-center gap-4 max-w-xs bg-secondary rounded-sm hover:brightness-75  transition-all"
    >
      <ArrowCircleDown size={36} />
      <span className="text-lg">Baixar resultados</span>
    </a>
  );
}

export default DownloadButton;