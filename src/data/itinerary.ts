export type AccommodationStatus = "confirmed" | "pending" | "tbd" | "transit";

export interface DayInfo {
  dayNumber: number;
  date: string;
  location: string;
  country: "Chile" | "Argentina";
  accommodation: string;
  status: AccommodationStatus;
  transport?: string;
  activities: string[];
  weather: {
    temp: string;
    description: string;
  };
  links: Array<{
    label: string;
    url: string;
  }>;
  phase: string;
  phaseColor: string;
}

export interface CityInfo {
  name: string;
  country: "Chile" | "Argentina";
  coordinates: { lat: number; lng: number };
  mapsUrl: string;
  days: string;
  distanceToNext?: string;
}

export const cities: CityInfo[] = [
  {
    name: "Santiago",
    country: "Chile",
    coordinates: { lat: -33.4489, lng: -70.6693 },
    mapsUrl: "https://maps.google.com/?q=Santiago,Chile",
    days: "Days 1-3",
    distanceToNext: "120 km to Valparaiso",
  },
  {
    name: "Valparaiso",
    country: "Chile",
    coordinates: { lat: -33.0472, lng: -71.6127 },
    mapsUrl: "https://maps.google.com/?q=Valparaiso,Chile",
    days: "Days 4-5",
    distanceToNext: "680 km to Pucon (9h bus)",
  },
  {
    name: "Pucon",
    country: "Chile",
    coordinates: { lat: -39.2826, lng: -71.9543 },
    mapsUrl: "https://maps.google.com/?q=Pucon,Chile",
    days: "Day 7",
    distanceToNext: "280 km to Puerto Varas (5h bus)",
  },
  {
    name: "Puerto Varas",
    country: "Chile",
    coordinates: { lat: -41.3196, lng: -72.9855 },
    mapsUrl: "https://maps.google.com/?q=Puerto+Varas,Chile",
    days: "Day 9",
    distanceToNext: "Cruce Andino lake crossing",
  },
  {
    name: "Peulla",
    country: "Chile",
    coordinates: { lat: -41.0833, lng: -72.0167 },
    mapsUrl: "https://maps.google.com/?q=Peulla,Chile",
    days: "Day 10",
    distanceToNext: "Continue Cruce Andino",
  },
  {
    name: "Bariloche",
    country: "Argentina",
    coordinates: { lat: -41.1335, lng: -71.3103 },
    mapsUrl: "https://maps.google.com/?q=San+Carlos+de+Bariloche,Argentina",
    days: "Days 11-13",
    distanceToNext: "1,600 km to Buenos Aires (flight)",
  },
  {
    name: "Buenos Aires",
    country: "Argentina",
    coordinates: { lat: -34.6037, lng: -58.3816 },
    mapsUrl: "https://maps.google.com/?q=Buenos+Aires,Argentina",
    days: "Days 14-22",
    distanceToNext: "1,050 km to Mendoza (flight)",
  },
  {
    name: "Mendoza",
    country: "Argentina",
    coordinates: { lat: -32.8908, lng: -68.8272 },
    mapsUrl: "https://maps.google.com/?q=Mendoza,Argentina",
    days: "Days 23-28",
  },
];

