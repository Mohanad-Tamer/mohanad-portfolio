import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <div id="top" className="portfolio-app">
      <Navbar />

      <main>
        <Hero />

        <section id="about" className="about-section">
          <div className="feed-container">
            <div className="section-label">
              <span>01</span>
              <span>ABOUT</span>
            </div>

            <div className="about-content">
              <div>
                <p className="eyebrow">A LITTLE ABOUT ME</p>

                <h2>
                  I build software,
                  <br />
                  <span>data-driven systems.</span>
                </h2>
              </div>

              <div className="about-copy">
                <p>
                  I'm Mohanad Tamer, a Computer Science & AI student at
                  Helwan University focused on software development,
                  data engineering, and business applications.
                </p>

                <p>
                  I enjoy turning business requirements into practical
                  systems — from SharePoint and React applications to
                  data pipelines and analytical dashboards.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Projects />

        <section id="skills" className="skills-section">
          <div className="feed-container">
            <div className="section-label">
              <span>03</span>
              <span>SKILLS</span>
            </div>

            <div className="skills-header">
              <div>
                <p className="eyebrow">TECHNICAL TOOLKIT</p>
                <h2>
                  Tools I use to
                  <br />
                  <span>build things.</span>
                </h2>
              </div>
            </div>

            <div className="skills-grid">
              <div className="skill-group">
                <span className="skill-number">01</span>
                <h3>Languages</h3>
                <div className="skill-list">
                  <span>Python</span>
                  <span>Java</span>
                  <span>C</span>
                  <span>PHP</span>
                  <span>SQL</span>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>TypeScript</span>
                </div>
              </div>

              <div className="skill-group">
                <span className="skill-number">02</span>
                <h3>Software</h3>
                <div className="skill-list">
                  <span>React</span>
                  <span>SPFx</span>
                  <span>SharePoint</span>
                  <span>PnPjs</span>
                  <span>Power Apps</span>
                  <span>Git</span>
                </div>
              </div>

              <div className="skill-group">
                <span className="skill-number">03</span>
                <h3>Data</h3>
                <div className="skill-list">
                  <span>Pandas</span>
                  <span>MySQL</span>
                  <span>Data Cleaning</span>
                  <span>ETL</span>
                  <span>Excel</span>
                  <span>Power BI</span>
                </div>
              </div>

              <div className="skill-group">
                <span className="skill-number">04</span>
                <h3>Concepts</h3>
                <div className="skill-list">
                  <span>OOP</span>
                  <span>DBMS</span>
                  <span>Debugging</span>
                  <span>Testing</span>
                  <span>REST APIs</span>
                  <span>CRUD</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="feed-container">
            <div className="contact-card">
              <div>
                <p className="eyebrow">04 / CONTACT</p>

                <h2>
                  Let's build
                  <br />
                  <span>something useful.</span>
                </h2>

                <p>
                  I'm open to internships, junior software engineering
                  opportunities, and projects where I can keep learning
                  and contribute to real systems.
                </p>
              </div>

              <div className="contact-links">
                <a
                  href="https://github.com/Mohanad-Tamer"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                  <span>↗</span>
                </a>

                <a href="mailto:mohanadtamer@example.com">
                  Email
                  <span>↗</span>
                </a>
              </div>
            </div>

            <footer className="site-footer">
              <span>MOHANAD TAMER</span>
              <span>SOFTWARE · DATA · ENGINEERING</span>
              <span>© 2026</span>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;