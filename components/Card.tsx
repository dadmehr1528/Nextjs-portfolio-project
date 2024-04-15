import React, { useState } from "react";
import Image from "next/image";
import bootstraoPic from "../assets/icons/bootstrap.png";
import gitPic from "../assets/icons/git.png";
import cssPic from "../assets/icons/css.png";
import githubPic from "../assets/icons/github.png";
import htmlPic from "../assets/icons/html.png";
import jsPic from "../assets/icons/js.png";
import reactPic from "../assets/icons/react.png";
import reduxPic from "../assets/icons/redux.png";
import saasPic from "../assets/icons/sass.png";
import tailwindPic from "../assets/icons/tailwind.png";
import placeHolder from "../assets/placeholder.png";
import { BsEye } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import "../app/globals.css";

interface CardProps {
  title: string;
  description: string;
  techIcons: { src: any; alt: string }[];
  placeholderImg: any;
  demoUrl: string;
  codeUrl: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  techIcons,
  placeholderImg,
  demoUrl,
  codeUrl,
}) => {
  return (
    <>
      <div className="project">
        <div className="image-title-description-tech-container">
          <div className="project-img-container">
            <Image
              className="project-img"
              src={placeholderImg}
              alt="project image"
            />
          </div>
          <div className="title-description-tech-container">
            <div className="title">{title}</div>
            <div className="order-container">
              <div className="first">
                <p className="description">{description}</p>
              </div>
            </div>
            <div className="tech second">
              <span>Tech Used:</span>
              <ul>
                {techIcons &&
                  techIcons.map((icon, index) => (
                    <li className="cardIconLi" key={index}>
                      <Image className="cardIcon" width={27} src={icon.src} alt={icon.alt} />
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="buttons">
          <Link
            href={demoUrl}
            className="demo"
          >
            <div>
              <BsEye /> Demo
            </div>
          </Link>
          <Link
            href={codeUrl}
            className="view-code"
          >
            <div>
              <AiFillGithub /> View Code
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
