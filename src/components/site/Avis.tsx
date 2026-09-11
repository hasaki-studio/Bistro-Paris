import { avis } from "@/data/restaurant";
import { useLang } from "@/lib/lang";

export function Avis() {
  const { t } = useLang();
  if (avis.length === 0) return null;

  return (
    <section id="avis" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <p className="eyebrow text-ochre-deep">{t.avisEyebrow}</p>
          <h2 className="display-xl mt-3 text-5xl sm:text-6xl">{t.avisTitre}</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {avis.slice(0, 3).map((a) => (
            <figure
              key={a.auteur + a.date}
              className="flex h-full flex-col justify-between rounded-md border border-border bg-card p-7"
            >
              <div>
                <p className="text-lg tracking-[0.2em] text-ochre-deep" aria-label={t.avisEtoiles}>
                  ★★★★★
                </p>
                <blockquote
                  className="mt-4 text-lg leading-relaxed text-ink/85"
                  style={{ fontFamily: "var(--font-serif-note)" }}
                >
                  « {a.texte} »
                </blockquote>
              </div>
              <figcaption className="mt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {a.auteur} · {a.date}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
