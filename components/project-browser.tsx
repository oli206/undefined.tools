"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { Status } from "@/components/status";
import { type Project, projects } from "@/data/projects";

export function ProjectBrowser() {
  const [selectedSlug, setSelectedSlug] =
    useState<(typeof projects)[number]["slug"]>(projects[0].slug);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const closeButton = useRef<HTMLButtonElement | null>(null);
  const previewButton = useRef<HTMLButtonElement | null>(null);
  const selected: Project =
    projects.find((project) => project.slug === selectedSlug) ?? projects[0];

  useEffect(() => {
    if (!isPreviewOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsPreviewOpen(false);
      }
    }

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);
    closeButton.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
      previewButton.current?.focus();
    };
  }, [isPreviewOpen]);

  function selectAt(index: number) {
    const nextIndex = (index + projects.length) % projects.length;
    const project = projects[nextIndex];
    setSelectedSlug(project.slug);
    tabs.current[nextIndex]?.focus();
  }

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      event.preventDefault();
      selectAt(index + 1);
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      event.preventDefault();
      selectAt(index - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      selectAt(0);
    } else if (event.key === "End") {
      event.preventDefault();
      selectAt(projects.length - 1);
    }
  }

  return (
    <section aria-label="Project index" className="project-browser">
      <div aria-label="Projects" className="project-list" role="tablist">
        {projects.map((project, index) => {
          const isSelected = project.slug === selected.slug;

          return (
            <button
              aria-controls="project-panel"
              aria-selected={isSelected}
              className="project-row"
              id={`project-tab-${project.slug}`}
              key={project.slug}
              onFocus={() => setSelectedSlug(project.slug)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              onMouseEnter={() => setSelectedSlug(project.slug)}
              onPointerDown={() => setSelectedSlug(project.slug)}
              ref={(node) => {
                tabs.current[index] = node;
              }}
              role="tab"
              tabIndex={isSelected ? 0 : -1}
              type="button"
            >
              <span className="project-row__name">{project.name}</span>
              <Status value={project.status} />
              <span aria-hidden="true" className="project-row__arrow">
                →
              </span>
            </button>
          );
        })}
      </div>

      <article
        aria-labelledby={`project-tab-${selected.slug}`}
        className="project-panel"
        id="project-panel"
        key={selected.slug}
        role="tabpanel"
        tabIndex={0}
      >
        <h2 id={`project-title-${selected.slug}`}>{selected.name}</h2>
        <p className="project-category">{selected.category}</p>
        <div
          className={`project-panel__body${selected.image ? " project-panel__body--with-preview" : ""}`}
        >
          <div className="project-panel__copy">
            <p className="project-panel__summary">{selected.summary}</p>
            <p className="project-panel__description">
              {selected.description}
            </p>
          </div>
          {selected.image ? (
            <button
              aria-label={`Enlarge ${selected.name} screenshot`}
              className="project-preview"
              onClick={() => setIsPreviewOpen(true)}
              ref={previewButton}
              type="button"
            >
              <Image
                alt={selected.image.alt}
                height={selected.image.height}
                priority={selected.slug === projects[0].slug}
                sizes="(max-width: 780px) 100vw, 34vw"
                src={selected.image.src}
                width={selected.image.width}
              />
            </button>
          ) : null}
        </div>

        <div className="project-panel__footer">
          <dl>
            <div>
              <dt>Now</dt>
              <dd>{selected.current}</dd>
            </div>
            <div>
              <dt>Next</dt>
              <dd>{selected.next}</dd>
            </div>
          </dl>
          {selected.external ? (
            <a
              className="project-link"
              href={selected.external.href}
              rel="noreferrer"
              target="_blank"
            >
              {selected.external.label} <span aria-hidden="true">↗</span>
            </a>
          ) : null}
        </div>

        {isPreviewOpen && selected.image ? (
          <div
            className="preview-lightbox"
            onPointerDown={(event) => {
              if (event.currentTarget === event.target) {
                setIsPreviewOpen(false);
              }
            }}
          >
            <div
              aria-label={`${selected.name} screenshot`}
              aria-modal="true"
              className="preview-lightbox__dialog"
              role="dialog"
            >
              <button
                aria-label="Close enlarged screenshot"
                className="preview-lightbox__close"
                onClick={() => setIsPreviewOpen(false)}
                ref={closeButton}
                type="button"
              >
                Close
              </button>
              <Image
                alt={selected.image.alt}
                className="preview-lightbox__image"
                height={selected.image.height}
                priority
                quality={95}
                sizes="(max-width: 780px) calc(100vw - 2rem), calc(100vw - 6rem)"
                src={selected.image.src}
                width={selected.image.width}
              />
            </div>
          </div>
        ) : null}
      </article>
    </section>
  );
}
