import Image from "next/image";
import Link from "next/link";
import myProfilePicture from "../assets/avatar2.jpg";
import { FaGithub } from "react-icons/fa";
import React from "react";

const Header = () => {
  return (
    <>
      <header className="header">
        <Image src={myProfilePicture} alt="dadmehr sadeghi" />
        <div className="title">
          <h1>dadmehr sadeghi</h1>
          <h2 className="position"> Front-end Developer</h2>
          <Link
            href="https://github.com/dadmehr1528"
            className="button"
            target="_blank"
          >
            <FaGithub /> My Github profile
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
