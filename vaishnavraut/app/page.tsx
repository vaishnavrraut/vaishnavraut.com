import './globals.css';
import Image from "next/image";


export default function Page() {
  return (
    <>
      <nav className="navbar">
        <h1 className="logo">Vaishnav Raut</h1>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <main>
        <section id="home" className="home">
  <div className="home-content">
    <div className="image">
      <Image
      src="/photograph-2.jpg"
      alt="Vaishnav"
      width={120}
      height={120}
      className="profile-pic"
    />
    </div>
    <div className="text">
      <h1>Hi, I'm Vaishnav</h1>
      <p>I am an EMS student with a strong focus on data analysis, quantitative reasoning, and practical application of economic concepts. Skilled in Python and statistical tools, I build projects that translate theory into real-world insights. This portfolio showcases my work, skills, and progress in developing as a data-driven problem solver.</p>
    </div>
  </div>
</section>
        <section id="about">
          <h2>About</h2>
        </section>

        <section id="projects">
          <h2>Projects</h2>
        </section>

        <section id="contact">
          <h2>Contact</h2>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 Vaishnav Raut. All rights reserved.</p>
      </footer>
    </>
  );
}