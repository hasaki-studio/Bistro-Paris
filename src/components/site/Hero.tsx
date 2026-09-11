import facade from "@/assets/facade.png.asset.json";
import { infos } from "@/data/restaurant";
import { openReservation } from "@/lib/reservation";
import { useLang } from "@/lib/lang";

export function Hero() {
  const { t } = useLang();

  return (
    <section id="top" className="relative min-h-[92svh] w-full overflow-hidden">
      <img
        src={facade.url}
        alt="La façade et la terrasse de PARISII Aligre, place d'Aligre à Paris"
        className="absolute inset-0 h-full w-full object-cover object-center"
        width={1280}
        height={1920}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/25" />

      <div className="relative mx-auto flex min-h-[92svh] max-w-6xl flex-col justify-end px-5 pb-12 pt-28">
        <p className="eyebrow reveal text-ochre">{t.heroEyebrow}</p>
        <h1 className="display-xl reveal mt-3 text-[2.9rem] leading-[0.95] text-paper sm:text-[4.5rem] lg:text-[5.5rem]">
          {t.heroTitre1}
          <br />
          <span className="text-ochre">{t.heroTitre2}</span>
        </h1>

        <div className="reveal mt-7 flex flex-wrap gap-3">
          <button onClick={openReservation} className="btn-ochre">
            {t.heroReserver}
          </button>
          <a href="#carte" className="btn-outline-ink text-paper">
            {t.voirCarte}
          </a>
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-paper/80">
          <span>
            {infos.adresse}, {infos.codePostalVille}
          </span>
          <span className="hidden sm:inline">•</span>
          <span>{t.infosService}</span>
        </div>
      </div>
    </section>
  );
}
