import { useState } from "react";
import { carte } from "@/data/restaurant";
import { useLang } from "@/lib/lang";

export function Carte() {
  const { langue, t } = useLang();
  const [actif, setActif] = useState(carte[0]!.titre);
  const section = carte.find((s) => s.titre === actif) ?? carte[0]!;

  return (
    <section id="carte" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div className="min-w-0">
            <p className="eyebrow text-ochre-deep">{t.carteEyebrow}</p>
            <h2 className="display-xl mt-3 text-5xl sm:text-7xl">{t.carteTitre}</h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground md:text-right">{t.carteIntro}</p>
        </div>

        <div className="mt-10 flex flex-wrap items-end justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {carte.map((s) => (
              <button
                key={s.titre}
                onClick={() => setActif(s.titre)}
                className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] transition-colors ${
                  actif === s.titre
                    ? "bg-ink text-paper"
                    : "border border-border bg-card text-ink hover:border-ochre"
                }`}
              >
                {langue === "fr" ? s.titre : s.titreEn}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-1 text-sm md:text-right">
            <p className="font-bold text-ink">{t.formule1}</p>
            <p className="font-bold text-ink">{t.formule2}</p>
          </div>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_0.9fr]">
          <ul key={section.titre + langue} className="reveal divide-y divide-border">
            {section.plats.map((p) => {
              const nom = langue === "fr" ? p.nom : (p.nomEn ?? p.nom);
              const detail = langue === "fr" ? p.detail : (p.detailEn ?? p.detail);
              return (
                <li key={p.nom} className="grid gap-2 py-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex min-w-0 flex-wrap items-center gap-2">
                      <h3 className="text-lg font-bold tracking-normal" style={{ fontFamily: "var(--font-sans)" }}>
                        {nom}
                      </h3>
                      {p.tag && (
                        <span className="inline-block shrink-0 rounded-full bg-ochre/15 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-[0.14em] text-ochre-deep">
                          {langue === "fr" ? p.tag : (p.tagEn ?? p.tag)}
                        </span>
                      )}
                    </div>
                    {p.prix && (
                      <span className="shrink-0 text-lg font-bold text-ochre-deep">{p.prix}</span>
                    )}
                  </div>
                  {detail && (
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {detail}
                    </p>
                  )}
                </li>
              );
            })}
            {(langue === "fr" ? section.note : (section.noteEn ?? section.note)) && (
              <li className="py-5 text-sm italic text-muted-foreground">
                {langue === "fr" ? section.note : (section.noteEn ?? section.note)}
              </li>
            )}
          </ul>

          <div className="hidden lg:block">
            <img
              src="/images/plat.png"
              alt="Plat de la carte servi avec un verre de vin rouge"
              loading="lazy"
              className="sticky top-28 w-full rounded-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
