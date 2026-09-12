export const projectStatuses = ["idea", "wip", "live", "archived"] as const;

export type ProjectStatus = (typeof projectStatuses)[number];

export type Project = {
  slug: string;
  name: string;
  status: ProjectStatus;
  category: string;
  summary: string;
  description: string;
  current: string;
  next: string;
  areas: readonly string[];
  external?: {
    label: string;
    href: "https://mlfomo.dev";
  };
};

/**
 * Public portfolio data only.
 *
 * Keep this intentionally small. Do not add local paths, private repository
 * links, credentials, internal notes, deployment details, or unpublished
 * implementation data here.
 */
export const projects = [
  {
    slug: "mlfomo",
    name: "mlfomo",
    status: "live",
    category: "ML / AI news aggregator",
    summary:
      "An ML/AI news aggregator with a simple interface for quickly finding the stories that matter.",
    description:
      "mlfomo collects posts from machine-learning communities and Hacker News, enriches the articles, and presents the feed with categories and trend views.",
    current: "Live at mlfomo.dev.",
    next: "Continue improving source quality, ranking, and scanability.",
    areas: ["News aggregation", "Machine learning", "Web"],
    external: {
      label: "Visit mlfomo",
      href: "https://mlfomo.dev",
    },
  },
  {
    slug: "backstep",
    name: "Backstep",
    status: "idea",
    category: "Filesystem history",
    summary:
      "A proposal for recording and rolling back files changed by AI agents outside Git repositories.",
    description:
      "Backstep is currently a research project comparing filesystem watchers, snapshots, and mediated write models. There is no implementation yet.",
    current:
      "Pre-implementation research and comparison with existing tools.",
    next:
      "Build a small test harness to measure capture gaps and rollback conflicts.",
    areas: ["Developer tools", "Local history", "Safety"],
  },
  {
    slug: "memento",
    name: "Memento",
    status: "wip",
    category: "Local-first spatial photo tool",
    summary:
      "A local-first tool for cataloging a photo library and finding image groups that may support spatial reconstruction.",
    description:
      "The current Python CLI extracts photo metadata, creates thumbnails, groups preliminary visits, stores results in SQLite, and generates a local HTML report. 3D reconstruction is not implemented.",
    current:
      "The read-only catalog and local report are implemented with generated test fixtures.",
    next:
      "Improve metadata coverage and evaluate a small, manually selected photo sample.",
    areas: ["Spatial computing", "Local-first", "Photography"],
  },
  {
    slug: "shotgun",
    name: "Shotgun",
    status: "wip",
    category: "Gaming assistant",
    summary:
      "An on-demand gaming assistant that uses the current screen to answer questions about items, bosses, and gameplay.",
    description:
      "The current Tauri desktop prototype includes the overlay interface, global shortcut, and window lifecycle. Screen capture and live AI requests are not implemented yet.",
    current:
      "Overlay interface, global shortcut, and native window lifecycle are implemented.",
    next:
      "Test capture and overlay behavior across representative Windows games and display setups.",
    areas: ["Desktop", "Games", "Applied AI"],
  },
] as const satisfies readonly Project[];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
