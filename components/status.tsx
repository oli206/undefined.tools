import type { ProjectStatus } from "@/data/projects";

export function Status({ value }: { value: ProjectStatus }) {
  return (
    <span className="status" data-status={value}>
      {value}
    </span>
  );
}
