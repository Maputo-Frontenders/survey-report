'use client'
import Link            from "next/link";
import { usePathname } from "next/navigation";
import { useState }    from "react";
import Image           from "next/image";


type MenuProps = {
  name: string;
  router: string
}

const menu = [
  {
    name: 'Home',
    router: '/'
  },
  {
    name: 'Intro',
    router: '/intro'
  },
  {
    name: 'Skill',
    router: '/Skill'
  },
  {
    name: 'Tools',
    router: '/Tools'
  },
  {
    name: 'work',
    router: '/work'
  }
]
export const Navbar = () => {
  
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
  };
  
  return (
    
    <nav
      className="bg-white px-4 sm:px-4 py-2.5  fixed w-full z-20 top-0 left-0 border-b border-b-gray-200 drop-shadow-md">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" className=" uppercase flex items-center font-bold text-2xl">
          MozDev.survey
        </Link>
        <div className="flex md:hidden md:order-2">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none  focus:ring-gray-200">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
        
        <div className={`hidden items-center justify-between  md:flex md:w-auto md:order-1`}>
          <ul
            className="flex flex-col p-3 gap-2 md:gap-0 md:flex-row md:space-x-8 md:mt-0 md:text-sm  md:bg-white">
            {
              menu.map((value: MenuProps, index: number) => {
                return (
                  <li key={index}>
                    <Link href={value.router}
                          className={pathname == value.router ? "block font-semibold  text-[#e3363c]  rounded md:bg-transparent  hover:text-[#e3363c]"
                            : "block font-semibold  text-black  rounded md:bg-transparent  hover:text-[#e3363c]"}
                    >
                      {value.name}
                    </Link>
                  </li>
                )
              })
            }
          
          </ul>
          <div className={' flex gap-3 md:ml-10 md:flex-row'}>
            <Link href={'/login'}
                  className=" w-full h-2rem p-2 flex font-light rounded  text-white md:justify-center md:p-2 md:w-[12rem] md:h-3rem bg-[#e3363c] ">
              Receba o nosso Survey
            </Link>
          </div>
        </div>
      </div>
      {
        isMenuOpen && (
          <div className={ isMenuOpen ? "p-4 absolute bg-white w-full top-0 right-0 z-20  transition duration-900 translate-x-0 md:hidden"
              : "p-4 absolute bg-white w-full top-0 right-0 z-20 transition-all duration-500 translate-x-0  md:hidden"}>
            <div className="float-right flex md:hidden md:order-2">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none  focus:ring-gray-200">
                <Image src={'/close.svg'} alt={'icon close'} height={20} width={20}/>
              </button>
            </div>
            <div className={`transition-all duration-300  items-center justify-between md:hidden`}>
              <ul
                className="flex flex-col p-3 gap-2 md:gap-0 md:flex-row md:space-x-8 md:mt-0 md:text-sm  md:bg-white">
                {
                  menu.map((value: MenuProps, index: number) => {
                    return (
                      <li key={index}>
                        <Link href={value.router}
                              className={pathname == value.router ? "block font-semibold  text-[#e3363c]  rounded md:bg-transparent  hover:text-[#e3363c]"
                                : "block font-semibold  text-black  rounded md:bg-transparent  hover:text-[#e3363c]"}
                        >
                          {value.name}
                        </Link>
                      </li>
                    )
                  })
                }
    
              </ul>
              <div className={' flex gap-3 md:ml-10 md:flex-row'}>
                <Link href={'/login'}
                      className=" w-full h-2rem p-2 flex font-light rounded  text-white md:justify-center md:p-2 md:w-[12rem] md:h-3rem bg-[#e3363c] ">
                  Receba o nosso Survey
                </Link>
              </div>
            </div>
          </div>
          
        )
      }
    </nav>
  
  )
}