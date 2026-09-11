import { useEffect, useState } from "react";
import { infos } from "@/data/restaurant";
import { useLang } from "@/lib/lang";

type Props = {
  open: boolean;
  onClose: () => void;
};

const creneaux = [
  "12:00", "12:30", "13:00", "13:30", "14:00",
  "16:30", "17:00", "18:00", "19:00", "19:30",
  "20:00", "20:30", "21:00", "21:30", "22:00",
];

export function Reservation({ open, onClose }: Props) {
  const [envoye, setEnvoye] = useState(false);
  const tel = infos.telephone.replace(/\s/g, "");
  const { t } = useLang();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) setEnvoye(false);
  }, [open]);

  if (!open) return null;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const corps = [
      `${t.nom} : ${data.get("nom")}`,
      `${t.telephone} : ${data.get("tel")}`,
      `${t.email} : ${data.get("email")}`,
      `${t.date} : ${data.get("date")}`,
      `${t.heure} : ${data.get("heure")}`,
      `${t.personnes} : ${data.get("personnes")}`,
      `${t.message} : ${data.get("message") || "—"}`,
    ].join("\n");

    if (infos.email) {
      window.location.href = `mailto:${infos.email}?subject=${encodeURIComponent(
        t.sujetMail,
      )}&body=${encodeURIComponent(corps)}`;
    }
    setEnvoye(true);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-ink/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={t.infosReserverTitre}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="reveal max-h-[92svh] w-full max-w-lg overflow-y-auto rounded-t-lg border border-ochre/40 bg-paper sm:rounded-lg"
      >
        <div className="awning h-3 w-full" />
        <div className="flex items-start justify-between gap-4 px-6 pt-6">
          <div>
            <p className="eyebrow text-ochre-deep">{t.resaEyebrow}</p>
            <h2 className="display-xl mt-2 text-4xl">{t.resaTitre}</h2>
          </div>
          <button
            onClick={onClose}
            aria-label={t.fermer}
            className="shrink-0 rounded-full border border-border px-3 py-1 text-lg leading-none text-ink"
          >
            ×
          </button>
        </div>

        {envoye ? (
          <div className="px-6 py-10 text-center">
            <p className="text-2xl" style={{ fontFamily: "var(--font-serif-note)" }}>
              {t.merci}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              {infos.email ? t.merciMail : t.merciTel}
            </p>
            <div className="mt-6 flex flex-col gap-3">
              {infos.telephone && (
                <a href={`tel:${tel}`} className="btn-ochre w-full">
                  {t.appelerResto}
                </a>
              )}
              <button onClick={onClose} className="btn-outline-ink w-full text-ink">
                {t.fermer}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="grid gap-4 px-6 py-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5 text-sm">
                <span className="eyebrow text-muted-foreground">{t.nom}</span>
                <input
                  name="nom"
                  required
                  className="rounded-md border border-border bg-card px-3 py-3 text-base outline-none focus:border-ochre-deep"
                />
              </label>
              <label className="grid gap-1.5 text-sm">
                <span className="eyebrow text-muted-foreground">{t.telephone}</span>
                <input
                  name="tel"
                  type="tel"
                  required
                  className="rounded-md border border-border bg-card px-3 py-3 text-base outline-none focus:border-ochre-deep"
                />
              </label>
              <label className="grid gap-1.5 text-sm sm:col-span-2">
                <span className="eyebrow text-muted-foreground">{t.email}</span>
                <input
                  name="email"
                  type="email"
                  required
                  className="rounded-md border border-border bg-card px-3 py-3 text-base outline-none focus:border-ochre-deep"
                />
              </label>
              <label className="grid gap-1.5 text-sm">
                <span className="eyebrow text-muted-foreground">{t.date}</span>
                <input
                  name="date"
                  type="date"
                  required
                  className="rounded-md border border-border bg-card px-3 py-3 text-base outline-none focus:border-ochre-deep"
                />
              </label>
              <label className="grid gap-1.5 text-sm">
                <span className="eyebrow text-muted-foreground">{t.personnes}</span>
                <select
                  name="personnes"
                  defaultValue="2"
                  className="rounded-md border border-border bg-card px-3 py-3 text-base outline-none focus:border-ochre-deep"
                >
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                  <option value="13+">{t.plus13}</option>
                </select>
              </label>
            </div>

            <fieldset className="grid gap-2">
              <legend className="eyebrow mb-1 text-muted-foreground">{t.heure}</legend>
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
                {creneaux.map((h, i) => (
                  <label key={h} className="cursor-pointer">
                    <input
                      type="radio"
                      name="heure"
                      value={h}
                      defaultChecked={i === 8}
                      className="peer sr-only"
                    />
                    <span className="block rounded-full border border-border py-2 text-center text-sm font-bold text-ink peer-checked:border-ink peer-checked:bg-ink peer-checked:text-paper">
                      {h}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="grid gap-1.5 text-sm">
              <span className="eyebrow text-muted-foreground">{t.message}</span>
              <textarea
                name="message"
                rows={2}
                placeholder={t.messagePlaceholder}
                className="rounded-md border border-border bg-card px-3 py-3 text-base outline-none focus:border-ochre-deep"
              />
            </label>

            <button type="submit" className="btn-ochre mt-1 w-full">
              {t.envoyer}
            </button>

            {infos.telephone && (
              <a href={`tel:${tel}`} className="btn-outline-ink w-full text-ink">
                {t.ouAppeler} {infos.telephone}
              </a>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
