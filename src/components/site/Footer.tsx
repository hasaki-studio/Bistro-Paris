import { infos } from "@/data/restaurant";
import { openReservation } from "@/lib/reservation";
import { useLang } from "@/lib/lang";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-ink text-paper">
      <div className="awning h-3 w-full" />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="display-xl text-4xl">PARISII</p>
          <p className="eyebrow mt-1 text-ochre">Aligre</p>
          <p className="mt-4 text-sm text-paper/70">{t.footerBaseline}</p>
        </div>

        <div className="text-sm text-paper/80">
          <p className="eyebrow mb-3 text-ochre">{t.footerTrouver}</p>
          <p>
            {infos.adresse}
            <br />
            {infos.codePostalVille}
          </p>
          <p className="mt-3">{t.infosService}</p>
          {infos.telephone && <p className="mt-3">{infos.telephone}</p>}
        </div>

        <div className="text-sm">
          <p className="eyebrow mb-3 text-ochre">{t.footerPlusLoin}</p>
          <ul className="space-y-2 text-paper/80">
            <li>
              <button onClick={openReservation} className="hover:text-ochre">
                {t.reserver}
              </button>
            </li>
            <li>
              <a href="#carte" className="hover:text-ochre">
                {t.voirCarte}
              </a>
            </li>
            <li>
              <a href={infos.itineraire} target="_blank" rel="noreferrer" className="hover:text-ochre">
                {t.footerItineraire}
              </a>
            </li>
            {infos.instagram && (
              <li>
                <a href={infos.instagram} className="hover:text-ochre">
                  Instagram
                </a>
              </li>
            )}
            {infos.facebook && (
              <li>
                <a href={infos.facebook} className="hover:text-ochre">
                  Facebook
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10 px-5 py-6 text-center text-xs text-paper/50">
        © {new Date().getFullYear()} PARISII Aligre — 1, place d'Aligre, 75012 Paris
      </div>
    </footer>
  );
}
