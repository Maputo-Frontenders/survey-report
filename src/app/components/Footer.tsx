'use client';

import { FacebookLogo, InstagramLogo, LinkedinLogo, TwitterLogo, YoutubeLogo } from "phosphor-react";

const Footer = () => {
  return(
    <>
      <footer className="bg-white">
        <div className="mx-auto max-w-6xl p-5 py-10">
          <div className="grid grid-cols-2 md:flex md:flex-wrap w-full justify-between gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Company</h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <a href="#" className=" hover:underline">About</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Careers</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Brand Center</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Blog</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Help center</h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Discord Server</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Twitter</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Facebook</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Contact Us</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Legal</h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Licensing</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Download</h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">iOS</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Android</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Windows</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">MacOS</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-zinc-800 py-8 px-5 md:py-4 md:px-20 md:flex md:flex-row md:justify-between">
          <div className="text-center mb-4 md:mb-0">
            <p className="text-slate-400"> Copyright © 2023 Mozdevz Community. All Rights Reserved</p>
          </div>
          <div className="flex flex-row justify-center gap-4">
            <FacebookLogo size={32} color="#fff" />
            <TwitterLogo size={32} color="#fff" />
            <InstagramLogo size={32} color="#fff" />
            <LinkedinLogo size={32} color="#fff" />
            <YoutubeLogo size={32} color="#fff" />
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;