export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Hi, I’m <span>Mayur Girase</span></h1>

        <h2>Aspiring Cloud & Cyber Security </h2>

        <p>
          B.Tech CSE student with hands-on experience in AWS, Linux , 
          Cyber Security and DevOps fundamentals. Open for Cloud &
          Cyber Security roles.
        </p>

        <div className="buttons">
          <a href="/resume.pdf" target="_blank" className="btn primary">
            Resume
          </a>
          <a href="#contact" className="btn outline">
            Contact
          </a>
        </div>

        <div className="socials">
          <a href="https://github.com/cyberMayur7">GitHub</a>
          <a href="https://linkedin.com/in/mayur-girase-7060b6286">LinkedIn</a>
          <a href="https://leetcode.com/tecno_mayur">LeetCode</a>
          <a href="https://tryhackme.com/p/tecnomayur">TryHackMe</a>
        </div>
      </div>

      <div className="hero-right">
        <img src="/mayur.png" alt="Mayur" />
      </div>
    </section>
  )
}
