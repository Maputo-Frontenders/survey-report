"use client";

import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { List, X } from "phosphor-react";
import { useRouter } from "next/navigation";

const NavBar: React.FC = () => {
  const router = useRouter();
  const { t, lang } = useTranslation("common");

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const menuItems = [
    { name: t("menu_item_1"), href: "#home" },
    { name: t("menu_item_2"), href: "#about" },
  ];

  const languanges = [
    {
      name: "Português",
      locale: "pt",
    },
    {
      name: "English",
      locale: "en",
    },
  ];

  useEffect(() => {
    document.querySelector("body")?.classList.remove("overflow-y-hidden");
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });
  }, []);

  const handleLanguageChange = (event: any) => {
    const selectedLanguage = event.target.value;
    router.push(`/pt?lang=${selectedLanguage}`);
  };

  return (
    <header
      className={`p-5 transition-colors duration-700 fixed z-50 right-0 left-0 top-0 ${
        scrollY > 200 ? "text-black bg-white shadow" : "text-white"
      }`}
    >
      <div
        className={`w-full bg-black/60 right-0 top-0 h-screen ${
          isMenuOpen ? "absolute z-20 w-screen" : "hidden w-0"
        }`}
      ></div>

      <div className="max-w-6xl mx-auto">
        <div className="hidden items-center justify-between lg:flex">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold block">
              <Image
                src={`/images/${scrollY > 200 ? "logo.png" : "logo-white.png"}`}
                width={130}
                height={130}
                alt="Mozdevz - Comunidade Moçambicana de Desenvolvedores"
              />
            </Link>
          </div>

          <div className="w-full flex gap-10 justify-end items-center">
            <nav className="flex gap-5">
              <ul className="flex items-center gap-5 text-sm">
                {menuItems.map((menuItem) => {
                  return (
                    <li key={menuItem.href} className="w-max">
                      <Link
                        href={menuItem.href}
                        className="font-bold hover:text-red-500 transition-colors"
                      >
                        {menuItem.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <select
                className={`bg-transparent  outline-none text-sm rounded-lg  block w-full p-2.5 `}
                onChange={handleLanguageChange}
              >
                {languanges.map((languange) => {
                  return (
                    <option
                      className="text-black"
                      key={languange.name}
                      value={languange.locale}
                    >
                      {languange.name}
                    </option>
                  );
                })}
              </select>
            </nav>
          </div>
        </div>

        <div className="flex justify-between lg:hidden">
          <Link href="/" className="text-2xl font-bold block">
            <Image
              src={`/images/${scrollY > 200 ? "logo.png" : "logo-white.png"}`}
              width={130}
              height={130}
              alt="Mozdevz - Comunidade Moçambicana de Desenvolvedores"
            />
          </Link>

          <List
            size={32}
            className="cursor-pointer"
            onClick={() => {
              setIsMenuOpen(true);
              document
                .querySelector("body")
                ?.classList.add("overflow-y-hidden");
            }}
          />

          <div
            className={`absolute z-30 flex text-base right-0 top-0 transition-transform duration-700 ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="bg-white h-screen w-full max-w-xs min-w-[300px] p-8 text-black">
              <div className="flex gap-3 justify-between items-center">
                <Link href="/" className="text-2xl font-bold block">
                  <Image
                    src={"/images/logo.png"}
                    width={130}
                    height={130}
                    alt="Mozdevz - Comunidade Moçambicana de Desenvolvedores"
                  />
                </Link>

                <X
                  size={24}
                  className="cursor-pointer"
                  onClick={() => {
                    setIsMenuOpen(false);
                    document
                      .querySelector("body")
                      ?.classList.remove("overflow-y-hidden");
                  }}
                />
              </div>

              <nav className="block mt-28 mb-10 gap-5">
                <ul className="flex flex-col gap-5 font-thin">
                  {menuItems.map((menuItem) => {
                    return (
                      <li key={menuItem.href}>
                        <Link
                          href={menuItem.href}
                          className="font-bold hover:text-red-500 transition-colors"
                        >
                          {menuItem.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <select
                  className={`  bg-transparent outline-none text-sm rounded-lg  block w-full -ml-1 mt-5`}
                  onChange={handleLanguageChange}
                >
                  {languanges.map((languange) => {
                    return (
                      <option
                        className="text-black "
                        key={languange.name}
                        value={languange.locale}
                      >
                        {languange.name}
                      </option>
                    );
                  })}
                </select>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
