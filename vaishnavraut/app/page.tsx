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
        <section id="home">
          <h2>Home</h2>
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
        <p>&copy; 2024 Vaishnav Raut. All rights reserved.</p>
      </footer>
    </>
  );
}