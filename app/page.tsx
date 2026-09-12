import { ProjectBrowser } from "@/components/project-browser";

export default function Home() {
  return (
    <div className="page-frame">
      <header className="site-header">
        <a aria-label="undefined.tools home" className="wordmark" href="/">
          undefined.tools
        </a>
        <span className="byline">by Oliver Carabia</span>
      </header>

      <ProjectBrowser />

      <footer className="site-footer">
        <p>© 2026 Oliver Carabia</p>
        <nav aria-label="Elsewhere">
          <a href="https://github.com/oli206" rel="noreferrer" target="_blank">
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <a
            href="https://www.linkedin.com/in/olivercarabia"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </footer>
    </div>
  );
}
