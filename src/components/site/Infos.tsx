import { infos } from "@/data/restaurant";
import { openReservation } from "@/lib/reservation";
import { useLang } from "@/lib/lang";

export function Infos() {
  const tel = infos.telephone.replace(/\s/g, "");
  const { t } = useLang();

  return (
    <section id="infos" className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="eyebrow text-ochre-deep">{t.infosEyebrow}</p>
            <h2 className="display-xl mt-3 text-5xl sm:text-6xl">
              PARISII <span className="text-ochre-deep">Aligre</span>
            </h2>

            <dl className="mt-8 space-y-6 text-base">
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

          <div id="reserver" className="rounded-md border border-border bg-card p-8 scroll-mt-24">
            <h3 className="text-3xl">{t.infosReserverTitre}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {t.infosReserverTexte}
            </p>

            <div className="mt-7 flex flex-col gap-3">
              <button onClick={openReservation} className="btn-ochre w-full">
                {t.reserverEnLigne}
              </button>
              {infos.telephone && (
                <a href={`tel:${tel}`} className="btn-ink w-full">
                  {t.appelerResto}
                </a>
              )}
              <a
                href={infos.itineraire}
                target="_blank"
                rel="noreferrer"
                className="btn-outline-ink w-full text-ink"
              >
                {t.itineraire}
              </a>
            </div>

            {(infos.instagram || infos.facebook) && (
              <div className="mt-6 flex gap-4 text-sm font-bold uppercase tracking-widest">
                {infos.instagram && (
                  <a href={infos.instagram} target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                )}
                {infos.facebook && (
                  <a href={infos.facebook} target="_blank" rel="noreferrer">
                    Facebook
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
