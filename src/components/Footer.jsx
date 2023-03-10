import React from "react";
import {
  TbCopyright,
  TbBrandInstagram,
  TbBrandFacebook,
  TbBrandTwitter,
  TbBrandLinkedin,
} from "react-icons/tb";

function Footer() {
  return (
    <footer className="bg-zinc-800 text-white px-4 mt-[8rem]">
      <div className="flex flex-wrap justify-start items-start py-10 gap-4 sm:justify-around">
        <div className="gap-1">
          <span className="font-bold text-lg">Socials</span>
          <div className="flex gap-1">
            <span>
              <TbBrandInstagram size={25} />
            </span>
            <span>
              <TbBrandFacebook size={25} />
            </span>
            <span>
              <TbBrandTwitter size={25} />
            </span>
            <span>
              <TbBrandLinkedin size={25} />
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-bold text-lg">Address</span>
          <span>123 State Street</span>
          <span>San Diego, CA</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-bold text-lg">Work With Us</span>
          <span>(416) 444-44XX</span>
          <span>adm@guitar-shop.com</span>
        </div>
        <div className="flex gap-1 items-center">
          <span>Copyright GS</span>
          <TbCopyright />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
