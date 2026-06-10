import Image from "next/image";

type Props = {
  label: string;
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
};

export default function BrandStoryBlock({
  label,
  title,
  body,
  imageSrc,
  imageAlt,
  reverse = false,
}: Props) {
  return (
    <section className={`brand-story${reverse ? " brand-story--reverse" : ""}`}>
      <div className="brand-story-inner">
        <div className="brand-story-media">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 900px) 100vw, 540px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="brand-story-copy">
          <p className="brand-label">{label}</p>
          <h2 className="brand-heading">{title}</h2>
          <p className="brand-body">{body}</p>
        </div>
      </div>
    </section>
  );
}
