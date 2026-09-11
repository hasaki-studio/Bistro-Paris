import { infos } from "@/data/restaurant";
import { openReservation } from "@/lib/reservation";
import { useLang } from "@/lib/lang";

export function BarreMobile() {
  const tel = infos.telephone.replace(/\s/g, "");
  const { t } = useLang();

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-border bg-paper/95 px-4 py-3 backdrop-blur md:hidden">
      <a
        href={infos.telephone ? `tel:${tel}` : "#infos"}
        className="btn-outline-ink w-full text-ink"
      >
        {t.appeler}
      </a>
      <button onClick={openReservation} className="btn-ochre w-full">
        {t.reserver}
      </button>
    </div>
  );
}
