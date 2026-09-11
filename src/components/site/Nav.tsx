import { useEffect, useState } from "react";
import { infos } from "@/data/restaurant";
import { openReservation } from "@/lib/reservation";
import { useLang } from "@/lib/lang";
import { DrapeauLangue } from "./DrapeauLangue";

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useLang();

  const links = [
    { href: "#carte", label: t.navCarte },
    { href: "#apero", label: t.navApero },
    { href: "#galerie", label: t.navPhotos },
    { href: "#infos", label: t.navInfos },
  ];

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-paper/95 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3">
        <a href="#top" className="min-w-0">
          <span
            className={`display-xl block text-2xl leading-none ${solid ? "text-ink" : "text-paper"}`}
          >
            PARISII
          </span>
          <span
            className={`eyebrow block text-[0.55rem] ${solid ? "text-ochre-deep" : "text-ochre"}`}
          >
            Aligre
          </span>
        </a>

        <div className="flex shrink-0 items-center gap-4 md:gap-6">
          <nav className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-ochre-deep ${
                  solid ? "text-ink" : "text-paper"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <DrapeauLangue clair={!solid} />
          <button onClick={openReservation} className="btn-ochre hidden md:inline-flex">
            {t.reserver}
          </button>
          <button
            aria-label={t.ouvrirMenu}
            onClick={() => setOpen((v) => !v)}
            className={`md:hidden ${solid ? "text-ink" : "text-paper"}`}
          >
            <span className="block h-0.5 w-7 bg-current" />
            <span className="mt-1.5 block h-0.5 w-7 bg-current" />
            <span className="mt-1.5 block h-0.5 w-7 bg-current" />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-paper px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-bold uppercase tracking-widest text-ink"
              >
                {l.label}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => {
                  setOpen(false);
                  openReservation();
                }}
                className="btn-ochre flex-1"
              >
                {t.reserver}
              </button>
              {infos.telephone && (
                <a href={`tel:${infos.telephone.replace(/\s/g, "")}`} className="btn-outline-ink flex-1 text-ink">
                  {t.appeler}
                </a>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
