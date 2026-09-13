import { motion } from "framer-motion";
import { ArrowUpRight, GitBranch } from "lucide-react";
import { projects } from "../projects";

function Projects() {
  return (
    <section id="work" className="projects-section">
      <div className="feed-container">
        <div className="section-label">
          <span>02</span>
          <span>PROJECT FEED</span>
        </div>

        <div className="projects-intro">
          <div>
            <p className="eyebrow">SELECTED WORK</p>

            <h2>
              Things I've
              <br />
              <span>built & analyzed.</span>
            </h2>
          </div>

          <p>
            A selection of software engineering, data engineering,
            and business intelligence projects.
          </p>
        </div>

        <div className="project-feed">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              className="project-post"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: index * 0.05,
              }}
            >
              <div className="feed-marker">
                <span>{project.number}</span>
              </div>

              <div className="project-post-content">
                <div className="project-meta">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>

                <div className="project-layout">
                  <div className="project-info">
                    <h3>{project.title}</h3>

                    <p className="project-description">
                      {project.description}
                    </p>

                    <div className="project-tech">
                      {project.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>

                    <div className="project-actions">
                      {project.github !== "#" ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="project-link"
                        >
                          View repository
                          <ArrowUpRight size={15} />
                        </a>
                      ) : (
                        <span className="project-unavailable">
                          Repository unavailable
                        </span>
                      )}

                      {project.live !== "#" && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="project-secondary-link"
                        >
                          Live project
                          <ArrowUpRight size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="project-visual">
                    <div className="visual-header">
                      <span>WORKFLOW</span>
                      <GitBranch size={15} />
                    </div>

                    <div className="workflow">
                      {project.workflow.map((step, stepIndex) => (
                        <div className="workflow-step" key={step}>
                          <span className="workflow-number">
                            {String(stepIndex + 1).padStart(2, "0")}
                          </span>

                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;