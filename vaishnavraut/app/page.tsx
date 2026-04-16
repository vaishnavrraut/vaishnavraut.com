"use client";
import { useEffect } from 'react';
import './globals.css';
import Image from "next/image";


export default function Page() {
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

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
        <section id="home" className="home fade-in">
  <div className="home-content">
    <div className="image">
      <Image
      src="/photoprof.png"
      alt="Vaishnav"
      width={270}
      height={270}
      style={{
      borderRadius: "50%",
      objectFit: "cover",
      objectPosition: "center 20%",
  }}
/>
    </div>
    <div className="text">
      <h1>Hi, I'm Vaishnav</h1>
      <p>
  EMS student focused on <strong>data analysis</strong> and <strong>quantitative problem-solving</strong>.
</p>
<p>
  Skilled in Python and statistical tools. I build projects that turn economic theory into real-world insights.
</p>
<a href="#projects" className="btn">View Projects</a>
    </div>
  </div>

</section>
        <section id="about" className="about fade-in">
  <div className="about-container">
    
    <h2 className="about-title">About</h2>

    <div className="about-content">
      <p>
        I am an Economics, Mathematics and Statistics (EMS) student focused on applying quantitative methods to real-world financial and economic problems.
      </p>

      <p>
        Currently, I am building projects in data analysis and econometrics using Python, exploring stock market trends, economic indicators, and predictive modeling.
      </p>

      <p>
        My toolkit includes <strong>pandas, NumPy, matplotlib, seaborn, and scikit-learn</strong> for data analysis, visualization, and basic machine learning.
      </p>

      <p>
        I aim to build expertise in fintech, quantitative analysis, and economic research by solving real-world problems using data.
      </p>

    </div>

  </div>
</section>

        <section id="projects" className="projects fade-in">
  <div className="projects-container">
    <h2>Projects</h2>

    <div className="projects-grid">

      <div className="project-card">
        <h3>Stock Market Analysis</h3>
        <p>
          Analyzed historical stock data using Python to identify trends and visualize price movements.
        </p>
        <p className="tech">Python • Pandas • Matplotlib</p>
        <div className="links">
          <a href="#" target="_blank">GitHub</a>
        </div>
      </div>

      <div className="project-card">
        <h3>Economic Indicators Dashboard</h3>
        <p>
          Explored GDP, inflation, and other indicators to understand economic patterns using data visualization.
        </p>
        <p className="tech">Python • Seaborn • Excel</p>
        <div className="links">
          <a href="#" target="_blank">GitHub</a>
        </div>
      </div>

    </div>
  </div>
</section>

        <section id="contact" className="contact fade-in">
  <div className="contact-container">
    <h2>Contact</h2>

    <p className="contact-text">
      I'm open to opportunities, collaborations, and discussions related to data, finance, and technology.
    </p>

    <div className="contact-links">
      <a href="mailto:vaishnavrraut@gmail.com">📧 Email</a>
      <a href="https://linkedin.com/in/vaishnavraut" target="_blank">💼 LinkedIn</a>
      <a href="https://github.com/your-github" target="_blank">💻 GitHub</a>
    </div>
    <p className="contact-text">📍 Bengaluru, KA, India</p>
  </div>
</section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 Vaishnav Raut. All rights reserved.</p>
      </footer>
    </>
  );
}