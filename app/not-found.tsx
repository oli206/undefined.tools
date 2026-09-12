import Link from "next/link";

export default function NotFound() {
  return (
    <div className="shell not-found">
      <p className="eyebrow">404</p>
      <h1>Nothing here yet.</h1>
      <p>The page may have moved, or it may still be just an idea.</p>
      <Link className="text-link" href="/">
        Return home <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
