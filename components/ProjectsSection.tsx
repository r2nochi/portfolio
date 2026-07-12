import type { Dictionary, Locale } from "@/lib/i18n/types";
import { projects } from "@/lib/projects";
import styles from "./ProjectsSection.module.css";

export default function ProjectsSection({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <section id="proyectos" className={styles.section} aria-labelledby="projects-title">
      <div className="container">
        <p className={`eyebrow ${styles.eyebrow}`}>{dict.projects.eyebrow}</p>
        <h2 id="projects-title" className={styles.title}>
          {dict.projects.title}
        </h2>

        <ul className={styles.grid}>
          {projects.map((project) => (
            <li key={project.code} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={`mono ${styles.code}`}>{project.code}</span>
                <span
                  className={`mono ${styles.status} ${
                    project.status === "production"
                      ? styles.statusProduction
                      : styles.statusBuilding
                  }`}
                >
                  {project.status === "production"
                    ? dict.projects.statusProduction
                    : dict.projects.statusBuilding}
                </span>
              </div>

              <h3 className={styles.name}>{project.name}</h3>
              <p className={styles.description}>{project.description[locale]}</p>
              <p className={`mono ${styles.stack}`}>{project.stack.join(" · ")}</p>

              {(project.demoUrl || project.repoUrl) && (
                <div className={styles.links}>
                  {project.demoUrl && (
                    <a
                      className={styles.link}
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {dict.projects.demoLabel}
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      className={styles.link}
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {dict.projects.repoLabel}
                    </a>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
