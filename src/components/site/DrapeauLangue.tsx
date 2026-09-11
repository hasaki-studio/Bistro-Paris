import { useLang } from "@/lib/lang";

/** Bascule FR / EN via le drapeau du Royaume-Uni (ou français en mode anglais). */
export function DrapeauLangue({ clair }: { clair?: boolean }) {
  const { langue, setLangue } = useLang();
  const versEn = langue === "fr";

  return (
    <button
      onClick={() => setLangue(versEn ? "en" : "fr")}
      aria-label={versEn ? "Switch to English" : "Passer en français"}
      title={versEn ? "English" : "Français"}
      className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-2.5 py-1.5 transition-colors ${
        clair
          ? "border-paper/40 text-paper hover:border-ochre"
          : "border-border text-ink hover:border-ochre"
      }`}
    >
      {versEn ? <UkFlag /> : <FrFlag />}
      <span className="text-[0.6rem] font-bold uppercase tracking-[0.18em]">
        {versEn ? "EN" : "FR"}
      </span>
    </button>
  );
}

function UkFlag() {
  return (
    <svg viewBox="0 0 60 30" width="22" height="14" aria-hidden="true" className="rounded-[2px]">
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 60,30 M60,0 0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 60,30 M60,0 0,30" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

function FrFlag() {
  return (
    <svg viewBox="0 0 60 30" width="22" height="14" aria-hidden="true" className="rounded-[2px]">
      <rect width="20" height="30" fill="#0055A4" />
      <rect x="20" width="20" height="30" fill="#fff" />
      <rect x="40" width="20" height="30" fill="#EF4135" />
    </svg>
  );
}
