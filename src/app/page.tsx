"use client"

import Image from "next/image";
import Link from "next/link";
import { ArrowCircleDown } from "phosphor-react";

import logoWhite from "../../public/images/logo-white.png";
import BarChart from "./components/charts/BarChart";
import ColumnChart from "./components/charts/ColumnChart";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className='w-full h-full transition-all'>
        <section className="relative min-h-screen w-full p-5 py-10 bg-hero bg-cover bg-fixed bg-right text-white">
          <div className="relative z-20 mt-20 lg:mt-36 max-w-6xl mx-auto">
            <Link href="/" className="relative -left-2">
              <Image
                src={ logoWhite }
                width={200}
                alt="Mozdevz - Comunidade Moçambicana de Desenvolvedores"
              />
            </Link>

            <h1 className="text-5xl mt-14 lg:mt-2">2023 Developer <br />Skills Report</h1>
      
            <p className="my-16">Resultados baseados em <br /><strong>34,000 Desenvolvedores</strong></p>

            <a href="#" className="py-3 px-14 flex items-center gap-4 max-w-xs bg-blue-500 rounded-sm hover:brightness-75  transition-all">
              <ArrowCircleDown size={36} />
              <span className="text-lg">Baixar resultados</span>
            </a>
          </div>
          <div className="absolute z-10 bg-black/80 w-full h-full top-0 left-0"></div>
        </section>
        <section className="relative min-h-screen w-full p-5 py-10 bg-about bg-cover bg-fixed bg-right text-white">
          <div className="relative z-20 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Sobre
            </h2>
            <div className="w-full flex flex-wrap gap-10 justify-between">
              <div className="max-w-md flex flex-col gap-4">
                <p>
                  Lorem ipsum id sit veniam ullamco sed ex ad ut quis qui aliqua labore ad nulla. dolor minim in labore voluptate duis ut voluptate velit aute in veniam magna ut sint magna sed laboris cupidatat labore exercitation
                </p>
                <p>
                  Fugiat adipisicing occaecat deserunt tempor qui et deserunt sunt officia tempor voluptate ex cillum laboris consectetur amet eu tempor pariatur ad consequat do sint mollit velit  eu amet tempor veniam sed ullamco duis fugiat consequat dolore ut amet tempor id sint esse reprehenderit aliquip ut do laboris consequat duis sit reprehenderit cupidatat minim cupidatat non nisi exercitation dolor in est laborum anim occaecat ad aliquip officia pariatur dolor sint proident velit nisi duis ut in et laborum nostrud mollit cupidatat id irure cupidatat aliquip aliquip id magna ad reprehenderit adipisicing mollit est nulla pariatur cupidatat veniam voluptate qui esse nisi elit fugiat non sunt adipisicing nisi nisi excepteur cillum qui esse veniam.
                </p>
              </div>
              <div className="max-w-md flex flex-col gap-4">
                <p>
                  Fugiat adipisicing occaecat deserunt tempor qui et deserunt sunt officia tempor voluptate ex cillum laboris consectetur amet eu tempor pariatur ad consequat do sint mollit velit dolor minim in labore voluptate duis ut voluptate velit aute in veniam magna ut sint magna sed laboris cupidatat labore exercitation eu amet tempor veniam sed ullamco duis fugiat consequat dolore ut amet tempor id sint esse reprehenderit adipisicing mollit est nulla pariatur cupidatat veniam voluptate qui esse nisi elit fugiat non sunt adipisicing nisi nisi excepteur cillum qui esse veniam eu in veniam culpa aute laboris dolor eu est do excepteur dolor consequat laboris eu officia qui excepteur consequat qui pariatur enim ut id dolore cillum sint eu ex qui consectetur nisi consectetur nostrud ullamco consequat dolore commodo adipisicing anim ut elit deserunt officia id incididunt nostrud in anim reprehenderit commodo aute aliquip adipisicing reprehenderit et enim excepteur occaecat do occaecat anim irure
                </p>
              </div>
            </div>
          </div>
          <div className="absolute z-10 bg-black/80 w-full h-full top-0 left-0"></div>
        </section>
        <section className="w-full p-5 py-10 text-white relative">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-lg font-bold mb-6">LEARNING & EDUCATION</h2>

            <div className="flex flex-col w-full gap-20">
              <div className="flex justify-center  lg:justify-between flex-wrap gap-10">
                <div className="max-w-md flex flex-col gap-4">
                  <h3 className="text-4xl font-bold mb-6">For learning to code, C is overtaking BASIC</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magni voluptatibus quibusdam repellat dolorum, incidunt ullam commodi minima ut tempora beatae, laborum eum cum ipsam molestias nisi facere eius illo.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magni voluptatibus quibusdam repellat dolorum, incidunt ullam commodi minima ut tempora beatae, laborum eum cum ipsam molestias nisi facere eius illo.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magni voluptatibus quibusdam repellat dolorum, incidunt ullam commodi minima ut tempora beatae, laborum eum cum ipsam molestias nisi facere eius illo.</p>
                </div>
                <div className="flex flex-col gap-4 max-w-lg w-full">
                  <h4 className="text-2xl font-normal mb-6">What was the first language you learned to code in?</h4>
                  <ColumnChart data={{
                    series: [{
                      name: 'Percentagem das pessoas',
                      data: [8, 55, 57, 56, 45, 55, 12, 32]
                    }],
                    categories: ["C", "Python", "Java", "C#", "PHP", "Go", "C++", "JavaScript"]
                  }} />
                </div>
              </div>

              <div className="flex justify-center  lg:justify-between flex-wrap gap-10">
                <div className="max-w-md flex flex-col gap-4">
                  <h3 className="text-4xl font-bold mb-6">Gen Z utilizes bootcamps to learn new skills</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magni voluptatibus quibusdam repellat dolorum, incidunt ullam commodi minima ut tempora beatae, laborum eum cum ipsam molestias nisi facere eius illo.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magni voluptatibus quibusdam repellat dolorum, incidunt ullam commodi minima ut tempora beatae, laborum eum cum ipsam molestias nisi facere eius illo.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magni voluptatibus quibusdam repellat dolorum, incidunt ullam commodi minima ut tempora beatae, laborum eum cum ipsam molestias nisi facere eius illo.</p>
                </div>

                <div className="flex flex-col gap-4 max-w-lg w-full">
                  <h4 className="text-2xl font-normal mb-6">How do you learn new coding skills?</h4>

                  <BarChart data={{
                    series: [{
                      name: 'Percentagem das pessoas',
                      data: [8, 55, 57, 56, 45, 55, 12, 32]
                    }],
                    categories: ["Youtube", "Medium", "Geek for Geeks", "Udemy", "Linked Learning", "Documentação", "Livros", "Não aprendo"]
                  }} />
                </div>
              </div>

              <div className="absolute h-60 w-full bottom-0 left-0 backdrop-filter backdrop-blur-[2px] bg-gradient-to-b from-transparent to-[#060a35]"></div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
