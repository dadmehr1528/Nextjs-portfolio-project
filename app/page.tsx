"use client";

import Image from "next/image";
import myProfilePicture from "../assets/avatar2.jpg";
import { VscChevronRight } from "react-icons/vsc";
import "./globals.css";
import { FaGithub } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "@/components/Header";
import { useRouter } from "next/router";

export default function Home() {

  const links1 = "dadmehrsadeghi1@gmail.com";
  const copylink1 = (e: any) => {
    navigator.clipboard.writeText(links1);
  };

  const links2 = "09059170051";
  const copylink2 = (e: any) => {
    navigator.clipboard.writeText(links2);
  };

  return (
    <>
      <Header />
      <div className="container">
        <nav>
          <ul>
            <li className="active">
              <Link href="/" target="_self">
                <span className="marker">
                  <VscChevronRight className="marker-icon" />
                </span>
                <span style={{ color: "black" }}>About Me</span>
              </Link>
            </li>
            <li>
              <Link href="/MySkills" target="_self">
                <span className="marker">
                  <VscChevronRight className="marker-icon" />
                </span>
                <span style={{ color: "black" }}>My Skills</span>
              </Link>
            </li>
            <li>
              <Link className="navbar-text" href="/MyProjects" target="_self">
                <span className="marker">
                  <VscChevronRight className="marker-icon" />
                </span>
                <span style={{ color: "black" }}>My Projects</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="sections">
          <section>
            <h5>About Me</h5>
            <p>
              My first name is dadmehr and my last name is sadeghi I'm 15 years
              old
              <br className="br"/>
              and I live in shiraz I'm front-end developer and I love
              programming
            </p>
            <div className="contact">
              <div>
                <h5>Email</h5>
                <p>
                  dadmehrsadeghi1@gmail.com
                  <button className="email-btn" onClick={copylink1}>
                    <IoCopyOutline />
                  </button>
                </p>
              </div>
              <div>
                <h5>Phone Number</h5>
                <p>
                  09059170051
                  <button className="email-btn" onClick={copylink2}>
                    <IoCopyOutline />
                  </button>
                </p>
              </div>
            </div>
            <h5>Social Media</h5>
            <ul className="socials">
              <li>
                <Link href="/">
                  <span className="linkdin"></span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="instagram"></span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="stackoverflow"></span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="github"></span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="twitter"></span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="telegram"></span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="whatsapp"></span>
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
      <nav className="mobile-nav">
        <ul>
          <li className="active">
            <Link href="/" style={{ color: "white" }}>
              About
            </Link>
          </li>
          <li>
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
}
