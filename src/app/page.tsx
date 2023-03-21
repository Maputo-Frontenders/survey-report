"use client"

import SonarGrid from "@/components/SonarGrid";
import { ArrowCircleDown, FileText } from "phosphor-react";

export default function Home() {
  return (
    <main className='w-full h-full'>
      <section id="hero" className="relative min-h-screen flex items-end justify-end pt-20">
        <SonarGrid />
        <div className="w-full bg-[#060830ad] min-h-full text-white md:max-w-[60%] relative z-10">
          <div className="pt-24 pb-11 px-8 md:px-28 h-full">
            <h1 className="font-bold text-4xl md:text-6xl leading-tight">
              <span className="block text-[#01A4FF]">2023</span>
              MozDevz <br />
              Developer  <br />
              Survey Report
            </h1>
            <p className="mt-10">Insights based on <strong>111, 111 developers</strong></p>
          </div>
          <a href="#" className="relative flex w-full">
            <div className="bg-white p-8 text-gray-600 flex justify-center items-center md:absolute bottom-0 right-[100%]">
              <ArrowCircleDown size={46} weight="thin" />
            </div>
            <div className="bg-[#01A4FF] p-[1.95rem] px-10 w-full flex items-center gap-4">
              <FileText size={46} weight="thin" />
              <div>
                <span className="block font-bold">Baixar report</span>
                <span className="block">2.4 MB</span>
              </div>
            </div>
          </a>
        </div>
      </section>
    </main>
  )
}
