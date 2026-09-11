import { useLang } from "@/lib/lang";

export function Aligre() {
  const { t } = useLang();

  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <p className="eyebrow text-ochre-deep">{t.aligreEyebrow}</p>
        <h2 className="display-xl mt-3 text-5xl sm:text-6xl">{t.aligreTitre}</h2>
        <p className="mt-5 leading-relaxed text-ink/80">{t.aligreP1}</p>
        <p className="mt-4 leading-relaxed text-ink/80">{t.aligreP2}</p>
        <a href="#infos" className="btn-outline-ink mt-8 inline-block text-ink">
          {t.aligreCta}
        </a>
      </div>
    </section>
  );
}
