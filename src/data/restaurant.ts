// Toutes les informations du restaurant sont centralisées ici :
// modifier ce fichier suffit pour mettre le site à jour.

export const infos = {
  nom: "PARISII",
  sousTitre: "ALIGRE",
  adresse: "1, place d'Aligre",
  codePostalVille: "75012 Paris",
  service: "Service continu de 12h à 00h",
  // Renseigner le numéro réel ici pour activer le bouton Appeler.
  telephone: "06 13 66 73 89" as string,
  // Liens réseaux sociaux (laisser vide si non disponibles)
  instagram: "" as string,
  facebook: "" as string,
  itineraire:
    "https://www.google.com/maps/search/?api=1&query=1+place+d%27Aligre+75012+Paris",
  // Adresse e-mail qui reçoit les demandes de réservation (laisser vide si inconnue)
  email: "" as string,
};

export const apero = {
  titre: "L'apéro commence ici",
  offre: "1 € l'huître",
  horaire: "Tous les soirs à partir de 16h30",
  slogan: "Du bon vin, et des copains !",
};

export type HappyHourItem = {
  nom: string;
  nomEn: string;
  prix: string;
};

export type HappyHourCategorie = {
  titre: string;
  titreEn: string;
  items: HappyHourItem[];
};

export const happyHour = {
  titre: "Happy Hours — 16h à 21h",
  titreEn: "Happy Hour — 4pm to 9pm",
  categories: [
    {
      titre: "Bière",
      titreEn: "Beer",
      items: [
        { nom: "Pinte de bière PILS", nomEn: "Pint of PILS beer", prix: "5,50 €" },
        { nom: "Autres pintes", nomEn: "Other pints", prix: "6 €" },
      ],
    },
    {
      titre: "Cocktails",
      titreEn: "Cocktails",
      items: [
        { nom: "Cocktail du moment", nomEn: "Cocktail of the moment", prix: "6 €" },
        { nom: "Caïpirinha", nomEn: "Caïpirinha", prix: "6 €" },
        { nom: "Mojito", nomEn: "Mojito", prix: "6 €" },
      ],
    },
    {
      titre: "Vin",
      titreEn: "Wine",
      items: [
        { nom: "Chardonnay 20 cl", nomEn: "Chardonnay 20 cl", prix: "4,90 €" },
        { nom: "Pays d'Oc rouge ou rosé 20 cl", nomEn: "Pays d'Oc red or rosé 20 cl", prix: "4,90 €" },
        { nom: "Coupe de Prosecco", nomEn: "Glass of Prosecco", prix: "4,90 €" },
      ],
    },
  ],
};

export type Plat = {
  nom: string;
  detail?: string;
  prix?: string;
  nomEn?: string;
  detailEn?: string;
  tag?: string;
  tagEn?: string;
};
export type SectionCarte = {
  titre: string;
  titreEn: string;
  plats: Plat[];
  note?: string;
  noteEn?: string;
};

