import Image from "next/image";

const PILLARS = [
  {
    title: "Premium Cotton",
    body: "Made from carefully selected extra-long staple cotton, chosen for strength, softness, and consistency.",
    image: "/images/pillar-premium-cotton.jpg",
    alt: "Close-up of extra-long staple cotton fibers",
  },
  {
    title: "Silk-like Luster",
    body: "A refined sheen enhances every stitch and brings depth to every color.",
    image: "/images/pillar-silk-luster.jpg",
    alt: "COSMO embroidery floss with a silky sheen",
  },
  {
    title: "Lasting Color",
    body: "Advanced dyeing techniques create vibrant colors that remain beautiful over time.",
    image: "/images/pillar-color-bouquet.png",
    alt: "Multicolored bouquet of COSMO embroidery floss skeins",
  },
];

export default function BrandPillars() {
  return (
    <section className="brand-pillars">
      <h2 className="brand-pillars-heading">The Qualities Behind Every Thread</h2>
      <div className="brand-pillars-inner">
        {PILLARS.map((p) => (
          <div key={p.title} className="brand-pillar">
            <div className="brand-pillar-image">
              <Image
                src={p.image}
                alt={p.alt}
                fill
                sizes="(max-width:640px) 80vw, 360px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <h2 className="brand-pillar-title">{p.title}</h2>
            <p className="brand-pillar-body">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
