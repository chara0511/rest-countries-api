import React from "react";

const Footer = () => {
  return (
    <footer class="w-full py-6 text-center text-xs md:text-sm xl:text-base bg-white dark:bg-blue-very_dark_blue dark:text-blue-dark_blue">
      <p className="h-6">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-dark_blue dark:text-gray-very_light_gray font-semibold"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://github.com/jcarlos0511"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-dark_blue dark:text-gray-very_light_gray font-semibold"
        >
          Chara-
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
