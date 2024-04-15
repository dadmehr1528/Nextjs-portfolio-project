import React from "react";
import myProfilePicture from "../../assets/avatar2.jpg";
import { CgChevronRight } from "react-icons/cg";
import "../globals.css";
import { FaGithub } from "react-icons/fa";
import bootstraoPic from "../../assets/icons/bootstrap.png";
import cssPic from "../../assets/icons/css.png";
import gitPic from "../../assets/icons/git.png";
import githubPic from "../../assets/icons/github.png";
import htmlPic from "../../assets/icons/html.png";
import jsPic from "../../assets/icons/js.png";
import tsPic from "../../assets/icons/ts.png";
import reactPic from "../../assets/icons/react.png";
import nextjsPic from "../../assets/icons/Next.js.png";
import reduxPic from "../../assets/icons/redux.png";
import saasPic from "../../assets/icons/sass.png";
import tailwindPic from "../../assets/icons/tailwind.png";
import placeHolder from "../../assets/placeholder.png";
import firstProjecet from "../../assets/firstProject.png";
import secondProject from "../../assets/secondProject.png";
import thirdProject from "../../assets/thirdProject.png";
import fourthProject from "../../assets/fourthProject.png";
import fithProject from "../../assets/fithProject.png";
import sixthProject from "../../assets/sixthProject.png";
import seventhProject from "../../assets/seventhProject.png";
import eighthProject from "../../assets/eighthProject.png";
import Image from "next/image";
import Header from "@/components/Header";
import Link from "next/link";
import Card from "@/components/Card";

const Projects = () => {
  return (
    <>
      <Header />
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link target="_self" href="/" style={{ color: "black" }}>
                <span className="marker">
                  <CgChevronRight className="marker-icon" />
                </span>
                About Me
              </Link>
            </li>
            <li>
              <Link href="/MySkills" style={{ color: "black" }}>
                <span className="marker">
                  <CgChevronRight className="marker-icon" />
                </span>
                My Skills
              </Link>
            </li>
            <li className="active">
              <Link
                target="_self"
                href="/MyProjects"
                style={{ color: "black" }}
              >
                <span className="marker">
                  <CgChevronRight className="marker-icon" />
                </span>
                My Projects
              </Link>
            </li>
          </ul>
        </nav>
        <div className="sections">
          <div className="project-container">
            <section>
              <h4>My Projects:</h4>
              <div className="projects">
                <Card
                  title="Portfolio"
                  description="This is my portfolio website."
                  techIcons={[
                    { src: tsPic, alt: "ts" },
                    { src: reactPic, alt: "react" },
                    { src: nextjsPic, alt: "next.js" },
                  ]}
                  placeholderImg={eighthProject}
                  demoUrl="https://dadmehr-portfolio.vercel.app/"
                  codeUrl="https://github.com/dadmehr1528/Nextjs-portfolio-project"
                />
                <Card
                  title="Apple"
                  description="This is Iphone website clone."
                  techIcons={[
                    { src: tailwindPic, alt: "tailwind" },
                    { src: jsPic, alt: "js" },
                    { src: reactPic, alt: "react" },
                  ]}
                  placeholderImg={seventhProject}
                  demoUrl="https://iphone-clone-project.vercel.app/"
                  codeUrl="https://github.com/dadmehr1528/Apple-clone"
                />
                <Card
                  title="Blog"
                  description="This is where you can read tech blogs."
                  techIcons={[
                    { src: tailwindPic, alt: "tailwind" },
                    { src: jsPic, alt: "js" },
                    { src: reactPic, alt: "react" },
                    { src: nextjsPic, alt: "next.js" },
                  ]}
                  placeholderImg={sixthProject}
                  demoUrl="https://nextjs-blog-project-beta.vercel.app/"
                  codeUrl="https://github.com/dadmehr1528/Nextjs-blog-project"
                />
                <Card
                  title="Game-hub"
                  description="This is a game serching platform."
                  techIcons={[
                    { src: htmlPic, alt: "html" },
                    { src: cssPic, alt: "css" },
                    { src: tsPic, alt: "ts" },
                    { src: reactPic, alt: "react" },
                  ]}
                  placeholderImg={fithProject}
                  demoUrl="https://game-hub-two-ruddy.vercel.app/"
                  codeUrl="https://github.com/dadmehr1528/Game-hub"
                />
                <Card
                  title="Gaming-store"
                  description="this is a gaming-store landing page."
                  techIcons={[
                    { src: htmlPic, alt: "html" },
                    { src: cssPic, alt: "css" },
                    { src: jsPic, alt: "js" },
                  ]}
                  placeholderImg={fourthProject}
                  demoUrl="https://dadmehr1528.github.io/Gaming-shop-project/"
                  codeUrl="https://github.com/dadmehr1528/Gaming-shop-project"
                />
                <Card
                  title="Ethereum"
                  description="ethereum clone that is fully responsive."
                  techIcons={[
                    { src: htmlPic, alt: "html" },
                    { src: cssPic, alt: "css" },
                    { src: tailwindPic, alt: "tailwind" },
                  ]}
                  placeholderImg={thirdProject}
                  demoUrl="https://dadmehr1528.github.io/Ethereum-tailwind-project/"
                  codeUrl="https://github.com/dadmehr1528/Ethereum-tailwind-project"
                />
                <Card
                  title="Social-proof"
                  description="This is a html and css landing page and its fully responsive."
                  techIcons={[
                    { src: htmlPic, alt: "html" },
                    { src: cssPic, alt: "css" },
                  ]}
                  placeholderImg={secondProject}
                  demoUrl="https://dadmehr1528.github.io/Social-proof-section-project/"
                  codeUrl="https://github.com/dadmehr1528/Social-proof-section-project"
                />
                <Card
                  title="Tailwind-page"
                  description="this is a tailwind css landing page and its fully responsive."
                  techIcons={[
                    { src: htmlPic, alt: "html" },
                    { src: cssPic, alt: "css" },
                    { src: tailwindPic, alt: "tailwind" },
                  ]}
                  placeholderImg={firstProjecet}
                  demoUrl="https://dadmehr1528.github.io/Tailwind-page-project/"
                  codeUrl="https://github.com/dadmehr1528/Tailwind-page-project"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
      <nav className="mobile-nav">
        <ul>
          <li>
            <Link href="/" style={{ color: "white" }}>
              About
            </Link>
          </li>
          <li>
            <Link href="/MySkills" style={{ color: "white" }}>
              Skills
            </Link>
          </li>
          <li className="active">
            <Link href="/MyProjects" style={{ color: "white" }}>
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Projects;
