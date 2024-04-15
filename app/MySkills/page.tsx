import myProfilePicture from "../../assets/avatar.jpg";
import bootstraoPic from "../../assets/icons/bootstrap.png";
import cssPic from "../../assets/icons/css.png";
import gitPic from "../../assets/icons/git.png";
import githubPic from "../../assets/icons/github.png";
import htmlPic from "../../assets/icons/html.png";
import jsPic from "../../assets/icons/js.png";
import reactPic from "../../assets/icons/react.png";
import reduxPic from "../../assets/icons/redux.png";
import saasPic from "../../assets/icons/sass.png";
import tailwindPic from "../../assets/icons/tailwind.png";
import vscodePic from "../../assets/icons/vscode.png";
import nextjsPic from "../../assets/icons/Next.js.png";
import typescriptPic from "../../assets/icons/typescript.png";
import { CgChevronRight } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import "../globals.css";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

const Skills = () => {
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
            <li className="active">
              <Link target="_self" href="/MySkills" style={{ color: "black" }}>
                <span className="marker">
                  <CgChevronRight className="marker-icon" />
                </span>
                My Skills
              </Link>
            </li>
            <li>
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
          <section>
            <h4>Tecnology</h4>
            <ul className="skills">
              <li>
                <span className="title">
                  <Image src={htmlPic} alt="html" />
                  HTML
                </span>
                <span>
                  <i className="fa-solid fa-signal"></i> Advanced{" "}
                </span>
              </li>
              <li>
                <span className="title">
                  <Image src={cssPic} alt="css" />
                  CSS
                </span>
                <span>
                  {" "}
                  <i className="fa-solid fa-signal"></i> Advanced{" "}
                </span>
              </li>
              <li>
                <span className="title">
                  <Image src={tailwindPic} alt="Tailwind" />
                  Tailwind
                </span>
                <span>
                  {" "}
                  <i className="fa-solid fa-signal"></i> Advanced{" "}
                </span>
              </li>
              <li>
                <span className="title">
                  <Image src={jsPic} alt="js" />
                  Java script
                </span>
                <span>
                  {" "}
                  <i className="fa-solid fa-signal"></i>Advanced
                </span>
              </li>
              <li>
                <span className="title">
                  <Image src={typescriptPic} width={50} alt="js" />
                  Type script
                </span>
                <span>
                  {" "}
                  <i className="fa-solid fa-signal"></i>Advanced
                </span>
              </li>
              <li>
                <span className="title">
                  <Image src={reactPic} alt="js" />
                  React Js
                </span>
                <span>
                  {" "}
                  <i className="fa-solid fa-signal"></i>Advanced
                </span>
              </li>
              <li>
                <span className="title">
                  <Image src={nextjsPic} width={50} alt="js" />
                  Next.js
                </span>
                <span>
                  {" "}
                  <i className="fa-solid fa-signal"></i>Advanced
                </span>
              </li>
            </ul>
            <h4 className="mt-64">Tools</h4>
            <ul className="skills">
              <li>
                <span className="title">
                  <Image src={gitPic} alt="git" />
                  Git
                </span>
                <span>
                  <i className="fa-solid fa-signal"></i>
                  Intermediate
                </span>
              </li>
              <li>
                <span className="title">
                  <Image src={vscodePic} alt="Vs code" />
                  VS Code
                </span>
                <span>
                  <i className="fa-solid fa-signal"></i>
                  Intermediate
                </span>
              </li>
            </ul>
            <h4>other skills</h4>
            <ul className="other-skills">
              <li>saas</li>
              <li>Less</li>
              <li>Responsive Web Design</li>
            </ul>
          </section>
        </div>
      </div>
      <nav className="mobile-nav">
        <ul>
          <li>
            <Link href="/" style={{ color: "white" }}>
              About
            </Link>
          </li>
          <li className="active">
            <Link href="/MySkills" style={{ color: "white" }}>
              Skills
            </Link>
          </li>
          <li>
            <Link href="/MyProjects" style={{ color: "white" }}>
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Skills;