export const carte: SectionCarte[] = [
  {
    titre: "Entrées",
    titreEn: "Starters",
    plats: [
      {
        nom: "Velouté de butternut",
        detail: "crème d'Isigny et concassé de noisette",
        nomEn: "Butternut squash velouté",
        detailEn: "Isigny cream and crushed hazelnuts",
        prix: "8 €",
      },
      {
        nom: "Œufs mayonnaises",
        detail: "au piment d'Espelette, mesclun et pickles maison",
        nomEn: "Eggs mayonnaise",
        detailEn: "Espelette pepper, mixed leaves and house pickles",
        prix: "9 €",
      },
      {
        nom: "Pâté de campagne « Jean foch »",
        nomEn: "“Jean Foch” country pâté",
        prix: "10 €",
      },
      {
        nom: "6 escargots sauvages de Bourgogne",
        nomEn: "6 wild Burgundy snails",
        prix: "16 €",
      },
    ],
  },
  {
    titre: "Les suggestions",
    titreEn: "Chef's suggestions",
    plats: [
      {
        nom: "Tartare de thon rouge à l'asiatique",
        detail: "frites maison",
        nomEn: "Asian-style red tuna tartare",
        detailEn: "house fries",
        prix: "15,90 €",
        tag: "Plat du jour",
        tagEn: "Dish of the day",
      },
      {
        nom: "Bavette d'aloyau, sauce échalotte",
        detail: "frites maison",
        nomEn: "Flank steak with shallot sauce",
        detailEn: "house fries",
        prix: "14,90 €",
        tag: "Plat du jour",
        tagEn: "Dish of the day",
      },
      {
        nom: "Burger PARISII",
        detail:
          "pain sésame maison, bœuf français, poitrine fumée, sauce barbecue, oignons confits, sucrine, fromage de raclette, frites maison",
        nomEn: "PARISII burger",
        detailEn:
          "house sesame bun, French beef, smoked bacon, barbecue sauce, confit onions, baby gem lettuce, raclette cheese, house fries",
        prix: "23 €",
      },
      {
        nom: "Tartare de bœuf charolais au couteau",
        detail: "frites maison",
        nomEn: "Hand-cut Charolais beef tartare",
        detailEn: "house fries",
        prix: "19 €",
      },
      {
        nom: "Faux filet de bœuf devesa Argentin",
        detail: "sauce poivre, frites maison",
        nomEn: "Argentinian Devesa beef sirloin",
        detailEn: "pepper sauce, house fries",
        prix: "34 €",
      },
      {
        nom: "Travers de porc laqué au miel",
        detail: "légumes grillés",
        nomEn: "Honey-glazed pork ribs",
        detailEn: "grilled vegetables",
        prix: "24 €",
      },
      {
        nom: "Bavette d'aloyau sauce échalote (200 g)",
        detail: "frites maison",
        nomEn: "Flank steak with shallot sauce (200 g)",
        detailEn: "house fries",
        prix: "25 €",
      },
      {
        nom: "Croque-monsieur à la crème de truffe et comté",
        detail: "mesclun ou frites maison",
        nomEn: "Croque-monsieur with truffle cream and Comté",
        detailEn: "mixed leaves or house fries",
        prix: "24 €",
      },
      {
        nom: "Saumon rôti, épeautre perlé et jeunes haricots verts",
        detail: "beurre blanc nantais",
        nomEn: "Roasted salmon, pearled spelt and young green beans",
        detailEn: "beurre blanc sauce",
        prix: "24 €",
      },
      {
        nom: "Poke bowl au saumon",
        detail:
          "riz, mangue, radis, grenade, carotte, avocat, oignons rouges, cebette",
        nomEn: "Salmon poke bowl",
        detailEn:
          "rice, mango, radish, pomegranate, carrot, avocado, red onion, spring onion",
        prix: "23 €",
      },
      {
        nom: "Gnocchi di patate",
        detail: "sauce au bleu d'Auvergne, frisée & noix",
        nomEn: "Gnocchi di patate",
        detailEn: "Bleu d'Auvergne sauce, frisée and walnuts",
        prix: "21 €",
      },
      {
        nom: "Souris d'agneau confite aux herbes",
        detail: "semoule au fruit sec",
        nomEn: "Herb-confit lamb shank",
        detailEn: "semolina with dried fruit",
        prix: "28 €",
      },
      {
        nom: "Butternut rôti au chèvre et miel",
        detail: "mélange de jeunes pousses et noix",
        nomEn: "Roasted butternut with goat cheese and honey",
        detailEn: "young leaves and walnuts",
        prix: "19 €",
      },
      {
        nom: "Salade César",
        detail:
          "romaine, aiguillettes de poulet, parmesan, œuf mollet et croûtons à l'ail",
        nomEn: "Caesar salad",
        detailEn:
          "romaine, chicken strips, parmesan, soft-boiled egg and garlic croutons",
        prix: "18 €",
      },
      {
        nom: "Salade vietnamienne",
        detail:
          "bœuf au saté, soja, sésame, agrumes, chou, carottes et courgettes",
        nomEn: "Vietnamese salad",
        detailEn:
          "satay beef, soy, sesame, citrus, cabbage, carrots and courgettes",
        prix: "21 €",
      },
    ],
    note: "Nos garnitures 6 € l'unité — frites maison, semoule, haricots verts ou mesclun.",
    noteEn:
      "Side dishes € 6 each — house fries, semolina, green beans or mixed leaves.",
  },
  {
    titre: "Desserts",
    titreEn: "Desserts",
    plats: [
      {
        nom: "Yaourt « Le Fierbois »",
        nomEn: "“Le Fierbois” yoghurt",
        prix: "6 €",
        tag: "Médaille d'or 2024",
        tagEn: "Gold medal 2024",
      },
      {
        nom: "1 fromage « Maison Quatrehomme » M.O.F.",
        nomEn: "1 cheese from “Maison Quatrehomme” M.O.F.",
        prix: "7 €",
      },
      { nom: "Café gourmand", nomEn: "Café gourmand", prix: "9 €" },
      {
        nom: "Champagne gourmand",
        nomEn: "Champagne gourmand",
        prix: "18 €",
      },
      {
        nom: "Tartelette citron meringuée",
        nomEn: "Lemon meringue tartlet",
        prix: "10 €",
      },
      {
        nom: "Profiterole au chocolat et glace vanille de Madagascar",
        detail: "1 pièce 6 € · 2 pièces 12 € · 3 pièces 15 €",
        nomEn: "Chocolate profiterole with Madagascar vanilla ice cream",
        detailEn: "1 piece € 6 · 2 pieces € 12 · 3 pieces € 15",
      },
    ],
  },
];

