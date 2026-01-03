import { useState } from "react"
import HackerBackground from "./components/HackerBackground"
import Navbar from "./components/Navbar"

import mayur from "./assets/mayur.jpeg"

import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa"
import { SiLeetcode, SiTryhackme } from "react-icons/si"

export default function App() {
  const [section, setSection] = useState("home")
  const [openCert, setOpenCert] = useState(null)

  return (
    <>
      <HackerBackground />
      <Navbar setSection={setSection} />

      <div className="card">

        {/* HOME */}
        {section === "home" && (
          <div className="hero">
            <div className="hero-left">
              <h1>
                Hi, I’m <span>Mayur Girase</span>
              </h1>

              <h2>Cloud Security & Cyber Security Aspirant</h2>

              <p>
                B.Tech Cyber Security student exploring Cloud Security and Cyber Security roles.
                 Currently learning cloud basics (AWS fundamentals) with hands-on cybersecurity internship experience,
                  and open to opportunities to gain real-world exposure.
              </p>

              <div className="buttons">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn primary"
                >
                  Resume
                </a>

                <button
                  className="btn outline"
                  onClick={() => setSection("contact")}
                >
                  Contact
                </button>
              </div>

              <div className="icons">
                <a href="https://github.com/cyberMayur7" target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/mayur-girase-7060b6286" target="_blank" rel="noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://leetcode.com/u/tecno_mayur" target="_blank" rel="noreferrer">
                  <SiLeetcode />
                </a>
                <a href="https://www.hackerrank.com/profile/tecnomayur7" target="_blank" rel="noreferrer">
                  <FaHackerrank />
                </a>
                <a href="https://tryhackme.com/p/tecnomayur" target="_blank" rel="noreferrer">
                  <SiTryhackme />
                </a>
              </div>
            </div>

            <div className="hero-right">
              <img src={mayur} alt="Mayur Girase" />
            </div>
          </div>
        )}

        {/* ABOUT */}
        {section === "about" && (
          <div>
            <h3>About Me</h3>
            <p>
              I am a Cyber Security undergraduate who is now transitioning
              towards Cloud Security. I have recently started learning cloud
              fundamentals and security basics while continuing to strengthen
              my Cyber Security knowledge. I am currently open to Cloud
              Security, Cyber Security, or related intern roles to build strong
              industry experience.
            </p>
          </div>
        )}

        {/* SKILLS */}
        {section === "skills" && (
          <ul className="skill-list">
            <li>Cloud Basics (AWS Fundamentals – Beginner)</li>
            <li>Cloud Security – Learning Phase</li>
            <li>Cyber Security Fundamentals</li>
            <li>Vulnerability Assessment & Penetration Testing (VAPT)</li>
            <li>Application Security (SQLi, XSS – Basics)</li>
            <li>Identity & Access Management (IAM – Intro Level)</li>
            <li>Linux & Kali Linux</li>
            <li>Burp Suite, OWASP ZAP (Basic Usage)</li>
            <li>Python Basics for Security</li>
          </ul>
        )}

        {/* PROJECTS */}
        {section === "projects" && (
          <div className="projects">

            <div className="project-card">
              <h3>Phishing Attack Detection (Learning Project)</h3>
              <p>
                Beginner-level machine learning project to understand how
                phishing attacks can be detected using basic ML models.
              </p>
              <span>Python • Cyber Security • Learning</span>
            </div>

            <div className="project-card">
              <h3>TecnoShadowCrypt</h3>
              <p>
                Python-based cryptography learning tool to understand encryption
                and hashing concepts.
              </p>
              <span>Python • Cryptography</span>
              <a href="https://github.com/cyberMayur7/TecnoShadowCrypt" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>

            <div className="project-card">
              <h3>Password Strength Checker</h3>
              <p>
                Simple Python tool to understand password security concepts.
              </p>
              <span>Python • Security Basics</span>
              <a href="https://github.com/cyberMayur7/PasswordStrengthChecker_by_Tecno" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>

          </div>
        )}

        {/* CERTIFICATIONS */}
        {section === "cert" && (
          <ul className="cert-list">
            <li onClick={() => setOpenCert("Cyber Security – Quick Heal")}>
              Cyber Security – Quick Heal
            </li>
            <li onClick={() => setOpenCert("Certified Cybersecurity Educator Professional (CCEP)")}>
              Certified Cybersecurity Educator Professional (CCEP)
            </li>
            <li onClick={() => setOpenCert("Cloud Basics – Learning Stage")}>
              Cloud Basics (Currently Learning)
            </li>
          </ul>
        )}

        {/* EXPERIENCE */}
        {section === "exp" && (
          <ul>
            <li>Cyber Security Intern – ShadowFox</li>
            <li>Cyber Security Intern – The Red Users</li>
            <li>Cyber Security Intern – Hacktify Cyber Security LLP</li>
            <li>Cyber Security Intern – CyberZero.Club</li>
          </ul>
        )}

        {/* CONTACT */}
        {section === "contact" && (
          <div>
            <p><b>Name:</b> Mayur Girase</p>
            <p><b>Email:</b> tecnomayur7@gmail.com</p>
            <p><b>Location:</b> Vadodara, Gujarat, India</p>
            <p><b>Status:</b> Open to Cloud Security & Cyber Security roles</p>
          </div>
        )}

      </div>

      {/* MODAL */}
      {openCert && (
        <div className="modal">
          <div className="modal-box">
            <h2>{openCert}</h2>
            <button onClick={() => setOpenCert(null)}>Close</button>
          </div>
        </div>
      )}
    </>
  )
}
