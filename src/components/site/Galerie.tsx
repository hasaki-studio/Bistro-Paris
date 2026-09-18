import { useLang } from "@/lib/lang";

// Ajouter simplement une entrée ici pour compléter la galerie.
const photos = [
  { src: "/images/facade.png", alt: "La façade et la terrasse de PARISII Aligre", span: "row-span-2" },
  { src: "/images/plat.png", alt: "Plat servi avec un verre de vin rouge", span: "" },
  { src: "/images/apero-huitres.png", alt: "Plateau d'huîtres et vin blanc en terrasse", span: "" },
  { src: "/images/salle-parisii.png", alt: "La salle, banquettes et chaises bistrot", span: "sm:col-span-2" },
  { src: "/images/service.png", alt: "Le service en terrasse chez PARISII", span: "row-span-2" },
  { src: "/images/houmous.png", alt: "Houmous et pain grillé à partager", span: "" },
  { src: "/images/poulpe.png", alt: "Poulpe grillé et riz crémeux servi en cocotte de cuivre", span: "" },
  { src: "/images/tartare-agrumes.png", alt: "Tartare de poisson aux agrumes et basilic", span: "" },
];

export function Galerie() {
  const { t } = useLang();

  return (
    <section id="galerie" className="bg-ink py-20 text-paper sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <p className="eyebrow text-ochre">{t.galerieEyebrow}</p>
        <h2 className="display-xl mt-3 text-5xl sm:text-7xl">{t.galerieTitre}</h2>

        <div className="mt-10 grid auto-rows-[200px] grid-cols-2 gap-3 sm:auto-rows-[240px] lg:grid-cols-3">
          {photos.map((p) => (
            <figure
              key={p.alt}
              className={`group overflow-hidden rounded-md ${p.span}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