export const itinerary: DayInfo[] = [
  // Santiago - Days 1-3
  {
    dayNumber: 1,
    date: "Jan 8, 2026",
    location: "Santiago",
    country: "Chile",
    accommodation: "Airbnb",
    status: "tbd",
    activities: [
      "Arrive in Santiago",
      "Check into accommodation",
      "Explore Barrio Bellavista",
    ],
    weather: { temp: "30°C", description: "Sunny" },
    links: [
      { label: "Santiago Google Maps", url: "https://maps.google.com/?q=Santiago,Chile" },
    ],
    phase: "Santiago",
    phaseColor: "bg-red-500",
  },
  {
    dayNumber: 2,
    date: "Jan 9, 2026",
    location: "Santiago",
    country: "Chile",
    accommodation: "Airbnb",
    status: "tbd",
    activities: [
      "Visit Cerro San Cristobal",
      "Explore La Moneda Palace",
      "Walk along Paseo Ahumada",
    ],
    weather: { temp: "30°C", description: "Sunny" },
    links: [
      { label: "Santiago Google Maps", url: "https://maps.google.com/?q=Santiago,Chile" },
    ],
    phase: "Santiago",
    phaseColor: "bg-red-500",
  },
  {
    dayNumber: 3,
    date: "Jan 10, 2026",
    location: "Santiago",
    country: "Chile",
    accommodation: "Airbnb",
    status: "tbd",
    activities: [
      "Day trip to wine country (Maipo Valley)",
      "Evening in Barrio Lastarria",
    ],
    weather: { temp: "30°C", description: "Sunny" },
    links: [
      { label: "Santiago Google Maps", url: "https://maps.google.com/?q=Santiago,Chile" },
    ],
    phase: "Santiago",
    phaseColor: "bg-red-500",
  },
  // Valparaiso - Days 4-5
  {
    dayNumber: 4,
    date: "Jan 11, 2026",
    location: "Valparaiso",
    country: "Chile",
    accommodation: "TBD",
    status: "tbd",
    transport: "Train from Santiago (2h)",
    activities: [
      "Travel to Valparaiso",
      "Explore colorful hillside neighborhoods",
      "Ride the historic funiculars",
    ],
    weather: { temp: "23°C", description: "Coastal mild" },
    links: [
      { label: "Valparaiso Google Maps", url: "https://maps.google.com/?q=Valparaiso,Chile" },
      { label: "EFE Train Booking", url: "https://www.efe.cl/" },
    ],
    phase: "Valparaiso",
    phaseColor: "bg-orange-500",
  },
  {
    dayNumber: 5,
    date: "Jan 12, 2026",
    location: "Valparaiso",
    country: "Chile",
    accommodation: "TBD",
    status: "tbd",
    activities: [
      "Visit Pablo Neruda's house (La Sebastiana)",
      "Street art tour",
      "Sunset at Cerro Concepcion",
    ],
    weather: { temp: "23°C", description: "Coastal mild" },
    links: [
      { label: "Valparaiso Google Maps", url: "https://maps.google.com/?q=Valparaiso,Chile" },
    ],
    phase: "Valparaiso",
    phaseColor: "bg-orange-500",
  },
  // Transit Day 6
  {
    dayNumber: 6,
    date: "Jan 13, 2026",
    location: "Valparaiso → Pucon",
    country: "Chile",
    accommodation: "Night bus (9h)",
    status: "transit",
    transport: "Night bus (9h)",
    activities: [
      "Morning in Valparaiso",
      "Evening departure on night bus",
    ],
    weather: { temp: "23°C", description: "Coastal mild" },
    links: [
      { label: "Recorrido Bus Booking", url: "https://www.recorrido.cl/" },
    ],
    phase: "Transit",
    phaseColor: "bg-gray-500",
  },
  // Pucon - Day 7
  {
    dayNumber: 7,
    date: "Jan 14, 2026",
    location: "Pucon",
    country: "Chile",
    accommodation: "TBD",
    status: "tbd",
    activities: [
      "Arrive in Pucon",
      "Visit Termas Geometricas",
      "Explore town center",
    ],
    weather: { temp: "26°C", description: "Variable" },
    links: [
      { label: "Pucon Google Maps", url: "https://maps.google.com/?q=Pucon,Chile" },
      { label: "Termas Geometricas", url: "https://www.termasgeometricas.cl/" },
    ],
    phase: "Pucon",
    phaseColor: "bg-yellow-500",
  },
  // Transit Day 8
  {
    dayNumber: 8,
    date: "Jan 15, 2026",
    location: "Pucon → Puerto Varas",
    country: "Chile",
    accommodation: "Night bus (5h)",
    status: "transit",
    transport: "Night bus (5h)",
    activities: [
      "Morning hike near Villarrica volcano",
      "Evening bus to Puerto Varas",
    ],
    weather: { temp: "26°C", description: "Variable" },
    links: [
      { label: "Recorrido Bus Booking", url: "https://www.recorrido.cl/" },
    ],
    phase: "Transit",
    phaseColor: "bg-gray-500",
  },
  // Puerto Varas - Day 9
  {
    dayNumber: 9,
    date: "Jan 16, 2026",
    location: "Puerto Varas",
    country: "Chile",
    accommodation: "TBD",
    status: "tbd",
    activities: [
      "Arrive in Puerto Varas",
      "Explore German colonial architecture",
      "Views of Osorno Volcano",
    ],
    weather: { temp: "21°C", description: "Can rain" },
    links: [
      { label: "Puerto Varas Google Maps", url: "https://maps.google.com/?q=Puerto+Varas,Chile" },
    ],
    phase: "Puerto Varas",
    phaseColor: "bg-green-500",
  },
  // Cruce Andino Day 1 - Day 10
  {
    dayNumber: 10,
    date: "Jan 17, 2026",
    location: "Puerto Varas → Peulla",
    country: "Chile",
    accommodation: "Cruce Andino Day 1",
    status: "confirmed",
    transport: "Cruce Andino lake crossing",
    activities: [
      "Start Cruce Andino journey",
      "Ferry across Lago Todos los Santos",
      "Overnight in Peulla",
    ],
    weather: { temp: "21°C", description: "Can rain" },
    links: [
      { label: "Cruce Andino", url: "https://www.cruceandino.com/" },
    ],
    phase: "Cruce Andino",
    phaseColor: "bg-blue-500",
  },
  // Cruce Andino Day 2 - Day 11
  {
    dayNumber: 11,
    date: "Jan 18, 2026",
    location: "Peulla → Bariloche",
    country: "Argentina",
    accommodation: "Hotel TBD",
    status: "tbd",
    transport: "Cruce Andino continuation",
    activities: [
      "Continue Cruce Andino",
      "Cross into Argentina",
      "Arrive in Bariloche",
    ],
    weather: { temp: "23°C", description: "Variable" },
    links: [
      { label: "Cruce Andino", url: "https://www.cruceandino.com/" },
      { label: "Bariloche Google Maps", url: "https://maps.google.com/?q=San+Carlos+de+Bariloche,Argentina" },
    ],
    phase: "Cruce Andino",
    phaseColor: "bg-blue-500",
  },
  // Bariloche - Days 12-13
  {
    dayNumber: 12,
    date: "Jan 19, 2026",
    location: "Bariloche",
    country: "Argentina",
    accommodation: "Casa Martin",
    status: "confirmed",
    activities: [
      "Explore chocolate shops",
      "Hike Cerro Campanario",
      "Dinner at local parrilla",
    ],
    weather: { temp: "23°C", description: "Variable" },
    links: [
      { label: "Bariloche Google Maps", url: "https://maps.google.com/?q=San+Carlos+de+Bariloche,Argentina" },
    ],
    phase: "Bariloche",
    phaseColor: "bg-cyan-500",
  },
  {
    dayNumber: 13,
    date: "Jan 20, 2026",
    location: "Bariloche",
    country: "Argentina",
    accommodation: "Casa Martin",
    status: "confirmed",
    activities: [
      "Circuito Chico scenic drive",
      "Visit Llao Llao area",
      "Lake activities",
    ],
    weather: { temp: "23°C", description: "Variable" },
    links: [
      { label: "Bariloche Google Maps", url: "https://maps.google.com/?q=San+Carlos+de+Bariloche,Argentina" },
    ],
    phase: "Bariloche",
    phaseColor: "bg-cyan-500",
  },
  // Flight to Buenos Aires - Day 14
  {
    dayNumber: 14,
    date: "Jan 21, 2026",
    location: "Bariloche → Buenos Aires",
    country: "Argentina",
    accommodation: "Hotel TBD",
    status: "tbd",
    transport: "Flight",
    activities: [
      "Morning in Bariloche",
      "Flight to Buenos Aires",
      "Check into hotel",
    ],
    weather: { temp: "32°C", description: "Hot & humid" },
    links: [
      { label: "Aerolineas Argentinas", url: "https://www.aerolineas.com.ar/" },
      { label: "Buenos Aires Google Maps", url: "https://maps.google.com/?q=Buenos+Aires,Argentina" },
    ],
    phase: "Buenos Aires",
    phaseColor: "bg-purple-500",
  },
  // Buenos Aires Hotel - Days 15-16
  {
    dayNumber: 15,
    date: "Jan 22, 2026",
    location: "Buenos Aires",
    country: "Argentina",
    accommodation: "Hotel TBD",
    status: "tbd",
    activities: [
      "Explore San Telmo neighborhood",
      "Visit Plaza de Mayo",
      "Tango show",
    ],
    weather: { temp: "32°C", description: "Hot & humid" },
    links: [
      { label: "Buenos Aires Google Maps", url: "https://maps.google.com/?q=Buenos+Aires,Argentina" },
    ],
    phase: "Buenos Aires",
    phaseColor: "bg-purple-500",
  },
  {
    dayNumber: 16,
    date: "Jan 23, 2026",
    location: "Buenos Aires",
    country: "Argentina",
    accommodation: "Hotel TBD",
    status: "tbd",
    activities: [
      "La Boca and Caminito",
      "Recoleta Cemetery",
      "Evening in Palermo",
    ],
    weather: { temp: "32°C", description: "Hot & humid" },
    links: [
      { label: "Buenos Aires Google Maps", url: "https://maps.google.com/?q=Buenos+Aires,Argentina" },
    ],
    phase: "Buenos Aires",
    phaseColor: "bg-purple-500",
  },
  // Buenos Aires Airbnb (group) - Days 17-22
  {
    dayNumber: 17,
    date: "Jan 24, 2026",
    location: "Buenos Aires",
    country: "Argentina",
    accommodation: "Airbnb (group)",
    status: "pending",
    activities: [
      "Move to group Airbnb",
      "Group dinner",
      "Explore Puerto Madero",
    ],
    weather: { temp: "32°C", description: "Hot & humid" },
    links: [
      { label: "Buenos Aires Google Maps", url: "https://maps.google.com/?q=Buenos+Aires,Argentina" },
    ],
    phase: "Buenos Aires",
    phaseColor: "bg-purple-500",
  },
  {
    dayNumber: 18,
    date: "Jan 25, 2026",
    location: "Buenos Aires",
    country: "Argentina",
    accommodation: "Airbnb (group)",
    status: "pending",
    activities: [
      "Day trip to Tigre Delta",
      "Group activities",
    ],
    weather: { temp: "32°C", description: "Hot & humid" },
    links: [
      { label: "Buenos Aires Google Maps", url: "https://maps.google.com/?q=Buenos+Aires,Argentina" },
    ],
    phase: "Buenos Aires",
    phaseColor: "bg-purple-500",
  },
  {
    dayNumber: 19,
    date: "Jan 26, 2026",
    location: "Buenos Aires",
    country: "Argentina",
    accommodation: "Airbnb (group)",
    status: "pending",
    activities: [
      "MALBA art museum",
      "Shopping in Palermo Soho",
    ],
    weather: { temp: "32°C", description: "Hot & humid" },
    links: [
      { label: "Buenos Aires Google Maps", url: "https://maps.google.com/?q=Buenos+Aires,Argentina" },
    ],
    phase: "Buenos Aires",
    phaseColor: "bg-purple-500",
  },
  {
    dayNumber: 20,
    date: "Jan 27, 2026",
    location: "Buenos Aires",
    country: "Argentina",
    accommodation: "Airbnb (group)",
    status: "pending",
    activities: [
      "Feria de Mataderos",
      "Traditional asado",
    ],
    weather: { temp: "32°C", description: "Hot & humid" },
    links: [
      { label: "Buenos Aires Google Maps", url: "https://maps.google.com/?q=Buenos+Aires,Argentina" },
    ],
    phase: "Buenos Aires",
    phaseColor: "bg-purple-500",
  },
  {
    dayNumber: 21,
    date: "Jan 28, 2026",
    location: "Buenos Aires",
    country: "Argentina",
    accommodation: "Airbnb (group)",
    status: "pending",
    activities: [
      "Teatro Colon tour",
      "Cafe Tortoni",
      "Nightlife in San Telmo",
    ],
    weather: { temp: "32°C", description: "Hot & humid" },
    links: [
      { label: "Buenos Aires Google Maps", url: "https://maps.google.com/?q=Buenos+Aires,Argentina" },
    ],
    phase: "Buenos Aires",
    phaseColor: "bg-purple-500",
  },
  {
    dayNumber: 22,
    date: "Jan 29, 2026",
    location: "Buenos Aires",
    country: "Argentina",
    accommodation: "Airbnb (group)",
    status: "pending",
    activities: [
      "Free day for last-minute activities",
      "Group farewell dinner",
    ],
    weather: { temp: "32°C", description: "Hot & humid" },
    links: [
      { label: "Buenos Aires Google Maps", url: "https://maps.google.com/?q=Buenos+Aires,Argentina" },
    ],
    phase: "Buenos Aires",
    phaseColor: "bg-purple-500",
  },
  // Flight to Mendoza - Day 23
  {
    dayNumber: 23,
    date: "Jan 30, 2026",
    location: "Buenos Aires → Mendoza",
    country: "Argentina",
    accommodation: "Flight",
    status: "confirmed",
    transport: "Flight",
    activities: [
      "Morning flight to Mendoza",
      "Check in with Damian",
      "Evening in Mendoza city",
    ],
    weather: { temp: "34°C", description: "Hot & dry" },
    links: [
      { label: "Aerolineas Argentinas", url: "https://www.aerolineas.com.ar/" },
      { label: "Mendoza Google Maps", url: "https://maps.google.com/?q=Mendoza,Argentina" },
    ],
    phase: "Mendoza",
    phaseColor: "bg-pink-500",
  },
  // Mendoza - Days 24-28
  {
    dayNumber: 24,
    date: "Jan 31, 2026",
    location: "Mendoza",
    country: "Argentina",
    accommodation: "Damian's",
    status: "confirmed",
    activities: [
      "Wine tour in Lujan de Cuyo",
      "Visit Malbec vineyards",
    ],
    weather: { temp: "34°C", description: "Hot & dry" },
    links: [
      { label: "Mendoza Google Maps", url: "https://maps.google.com/?q=Mendoza,Argentina" },
    ],
    phase: "Mendoza",
    phaseColor: "bg-pink-500",
  },
  {
    dayNumber: 25,
    date: "Feb 1, 2026",
    location: "Mendoza",
    country: "Argentina",
    accommodation: "Damian's",
    status: "confirmed",
    activities: [
      "Day trip to Uco Valley",
      "Premium wine tastings",
    ],
    weather: { temp: "34°C", description: "Hot & dry" },
    links: [
      { label: "Mendoza Google Maps", url: "https://maps.google.com/?q=Mendoza,Argentina" },
    ],
    phase: "Mendoza",
    phaseColor: "bg-pink-500",
  },
  {
    dayNumber: 26,
    date: "Feb 2, 2026",
    location: "Mendoza",
    country: "Argentina",
    accommodation: "Damian's",
    status: "confirmed",
    activities: [
      "Aconcagua Provincial Park day trip",
      "Mountain views",
    ],
    weather: { temp: "34°C", description: "Hot & dry" },
    links: [
      { label: "Mendoza Google Maps", url: "https://maps.google.com/?q=Mendoza,Argentina" },
    ],
    phase: "Mendoza",
    phaseColor: "bg-pink-500",
  },
  {
    dayNumber: 27,
    date: "Feb 3, 2026",
    location: "Mendoza",
    country: "Argentina",
    accommodation: "Damian's",
    status: "confirmed",
    activities: [
      "Explore Mendoza city center",
      "Plaza Independencia",
      "Local restaurants",
    ],
    weather: { temp: "34°C", description: "Hot & dry" },
    links: [
      { label: "Mendoza Google Maps", url: "https://maps.google.com/?q=Mendoza,Argentina" },
    ],
    phase: "Mendoza",
    phaseColor: "bg-pink-500",
  },
  {
    dayNumber: 28,
    date: "Feb 4, 2026",
    location: "Mendoza",
    country: "Argentina",
    accommodation: "Damian's",
    status: "confirmed",
    activities: [
      "Last day activities",
      "Farewell dinner with Damian",
    ],
    weather: { temp: "34°C", description: "Hot & dry" },
    links: [
      { label: "Mendoza Google Maps", url: "https://maps.google.com/?q=Mendoza,Argentina" },
    ],
    phase: "Mendoza",
    phaseColor: "bg-pink-500",
  },
  {
    dayNumber: 29,
    date: "Feb 5, 2026",
    location: "Mendoza",
    country: "Argentina",
    accommodation: "Departure",
    status: "confirmed",
    activities: [
      "Depart from Mendoza",
      "End of trip",
    ],
    weather: { temp: "34°C", description: "Hot & dry" },
    links: [
      { label: "Mendoza Google Maps", url: "https://maps.google.com/?q=Mendoza,Argentina" },
    ],
    phase: "Departure",
    phaseColor: "bg-gray-600",
  },
];

export const phases = [
  { name: "Santiago", color: "bg-red-500", days: "1-3" },
  { name: "Valparaiso", color: "bg-orange-500", days: "4-5" },
  { name: "Pucon", color: "bg-yellow-500", days: "6-7" },
  { name: "Puerto Varas", color: "bg-green-500", days: "8-9" },
  { name: "Cruce Andino", color: "bg-blue-500", days: "10-11" },
  { name: "Bariloche", color: "bg-cyan-500", days: "12-13" },
  { name: "Buenos Aires", color: "bg-purple-500", days: "14-22" },
  { name: "Mendoza", color: "bg-pink-500", days: "23-29" },
];
