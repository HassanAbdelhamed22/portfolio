import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mb-8 flex items-center justify-between flex-col gap-2 md:flex-row">
      <div className="flex items-center gap-1">
        <a
          href="mailto:habdelhamed729@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email Hassan Abdelhamed"
          className="group"
        >
          <MdEmail className="h-9 w-9 fill-secondaryLightText transition-all duration-300 group-hover:fill-lightAccent dark:fill-zinc-400 dark:group-hover:fill-darkAccent border rounded-full p-2 border-borderLight dark:border-borderDark group-hover:border-lightAccent dark:group-hover:border-darkAccent" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=201012854740"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact Hassan Abdelhamed on WhatsApp"
          className="group"
        >
          <FaPhoneAlt className="h-9 w-9 fill-secondaryLightText transition-all duration-300 group-hover:fill-lightAccent dark:fill-zinc-400 dark:group-hover:fill-darkAccent border rounded-full p-2 border-borderLight dark:border-borderDark group-hover:border-lightAccent dark:group-hover:border-darkAccent" />
        </a>
        <a
          href="https://www.facebook.com/hassan.abdelhamed.376/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Hassan Abdelhamed's Facebook"
          className="group"
        >
          <FaFacebookF className="h-9 w-9 fill-secondaryLightText transition-all duration-300 group-hover:fill-lightAccent dark:fill-zinc-400 dark:group-hover:fill-darkAccent border rounded-full p-2 border-borderLight dark:border-borderDark group-hover:border-lightAccent dark:group-hover:border-darkAccent" />
        </a>
      </div>
      <div className="text-sm text-secondaryLightText dark:text-secondaryDarkText">
        © 2024 Hassan Abdelhamed. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
