import "./globals.css";


export default function Page() {
  return (
     <main>
      <nav className="navbar">
        <h1 className="logo">Vaishnav Raut</h1>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
       <footer className="footer">
      <p>&copy; 2024 Vaishnav Raut. All rights reserved.</p>
     </footer>
     </main>
    
  );
}