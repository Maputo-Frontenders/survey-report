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

      <section id='intro-section' className='section'>
        <h1>
          Intro
        </h1>
        <div className='flex flex flex-col md:flex-row gap-12 md:gap-36 justify-between  lg: '>
          <div className='flex-1'>
            <p>
              Lorem ipsum id sit veniam ullamco sed ex ad ut quis qui aliqua labore ad nulla. dolor minim in labore voluptate duis ut voluptate velit aute in veniam magna ut sint magna sed laboris cupidatat labore exercitation
            </p>
            <p>
              Fugiat adipisicing occaecat deserunt tempor qui et deserunt sunt officia tempor voluptate ex cillum laboris consectetur amet eu tempor pariatur ad consequat do sint mollit velit  eu amet tempor veniam sed ullamco duis fugiat consequat dolore ut amet tempor id sint esse reprehenderit aliquip ut do laboris consequat duis sit reprehenderit cupidatat minim cupidatat non nisi exercitation dolor in est laborum anim occaecat ad aliquip officia pariatur dolor sint proident velit nisi duis ut in et laborum nostrud mollit cupidatat id irure cupidatat aliquip aliquip id magna ad reprehenderit adipisicing mollit est nulla pariatur cupidatat veniam voluptate qui esse nisi elit fugiat non sunt adipisicing nisi nisi excepteur cillum qui esse veniam eu in veniam culpa aute laboris dolor eu est do excepteur dolor consequat consectetur nisi consectetur nostrud ullamco consequat dolore commodo aute aliquip adipisicing reprehenderit et enim excepteur occaecat do occaecat anim irure consequat proident ex reprehenderit sit do velit ex ad dolore ex tempor cillum sunt et veniam fugiat in tempor consectetur labore exercitation consequat incididunt exercitation deserunt veniam culpa qui amet amet dolore consectetur adipisicing occaecat in consectetur ea ut fugiat.
            </p>
            <p>
              Fugiat adipisicing occaecat deserunt tempor qui et deserunt sunt officia tempor voluptate ex cillum laboris consectetur amet eu tempor pariatur ad consequat do sint mollit velit dolor minim in labore voluptate duis ut voluptate velit aute in veniam magna ut sint magna sed laboris cupidatat labore exercitation eu amet tempor veniam sed ullamco duis fugiat consequat dolore ut amet tempor id sint esse reprehenderit aliquip ut do laboris consequat duis sit reprehenderit cupidatat minim cupidatat non nisi exercitation dolor in est laborum anim occaecat ad aliquip officia pariatur dolor sint proident velit nisi duis ut in et laborum nostrud eur consequat qui pariatur enim ut id dolore cillum sint eu ex qui consectetur nisi consectetur nostrud ullamco consequat dolore commodo adipisicing anim ut elit  consequat incididunt exercitation deserunt veniam culpa qui amet amet dolore consectetur adipisicing occaecat in consectetur ea ut fugiat.
            </p>
          </div>
          <div className='flex-1'>
            <p>
              Fugiat adipisicing occaecat deserunt tempor qui et deserunt sunt officia tempor voluptate ex cillum laboris consectetur amet eu tempor pariatur ad consequat do sint mollit velit dolor minim in labore voluptate duis ut voluptate velit aute in veniam magna ut sint magna sed laboris cupidatat labore exercitation eu amet tempor veniam sed ullamco duis fugiat consequat dolore ut amet tempor id sint esse reprehenderit adipisicing mollit est nulla pariatur cupidatat veniam voluptate qui esse nisi elit fugiat non sunt adipisicing nisi nisi excepteur cillum qui esse veniam eu in veniam culpa aute laboris dolor eu est do excepteur dolor consequat laboris eu officia qui excepteur consequat qui pariatur enim ut id dolore cillum sint eu ex qui consectetur nisi consectetur nostrud ullamco consequat dolore commodo adipisicing anim ut elit deserunt officia id incididunt nostrud in anim reprehenderit commodo aute aliquip adipisicing reprehenderit et enim excepteur occaecat do occaecat anim irure 
            </p>
            <p>
              Tempor irure in sunt sint cupidatat ut laborum ut veniam sunt est do ad laborum deserunt eu dolore ut. consequat proident ex reprehenderit sit do velit ex ad dolore ex tempor cillum sunt et veniam fugiat in tempor consectetur labore exercitation consequat incididunt exercitation deserunt veniam culpa qui amet amet dolore consectetur adipisicing occaecat in consectetur ea ut fugiat.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
