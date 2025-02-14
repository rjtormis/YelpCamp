import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const provincesWithCities = [
  {
    province: "Abra",
    cities: ["Bangued"],
  },
  {
    province: "Agusan del Norte",
    cities: ["Butuan"],
  },
  {
    province: "Agusan del Sur",
    cities: [],
  },
  {
    province: "Aklan",
    cities: ["Kalibo"],
  },
  {
    province: "Albay",
    cities: ["Legazpi", "Ligao", "Tabaco"],
  },
  {
    province: "Antique",
    cities: ["San Jose de Buenavista"],
  },
  {
    province: "Apayao",
    cities: [],
  },
  {
    province: "Aurora",
    cities: ["Baler"],
  },
  {
    province: "Basilan",
    cities: ["Isabela City", "Lamitan"],
  },
  {
    province: "Bataan",
    cities: ["Balanga"],
  },
  {
    province: "Batanes",
    cities: [],
  },
  {
    province: "Batangas",
    cities: ["Batangas City", "Lipa", "Tanauan"],
  },
  {
    province: "Benguet",
    cities: ["Baguio"],
  },
  {
    province: "Biliran",
    cities: ["Naval"],
  },
  {
    province: "Bohol",
    cities: ["Tagbilaran"],
  },
  {
    province: "Bukidnon",
    cities: ["Malaybalay", "Valencia"],
  },
  {
    province: "Bulacan",
    cities: ["Malolos", "Meycauayan", "San Jose del Monte"],
  },
  {
    province: "Cagayan",
    cities: ["Tuguegarao"],
  },
  {
    province: "Camarines Norte",
    cities: ["Daet"],
  },
  {
    province: "Camarines Sur",
    cities: ["Iriga", "Naga"],
  },
  {
    province: "Camiguin",
    cities: [],
  },
  {
    province: "Capiz",
    cities: ["Roxas"],
  },
  {
    province: "Catanduanes",
    cities: ["Virac"],
  },
  {
    province: "Cavite",
    cities: ["Bacoor", "Cavite City", "Dasmariñas", "Imus", "Tagaytay", "Trece Martires"],
  },
  {
    province: "Cebu",
    cities: [
      "Bogo",
      "Carcar",
      "Cebu City",
      "Danao",
      "Lapu-Lapu",
      "Mandaue",
      "Naga",
      "Talisay",
      "Toledo",
    ],
  },
  {
    province: "Cotabato",
    cities: ["Kidapawan"],
  },
  {
    province: "Davao de Oro",
    cities: [],
  },
  {
    province: "Davao del Norte",
    cities: ["Panabo", "Samal", "Tagum"],
  },
  {
    province: "Davao del Sur",
    cities: ["Digos", "Davao City"],
  },
  {
    province: "Davao Occidental",
    cities: [],
  },
  {
    province: "Davao Oriental",
    cities: ["Mati"],
  },
  {
    province: "Dinagat Islands",
    cities: [],
  },
  {
    province: "Eastern Samar",
    cities: ["Borongan"],
  },
  {
    province: "Guimaras",
    cities: ["Jordan"],
  },
  {
    province: "Ifugao",
    cities: [],
  },
  {
    province: "Ilocos Norte",
    cities: ["Laoag"],
  },
  {
    province: "Ilocos Sur",
    cities: ["Candon", "Vigan"],
  },
  {
    province: "Iloilo",
    cities: ["Iloilo City", "Passi"],
  },
  {
    province: "Isabela",
    cities: ["Cauayan", "Ilagan", "Santiago"],
  },
  {
    province: "Kalinga",
    cities: ["Tabuk"],
  },
  {
    province: "La Union",
    cities: ["San Fernando"],
  },
  {
    province: "Laguna",
    cities: ["Biñan", "Calamba", "San Pablo", "Santa Rosa", "Cabuyao"],
  },
  {
    province: "Lanao del Norte",
    cities: ["Iligan"],
  },
  {
    province: "Lanao del Sur",
    cities: ["Marawi"],
  },
  {
    province: "Leyte",
    cities: ["Ormoc", "Tacloban"],
  },
  {
    province: "Maguindanao del Norte",
    cities: [],
  },
  {
    province: "Maguindanao del Sur",
    cities: [],
  },
  {
    province: "Marinduque",
    cities: ["Boac"],
  },
  {
    province: "Masbate",
    cities: ["Masbate City"],
  },
  {
    province: "Misamis Occidental",
    cities: ["Oroquieta", "Ozamiz", "Tangub"],
  },
  {
    province: "Misamis Oriental",
    cities: ["Cagayan de Oro", "Gingoog"],
  },
  {
    province: "Mountain Province",
    cities: ["Bontoc"],
  },
  {
    province: "Negros Occidental",
    cities: [
      "Bacolod",
      "Bago",
      "Cadiz",
      "Escalante",
      "Himamaylan",
      "Kabankalan",
      "La Carlota",
      "Sagay",
      "San Carlos",
      "Silay",
      "Sipalay",
      "Talisay",
      "Victorias",
    ],
  },
  {
    province: "Negros Oriental",
    cities: ["Bais", "Bayawan", "Canlaon", "Dumaguete", "Guihulngan", "Tanjay"],
  },
  {
    province: "Northern Samar",
    cities: ["Catarman"],
  },
  {
    province: "Nueva Ecija",
    cities: ["Cabanatuan", "Gapan", "Muñoz", "Palayan", "San Jose"],
  },
];