export type Avis = {
  auteur: string;
  date: string;
  texte: string;
};

// Avis Google 5 étoiles — coller ici les 3 derniers avis réels du restaurant.
// Tant que la liste est vide, la section n'apparaît pas (aucun avis inventé).
export const avis: Avis[] = [
  {
    auteur: "L.L.R",
    date: "Google Maps",
    texte:
      "Un excellent moment passé dans ce restaurant (brasserie du quartier Aligre) un vendredi soir dans la chaleur Paris : 1. La cuisine : après avoir longtemps hésité entre des tapas ou 2 plats, nous avons opté pour 4 tapas variés (copa, gambas, guacamole et tzatziki [mention spéciale]), et ce fut payant : frais et très goûtus ! Des glaces en dessert… et la crème chantilly est à tomber (franchement, l'une des meilleures de ma vie) 2. Service à la fois pro, intelligent et sympathique 3. Ambiance : quel plaisir de dîner en terrasse, au bord d'une rue sans voiture !!! À refaire",
  },
  {
    auteur: "P.P",
    date: "Google Maps",
    texte:
      "Une découverte sensationnelle pour un anniversaire : tapas délicieux, service irréprochable. Nous avons passé un moment de convivialité exceptionnel avec le personnel. Une adresse, pour des Basques d'adoption, à conserver mais aussi à partager. Super !!!!",
  },
  {
    auteur: "B.D",
    date: "Google Maps",
    texte:
      "Très bon restaurant avec plats faits maison et à base de produits frais. La carte est assez courte mais propose une bonne diversité de plats français. Il y en a pour tous les goûts. La qualité des plats est bonne - on remarque le 'fait maison' avec des produits de qualité. Nos desserts étaient excellents (tarte tatin et mi-cuit au chocolat). Je peux recommander les deux les yeux fermés! La serveuse était sympathique, serviable et de bon conseil, autant pour le choix du plat que du vin pour accompagner. Le temps d'attente était raisonnable. Je trouve les prix un peu élevés.",
  },
];
