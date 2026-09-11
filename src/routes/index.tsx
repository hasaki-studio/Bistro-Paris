import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Apero } from "@/components/site/Apero";
import { Carte } from "@/components/site/Carte";
import { Aligre } from "@/components/site/Aligre";
import { Avis } from "@/components/site/Avis";
import { Galerie } from "@/components/site/Galerie";
import { Infos } from "@/components/site/Infos";
import { Footer } from "@/components/site/Footer";
import { BarreMobile } from "@/components/site/BarreMobile";
import { Reservation } from "@/components/site/Reservation";
import { onOpenReservation } from "@/lib/reservation";
import { LangProvider } from "@/lib/lang";

const title = "PARISII Aligre — Brasserie place d'Aligre, Paris 12e";
const description =
  "Cuisine de tradition et fait maison au 1, place d'Aligre. Service continu de 12h à 00h, huîtres à 1 € tous les soirs dès 16h30.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [reservation, setReservation] = useState(false);

  useEffect(() => onOpenReservation(() => setReservation(true)), []);

  return (
    <LangProvider>
      <main className="pb-16 md:pb-0">
        <Nav />
        <Hero />
        <Apero />
        <Carte />
        <Galerie />
        <Avis />
        <Aligre />
        <Infos />
        <Footer />
        <BarreMobile />
        <Reservation open={reservation} onClose={() => setReservation(false)} />
      </main>
    </LangProvider>
  );
}
