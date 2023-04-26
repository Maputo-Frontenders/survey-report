'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { List, X } from 'phosphor-react';

import ActiveLink from './ActiveLink';
import Link from 'next/link';

import logo from "../../../public/images/logo.png";
import logoWhite from "../../../public/images/logo-white.png";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Sobre", href: "/#about" },
]

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.querySelector('body')?.classList.remove('overflow-y-hidden')
    window.addEventListener('scroll', () => {
      setScrollY(window.scrollY);
    })
  }, [])

  return (
    <header
      className={`transition-colors duration-700 fixed z-50 right-0 left-0 top-0 ${scrollY > 200 ? 'text-black bg-white shadow' : 'text-white'
        }`}
    >
      <div
        className={`w-full bg-black/60 right-0 top-0 h-screen ${isMenuOpen ? 'absolute z-20 w-screen' : 'hidden w-0'
          }`}
      ></div>

      <div className="max-w-7xl mx-auto p-5">
        <div className="hidden items-center justify-between lg:flex">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold block">
              <Image
                src={ scrollY > 200 ? logo : logoWhite }
                width={130}
                alt="Mozdevz - Comunidade Moçambicana de Desenvolvedores"
              />
            </Link>
          </div>

          <div className="w-full flex gap-10 justify-end items-center">
            <nav>
              <ul className="flex items-center gap-5 text-sm">
                { menuItems.map(menuItem => {
                  return (
                    <li key={menuItem.href}>
                      <ActiveLink
                        href={ menuItem.href }
                        className="font-bold hover:text-red-500 transition-colors"
                        activeClassName="text-red-500"
                      >
                        { menuItem.name }
                      </ActiveLink>
                    </li>
                  )
                }) }
              </ul>
            </nav>
          </div>
        </div>

        <div className="flex justify-between lg:hidden">
          <Link href="/" className="text-2xl font-bold block">
            <Image
              src={ scrollY > 200 ? logo : logoWhite }
              width={130}
              alt="Mozdevz - Comunidade Moçambicana de Desenvolvedores"
            />
          </Link>

          <List
            size={32}
            className="cursor-pointer"
            onClick={() => {
              setIsMenuOpen(true)
              document.querySelector('body')?.classList.add('overflow-y-hidden')
            }}
          />

          <div
            className={`absolute z-30 flex text-base right-0 top-0 transition-transform duration-700 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
          >
            <div className="bg-white h-screen w-full max-w-xs min-w-[300px] p-8 text-black">
              <div className="flex gap-3 justify-between items-center">
                <Link href="/" className="text-2xl font-bold block">
                  <Image
                    src={logo}
                    width={130}
                    alt="Mozdevz - Comunidade Moçambicana de Desenvolvedores"
                  />
                </Link>

                <X
                  size={24}
                  className="cursor-pointer"
                  onClick={() => {
                    setIsMenuOpen(false)
                    document
                      .querySelector('body')
                      ?.classList.remove('overflow-y-hidden')
                  }}
                />
              </div>

              <nav className="block mt-28 mb-10">
                <ul className="flex flex-col gap-5 font-thin">
                  { menuItems.map(menuItem => {
                    return (
                      <li key={menuItem.href}>
                        <ActiveLink
                          href={ menuItem.href }
                          className="font-bold hover:text-red-500 transition-colors"
                          activeClassName="text-red-500"
                        >
                          { menuItem.name }
                        </ActiveLink>
                      </li>
                    )
                  }) }
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavBar;