import huitres from "@/assets/apero-huitres.png.asset.json";
import houmous from "@/assets/houmous.png.asset.json";
import { apero, happyHour } from "@/data/restaurant";
import { openReservation } from "@/lib/reservation";
import { useLang } from "@/lib/lang";

export function Apero() {
  const { langue, t } = useLang();

  return (
    <section id="apero" className="bg-ink py-20 text-paper sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        {/* Affiche digitale */}
        <div className="relative overflow-hidden rounded-md border-2 border-ochre/70 bg-ink">
          <div className="awning h-4 w-full" />
          <div className="grid gap-0 md:grid-cols-[1.1fr_0.9fr]">
            <div className="px-6 py-12 text-center sm:px-12 sm:py-16">
              <p className="eyebrow text-ochre">
                {langue === "fr" ? apero.titre : "The aperitivo starts here"}
              </p>
              <p className="display-xl mt-6 text-[4.5rem] leading-[0.85] text-paper sm:text-[7rem]">
                1 €
              </p>
              <p className="display-xl text-[2.4rem] text-ochre sm:text-[3.5rem]">
                {t.aperoHuitre}
              </p>
              <div className="rule-ochre mx-auto my-7 w-40" />
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-paper/80">
                {langue === "fr" ? apero.horaire : "Every evening from 4.30pm"}
              </p>
              <p className="mt-6 text-2xl text-ochre" style={{ fontFamily: "var(--font-serif-note)" }}>
                {langue === "fr" ? apero.slogan : "Good wine, and good friends!"}
              </p>
              <button onClick={openReservation} className="btn-ochre mt-8">
                {t.aperoBtn}
              </button>
            </div>
            <div className="relative min-h-64">
              <img
                src={huitres.url}
                alt="Plateau d'huîtres fraîches, pain et verres de vin blanc en terrasse chez PARISII"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Happy hour */}
        <div className="mt-20 grid items-center gap-10 md:grid-cols-2">
          <div className="relative">
            <img
              src={houmous.url}
              alt="Houmous, pain grillé et verre à partager à l'apéro"
              loading="lazy"
              className="w-full rounded-md object-cover"
            />
          </div>
          <div>
            <p className="eyebrow text-ochre">{t.happyEyebrow}</p>
            <h2 className="display-xl mt-4 text-4xl sm:text-5xl">
              {langue === "fr" ? happyHour.titre : happyHour.titreEn}
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {happyHour.categories.map((cat) => (
                <div key={cat.titre}>
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-ochre">
                    {langue === "fr" ? cat.titre : cat.titreEn}
                  </h3>
                  <ul className="mt-3 grid gap-2">
                    {cat.items.map((item) => (
                      <li
                        key={item.nom}
                        className="flex items-baseline justify-between gap-4 border-t border-paper/15 pt-2 text-sm text-paper/90"
                      >
                        <span>{langue === "fr" ? item.nom : item.nomEn}</span>
                        <span className="shrink-0 font-semibold text-ochre">{item.prix}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
