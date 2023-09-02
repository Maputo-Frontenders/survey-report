"use client";

import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
  YoutubeLogo,
} from "phosphor-react";

const Footer = () => {
  const socials = [
    {
      link: "",
      icon: <FacebookLogo size={32} color="#fff" />,
    },
    {
      link: "",
      icon: <TwitterLogo size={32} color="#fff" />,
    },
    {
      link: "",
      icon: <InstagramLogo size={32} color="#fff" />,
    },
    {
      link: "",
      icon: <LinkedinLogo size={32} color="#fff" />,
    },
    {
      link: "",
      icon: <YoutubeLogo size={32} color="#fff" />,
    },
  ];
  return (
    <>
      <footer className="bg-white">
        <div className="bg-zinc-800 py-8 px-5 md:py-4 md:px-20 md:flex md:flex-row md:justify-between">
          <div className="text-center mb-4 md:mb-0">
            <p className="text-slate-400">
              {" "}
              Copyright © 2023 Mozdevz Community. All Rights Reserved
            </p>
          </div>
          <div className="flex flex-row justify-center gap-4">
            {socials.map((social, index) => (
              <a
                href={social.link}
                key={index}
                className="text-white hover:text-slate-400"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
