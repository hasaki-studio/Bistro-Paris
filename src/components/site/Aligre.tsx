import { infos } from "@/data/restaurant";
import { useLang } from "@/lib/lang";

export function Aligre() {
  const { t } = useLang();

  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow text-ochre-deep">{t.aligreEyebrow}</p>
            <h2 className="display-xl mt-3 text-5xl sm:text-6xl">{t.aligreTitre}</h2>
            <p className="mt-5 leading-relaxed text-ink/80">{t.aligreP1}</p>
            <p className="mt-4 leading-relaxed text-ink/80">{t.aligreP2}</p>
            <a href="#infos" className="btn-outline-ink mt-8 inline-block text-ink">
              {t.aligreCta}
            </a>
          </div>

          <dl className="space-y-6 rounded-md border border-border bg-card p-8 text-base">
            <div>
              <dt className="eyebrow text-muted-foreground">{t.infosAdresse}</dt>
              <dd className="mt-1">
                {infos.adresse}
                <br />
                {infos.codePostalVille}
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-muted-foreground">{t.infosHoraires}</dt>
              <dd className="mt-1">
                {t.infosService}
                <br />
                {t.infosApero}
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-muted-foreground">{t.infosTelephone}</dt>
              <dd className="mt-1">{infos.telephone}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
