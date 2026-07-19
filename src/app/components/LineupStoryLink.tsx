import Link from "next/link";

type Props = {
  href: string;
  label?: string;
};

/** Compact Stories link for use inside product lineup cards. */
export default function LineupStoryLink({
  href,
  label = "Read the story",
}: Props) {
  return (
    <p className="sashiko-lineup-story">
      <Link href={href} className="sashiko-lineup-story-link">
        {label}
        <span aria-hidden="true"> →</span>
      </Link>
    </p>
  );
}
