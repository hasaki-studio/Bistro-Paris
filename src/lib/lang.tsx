import { createContext, useContext, useState, type ReactNode } from "react";

export type Langue = "fr" | "en";

const dico = {
  fr: {
    navCarte: "La carte",
    navApero: "Apéro",
    navPhotos: "Photos",
    navInfos: "Infos",
    reserver: "Réserver",
    appeler: "Appeler",
    ouvrirMenu: "Ouvrir le menu",

    heroEyebrow: "Brasserie · Place d'Aligre · Paris 12e",
    heroTitre1: "Cuisine de tradition,",
    heroTitre2: "fait maison.",
    heroTexte:
      "Du déjeuner au dîner, service continu de 12h à 00h, à deux pas du marché d'Aligre. Une table de quartier, des produits travaillés sur place.",
    heroReserver: "Réserver une table",
    voirCarte: "Voir la carte",

    aperoBtn: "Je réserve pour l'apéro",
    aperoHuitre: "L'huître",
    happyEyebrow: "Happy hour & apéro",

    carteEyebrow: "La carte",
    carteTitre: "Ce qu'on sert aujourd'hui",
    carteIntro:
      "Une carte de brasserie, travaillée maison, qui bouge avec le marché.",
    formule1: "Entrée + Plat OU Plat + Dessert = 19,90 €",
    formule2: "Entrée + Plat + Dessert = 25,90 €",

    avisEyebrow: "Avis Google",
    avisTitre: "Ils sont passés nous voir",
    avisEtoiles: "5 étoiles sur 5",

    galerieEyebrow: "En images",
    galerieTitre: "L'esprit de la maison",

    aligreEyebrow: "Le quartier",
    aligreTitre: "Sur la place d'Aligre",
    aligreP1:
      "PARISII est installé au 1, place d'Aligre, au cœur du 12e. Le marché, ses étals et son animation sont juste devant : on vient y faire un tour, puis on s'installe en terrasse.",
    aligreP2:
      "C'est un quartier de voisins, de marchands et d'habitués — et la maison lui ressemble : simple, vivante, ouverte de midi à minuit.",
    aligreCta: "Venir nous voir",

    infosEyebrow: "Informations pratiques",
    infosAdresse: "Adresse",
    infosHoraires: "Horaires",
    infosTelephone: "Téléphone",
    infosService: "Service continu de 12h à 00h",
    infosApero: "Apéro & huîtres à 1 € tous les soirs dès 16h30",
    infosReserverTitre: "Réserver une table",
    infosReserverTexte:
      "Déjeuner, dîner ou apéro en terrasse : remplissez la demande en ligne, ou appelez directement le restaurant.",
    reserverEnLigne: "Réserver en ligne",
    appelerResto: "Appeler le restaurant",
    itineraire: "Itinéraire Google Maps",

    footerBaseline: "Cuisine de tradition • Fait maison • Place d'Aligre",
    footerTrouver: "Nous trouver",
    footerPlusLoin: "Aller plus loin",
    footerItineraire: "Itinéraire",

    resaEyebrow: "Réservation",
    resaTitre: "Une table chez PARISII",
    fermer: "Fermer",
    nom: "Nom",
    telephone: "Téléphone",
    email: "E-mail",
    date: "Date",
    personnes: "Personnes",
    plus13: "13 et plus",
    heure: "Heure",
    message: "Message (facultatif)",
    messagePlaceholder: "Terrasse, apéro huîtres, anniversaire…",
    envoyer: "Envoyer ma demande",
    ouAppeler: "Ou appeler le",
    merci: "Demande envoyée !",
    merciTexte:
      "Vous allez recevoir un e-mail de confirmation. Pensez à vérifier vos courriers indésirables (spams).",
    sujetMail: "Demande de réservation — PARISII Aligre",
  },
  en: {
    navCarte: "Menu",
    navApero: "Aperitivo",
    navPhotos: "Photos",
    navInfos: "Info",
    reserver: "Book",
    appeler: "Call",
    ouvrirMenu: "Open menu",

    heroEyebrow: "Brasserie · Place d'Aligre · Paris 12th",
    heroTitre1: "Traditional cooking,",
    heroTitre2: "made in house.",
    heroTexte:
      "From lunch to dinner, non-stop service from noon to midnight, steps away from the Aligre market. A neighbourhood table, everything prepared on site.",
    heroReserver: "Book a table",
    voirCarte: "See the menu",

    aperoBtn: "Book for the aperitivo",
    aperoHuitre: "Per oyster",
    happyEyebrow: "Happy hour & aperitivo",

    carteEyebrow: "The menu",
    carteTitre: "What we're serving today",
    carteIntro: "A brasserie menu, made in house, changing with the market.",
    formule1: "Starter + Main OR Main + Dessert = €19.90",
    formule2: "Starter + Main + Dessert = €25.90",

    avisEyebrow: "Google reviews",
    avisTitre: "What our guests say",
    avisEtoiles: "5 stars out of 5",

    galerieEyebrow: "In pictures",
    galerieTitre: "The spirit of the house",

    aligreEyebrow: "The neighbourhood",
    aligreTitre: "On place d'Aligre",
    aligreP1:
      "PARISII sits at 1, place d'Aligre, in the heart of the 12th arrondissement. The market, its stalls and its bustle are right in front: wander through, then settle on the terrace.",
    aligreP2:
      "It's a district of neighbours, traders and regulars — and the house looks just like it: simple, lively, open from noon to midnight.",
    aligreCta: "Come and see us",

    infosEyebrow: "Practical information",
    infosAdresse: "Address",
    infosHoraires: "Opening hours",
    infosTelephone: "Phone",
    infosService: "Non-stop service from 12pm to 12am",
    infosApero: "Aperitivo & €1 oysters every evening from 4.30pm",
    infosReserverTitre: "Book a table",
    infosReserverTexte:
      "Lunch, dinner or drinks on the terrace: send an online request, or call the restaurant directly.",
    reserverEnLigne: "Book online",
    appelerResto: "Call the restaurant",
    itineraire: "Directions on Google Maps",

    footerBaseline: "Traditional cooking • Made in house • Place d'Aligre",
    footerTrouver: "Find us",
    footerPlusLoin: "More",
    footerItineraire: "Directions",

    resaEyebrow: "Booking",
    resaTitre: "A table at PARISII",
    fermer: "Close",
    nom: "Name",
    telephone: "Phone",
    email: "Email",
    date: "Date",
    personnes: "Guests",
    plus13: "13 and more",
    heure: "Time",
    message: "Message (optional)",
    messagePlaceholder: "Terrace, oyster hour, birthday…",
    envoyer: "Send my request",
    ouAppeler: "Or call",
    merci: "Request sent!",
    merciTexte:
      "You'll receive a confirmation email shortly. Please check your spam/junk folder too.",
    sujetMail: "Booking request — PARISII Aligre",
  },
} as const;

type Dico = (typeof dico)["fr"];

const Ctx = createContext<{
  langue: Langue;
  setLangue: (l: Langue) => void;
  t: Dico;
}>({ langue: "fr", setLangue: () => {}, t: dico.fr });

export function LangProvider({ children }: { children: ReactNode }) {
  const [langue, setLangue] = useState<Langue>("fr");
  return (
    <Ctx.Provider value={{ langue, setLangue, t: dico[langue] as Dico }}>
      {children}
    </Ctx.Provider>
  );
}

export function useLang() {
  return useContext(Ctx);
}
