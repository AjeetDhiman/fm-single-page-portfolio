// eslint-disable-next-line no-unused-vars
import React from "react";
import { SocialIcons } from "../utils/utils";
const Header = () => {
  return (
    <>
      <h2 className="sr-only">Header</h2>
      <div className="container-wrapper">
        <nav className="gap-y-5 gap-x-6 sm:justify-start flex flex-wrap items-center justify-center">
          <a
            href="/"
            className=" block text-2xl md:text-[32px] text-light-gray no-underline flex-[1_0_100%] sm:flex-1 text-center sm:text-start"
          >
            Ajeet Dhiman
            <span className="sr-only">(to home page)</span>
          </a>
          {SocialIcons.map((socialmedia) => (
            <a
              aria-label={socialmedia.alt}
              href={socialmedia.url}
              key={socialmedia.id}
              className="header__social inline-block"
            >
              {socialmedia.component}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
