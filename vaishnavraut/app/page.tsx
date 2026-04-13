"use client";
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
      width={160}
      height={160}
      style={{
      borderRadius: "50%",
      objectFit: "cover"
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
        <section id="about">
          <h2>About</h2>
          <p> I am an Economics, Mathematics and Statistics (EMS) student with a strong focus on applying quantitative methods to real-world financial and economic problems. My academic background has helped me build a solid foundation in analytical thinking, statistical reasoning, and data interpretation.

Currently, I am developing projects in data analysis and econometrics using Python, exploring areas such as stock market trends, economic indicators, and basic predictive modeling. I work with tools like pandas, NumPy, matplotlib, seaborn, and Excel to clean datasets, perform analysis, and visualize patterns effectively. I am also familiar with scikit-learn for implementing basic machine learning models.

My goal is to build expertise at the intersection of finance and data, particularly in fintech, quantitative analysis, and economic research, by continuously strengthening my technical toolkit and applying it to real-world problem-solving.</p>
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