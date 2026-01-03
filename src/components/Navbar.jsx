export default function Navbar({ setSection }) {
  return (
    <nav className="navbar">
      <h2>Tecno.</h2>

      <div className="nav-links">
        <span onClick={() => setSection("home")}>Home</span>
        <span onClick={() => setSection("about")}>About</span>
        <span onClick={() => setSection("projects")}>Projects</span>
        <span onClick={() => setSection("cert")}>Certifications</span>
        <span onClick={() => setSection("exp")}>Experience</span>
        <span onClick={() => setSection("contact")}>Contact</span>
      </div>
    </nav>
  )
}
