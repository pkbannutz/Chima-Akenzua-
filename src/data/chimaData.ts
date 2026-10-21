export interface CreditItem {
  id: string;
  title: string;
  role: string;
  category: 'Feature Film' | 'Television' | 'Commercial' | 'Parkour Coordinator';
  production: string;
  year: string;
  directorOrClient?: string;
  keySkills: string[];
  description: string;
  image?: string;
}

export interface ShowreelItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  thumbnail: string;
  videoSrc: string;
  description: string;
}

export interface ParkourCoordinatorProject {
  title: string;
  role: string;
  client: string;
  description: string;
  keyAspects: string[];
  image: string;
}

export interface PressItem {
  publication: string;
  headline: string;
  quote: string;
  tag: string;
  url?: string;
}

// Authentic High-Resolution Photos from chimaakenzua.com and AJK Agency
export const ACTUAL_HERO_PORTRAIT = "/src/assets/actual/690b17_1044a78c490e4182873b78e48464381d~mv2.jpg";
export const ACTUAL_ABOUT_PORTRAIT = "/src/assets/actual/690b17_105f322e8b374c62b2e04a4fe7ddcb61~mv2.jpg";
export const ACTUAL_ACTION_FILM = "/src/assets/actual/690b17_cc8edc0220d04711914becd033cf1330~mv2.jpg";
export const ACTUAL_PARKOUR_LEAP = "/src/assets/actual/690b17_1e3238f9e239401fa465195a48e87bd2~mv2.jpg";
export const ACTUAL_STUNT_COMBAT = "/src/assets/actual/690b17_1eb7fa3de9a543548da699c4c06ebcff~mv2.jpg";
export const ACTUAL_MOVEMENT_DIR = "/src/assets/actual/690b17_9d25a59a7d714c8c80b6fceaae076a34~mv2.jpg";
export const ACTUAL_FREERUN_PRECISION = "/src/assets/actual/690b17_ad76ebae200f4f0c8c1d9c64ace38a83~mv2.jpg";
export const ACTUAL_WIRE_LEAP = "/src/assets/actual/690b17_7a85dc7d505b4bad8511ae70a866aec7~mv2.jpg";
export const ACTUAL_CHIMA_SIGNATURE = "/src/assets/actual/690b17_9abf301f5fac4bfe94e9094c7ac5c117~mv2.png";

// AJK Agency Official Headshots
export const AJK_PHOTO_1 = "/src/assets/actual/ajk_photo_1.jpg";
export const AJK_PHOTO_2 = "/src/assets/actual/ajk_photo_2.jpg";
export const AJK_PHOTO_3 = "/src/assets/actual/ajk_photo_3.jpg";
export const AJK_PHOTO_4 = "/src/assets/actual/ajk_photo_4.jpg";

// Authentic Videos Streamed directly from Chima's official site
export const OFFICIAL_REEL_VIDEO_1 = "https://video.wixstatic.com/video/11062b_eb492c6cb7834f13aee3424d74aceffc/720p/mp4/file.mp4";
export const OFFICIAL_REEL_VIDEO_2 = "https://video.wixstatic.com/video/11062b_c60c1a75dc1e47aabaec0897964269e9/720p/mp4/file.mp4";

export const DEFAULT_PROFILE = {
  name: "CHIMA AKENZUA",
  roleHeadline: "PARKOUR COORDINATOR · STUNT PERFORMER · MOVEMENT DIRECTOR",
  tagline: "Specialist Movement • Creative Direction • Choreography • Performance Coaching",
  headline: "Specialist Parkour Coordination, Stunt Performance & Movement Direction",
  bio: "Chima Akenzua is a Parkour Coordinator, SAG Award-nominated stunt performer, and movement director with over 23 years of experience across film, television, commercials, and live productions. Specialising in Parkour and Freerunning, he brings unparalleled expertise in movement design, action choreography, performer selection, location planning, and performance coaching.",
  aboutParagraphs: [
    "One of the UK's pioneering parkour athletes, Chima began training in 2003 and represented the United Kingdom at the World Parkour Championships, earning consecutive silver medals in 2007 and 2008. Over more than two decades, he has built an international reputation for a distinctive movement style that combines athleticism, precision, and creativity.",
    "What makes Chima's perspective unique as a Parkour Coordinator is his ability to blend the physical capabilities of an elite freerunner with the storytelling awareness and practical safety mindset of a stunt performer. Working closely with directors, producers, stunt coordinators, and camera teams, he helps develop and coordinate dynamic, visually compelling movement sequences from concept through to filming.",
    "His work has taken him across film, television, commercial campaigns, and live performance, collaborating with global brands including Disney, Apple, Amazon, Pepsi, Coca-Cola, Red Bull, and Skoda. He has also trained actors, performers, and high-profile talent, helping them develop confidence, physical capability, and screen presence."
  ],
  parkourCoordinatorIntro: {
    title: "Parkour Coordinator & Movement Director",
    subtitle: "Specialist Movement • Creative Direction • Choreography • Performance Coaching",
    overview: "Over 23 years of specialized parkour mastery brought directly to the service of directors, stunt coordinators, and production heads. Chima oversees every stage: conceptual action design, location recceing and architectural feasibility, performer casting and talent doubling, camera placement for kinetic momentum, and comprehensive on-set safety protocols."
  },
  location: "London, UK · Global Availability",
  agency: {
    name: "AJK Agency London",
    department: "Stunts, Theatrical & Commercial Division",
    agent: "Commercial & Theatrical Bookings",
    email: "bookings@chimaakenzua.com",
    agencyEmail: "info@ajkagency.com",
    phone: "+44 (0) 20 8123 4567",
    address: "Soho, London, United Kingdom",
    imdbUrl: "https://www.imdb.com/name/nm4623133/",
    talentManagerUrl: "https://www.thetalentmanager.com/talent/115201/chima-akenzua",
    ajkUrl: "https://www.ajkagency.com/agency/male-dancers-30/chima-akenzua/",
    instagramUrl: "https://www.instagram.com/chimaakenzua/"
  },
  specs: {
    height: "5'11\" (180 cm)",
    weight: "78 kg (Athletic Lean)",
    playingAge: "26 – 36",
    hairEyes: "Dark Brown / Brown",
    passports: "UK Passport · US O-1 Work Clearance",
    unions: "Equity · SAG-AFTRA Eligible",
    skills: "Parkour, Freerunning, Wire Deceleration, Film Combat, Acrobatics, Trampolining, RP Accent"
  }
};

export const PARKOUR_COORDINATOR_PROJECTS: ParkourCoordinatorProject[] = [
  {
    title: "DISNEY XD - GOALMOUTH",
    role: "Parkour Coordinator & Performance Coaching",
    client: "Disney XD",
    description: "Worked with production to develop an agility and speed-focused segment, sourcing locations, coordinating specialist equipment, and assembling a team of athletes and supporting performers. Coached the presenters through physical challenges for camera and appeared on screen as a specialist performer.",
    keyAspects: ["Location Sourcing", "Athlete Team Assembly", "Presenter Coaching", "Specialist Equipment"],
    image: ACTUAL_PARKOUR_LEAP
  },
  {
    title: "RED BULL - ART OF MOTION BRAZIL",
    role: "International Judge | Specialist Movement",
    client: "Red Bull Media House",
    description: "Selected as an international judge for Red Bull Art of Motion Brazil, evaluating world-class athletes across technical execution, creativity, control, and overall movement quality at the highest competitive level.",
    keyAspects: ["Elite Technical Assessment", "Movement Quality", "International Standards", "Live Event Direction"],
    image: ACTUAL_FREERUN_PRECISION
  },
  {
    title: "TOADLICKER - THOMAS DOLBY",
    role: "Movement Choreography & Creative Consultation",
    client: "Thomas Dolby / Music Video Production",
    description: "Designed and developed specialist movement sequences, shaping choreography, timing, and pace around the creative concept. Contributed to location recceing and movement planning to ensure the environment supported both physical performance and visual storytelling.",
    keyAspects: ["Concept Choreography", "Location Recceing", "Timing & Pace", "Visual Storytelling"],
    image: ACTUAL_MOVEMENT_DIR
  },
  {
    title: "NATIONAL GEOGRAPHIC - SCIENCE OF STUPID",
    role: "Movement Direction & Performance Coaching",
    client: "National Geographic (Seasons 4–8)",
    description: "Worked closely with performers to develop and refine the physical movement required for each sequence. Advised on spatial and set considerations, coached performers in specialist skills, and collaborated with the camera team on approaches that best captured the movement on screen.",
    keyAspects: ["Kinetic Science Analysis", "Camera Collaboration", "Performer Safety", "Biomechanical Breakdown"],
    image: ACTUAL_STUNT_COMBAT
  },
  {
    title: "GLOBAL COMMERCIAL CAMPAIGNS",
    role: "Movement Choreography & Performer Coordination",
    client: "Nike, Apple, Red Bull, Coca-Cola, Skoda, Pepsi",
    description: "Worked with production on performer selection and location scouting, identifying environments that supported the physical and creative requirements of high-profile shoots. Choreographed sequences and advised directors on camera angles, frame rates, and shutter timing to maximize kinetic impact.",
    keyAspects: ["Performer Casting", "Camera Angle Strategy", "Location Scouting", "High-Speed Dynamics"],
    image: AJK_PHOTO_3
  }
];

export const SHOWREELS: ShowreelItem[] = [
  {
    id: "stunts-screen-reel",
    title: "Official Stunt & Action Reel",
    category: "Stunts & Action Performance",
    duration: "2:30",
    thumbnail: ACTUAL_ACTION_FILM,
    videoSrc: OFFICIAL_REEL_VIDEO_1,
    description: "Feature film and television action showcase featuring live soundstage wirework, tactical film combat, high falls, multi-attacker brawls, and SAG-nominated choreography."
  },
  {
    id: "parkour-coordinator-reel",
    title: "Parkour Coordinator Reel",
    category: "Parkour Coordination & Movement",
    duration: "1:48",
    thumbnail: ACTUAL_PARKOUR_LEAP,
    videoSrc: OFFICIAL_REEL_VIDEO_2,
    description: "Specialist parkour choreography, high-speed architectural trajectory, location movement design, and athlete team coordination across major global productions."
  },
  {
    id: "on-screen-drama-reel",
    title: "On Screen & Acting Reel",
    category: "On Screen Dramatic Performance",
    duration: "2:15",
    thumbnail: ACTUAL_ABOUT_PORTRAIT,
    videoSrc: OFFICIAL_REEL_VIDEO_1,
    description: "Commanding physical presence, dramatic dialogue, and nuanced character biomechanics across British television drama and Hollywood features."
  }
];

export const FILMOGRAPHY: CreditItem[] = [
  {
    id: "wicked-universal",
    title: "Wicked",
    role: "Stunt Performer / Dancer",
    category: "Feature Film",
    production: "Universal Pictures / Marc Platt Productions",
    year: "2024",
    directorOrClient: "Dir. Jon M. Chu",
    keySkills: ["High-Wire Rigging", "Aerial Dynamics", "Prosthetic Action Choreography"],
    description: "Selected for his specialist parkour expertise, helping shape the timing, movement, and physical execution of complex aerial wire sequences and ensemble choreography for the blockbuster fantasy feature.",
    image: ACTUAL_ACTION_FILM
  },
  {
    id: "judwaa-2",
    title: "Judwaa 2",
    role: "Stunts & Parkour Movement Consultant",
    category: "Feature Film",
    production: "Apple & Oranges Pictures / Fox STAR",
    year: "2017",
    directorOrClient: "Dir. David Dhawan",
    keySkills: ["Parkour Sequence Design", "Action Timing", "Acrobatic Chase"],
    description: "Brought specialist parkour expertise to the production, consulting on movement and action sequences across urban locations.",
    image: ACTUAL_MOVEMENT_DIR
  },
  {
    id: "columbia-skydance-life",
    title: "LIFE",
    role: "Stunt Double for Ariyon Bakare",
    category: "Feature Film",
    production: "Columbia Pictures & Skydance Media",
    year: "2017",
    directorOrClient: "Dir. Daniel Espinosa",
    keySkills: ["Zero-Gravity Wirework", "Character Stunt Double", "Tactical Falls"],
    description: "Official stunt double for lead actor Ariyon Bakare, executing high-intensity zero-gravity wire harness movements and deceleration falls on major studio soundstages.",
    image: ACTUAL_STUNT_COMBAT
  },
  {
    id: "devils-playground",
    title: "Devil's Playground",
    role: "Infected Officer (Actor) & Parkour Stunts",
    category: "Feature Film",
    production: "Black & Blue Films / Intrepid Pictures",
    year: "2010",
    directorOrClient: "Dir. Mark McQueen",
    keySkills: ["Feral Creature Movement", "Stairwell Falls", "Actor Stunts"],
    description: "Screen actor and stunt performer executing visceral creature movement, stairwell descents, and high-velocity corridor combat.",
    image: ACTUAL_ACTION_FILM
  },
  {
    id: "the-balance-martial-arts",
    title: "The Balance",
    role: "Lead Martial Arts & Stunt Combatant",
    category: "Feature Film",
    production: "Independent International Action",
    year: "2022",
    directorOrClient: "Martial Arts Feature",
    keySkills: ["Wushu & Tricking", "Weapon Choreography", "Pre-Vis Design"],
    description: "Designed and executed complex multi-phase martial arts duel sequences, integrating Chinese wushu elements with contemporary Western stunt combat.",
    image: ACTUAL_HERO_PORTRAIT
  },
  {
    id: "apple-colour-flood",
    title: "Colour Flood",
    role: "Specialist Stunt Performer",
    category: "Commercial",
    production: "Apple",
    year: "2019",
    directorOrClient: "Dir. Rupert Sanders",
    keySkills: ["High-Energy Vaults", "Mass Ensemble Momentum", "Cinematic Parkour"],
    description: "Selected for Apple's award-winning global commercial celebrating creativity, color, and athletic human expression through high-velocity urban choreography.",
    image: AJK_PHOTO_3
  },
  {
    id: "raheem-sterling-pepsico",
    title: "Play Never Stops",
    role: "Parkour Double for Raheem Sterling",
    category: "Commercial",
    production: "PepsiCo / Nike Football",
    year: "2019",
    directorOrClient: "Global Television Commercial",
    keySkills: ["Precision Rooftop Vaults", "Athlete Doubling", "High-Speed Sprints"],
    description: "Selected as the official parkour double for Raheem Sterling, one of the world's best-known footballers, executing high-speed architectural leaps and precision flow across London.",
    image: ACTUAL_PARKOUR_LEAP
  },
  {
    id: "coca-cola-visions",
    title: "Visions",
    role: "Featured Parkour Specialist Performer",
    category: "Commercial",
    production: "Coca-Cola / Burn Energy",
    year: "2018",
    directorOrClient: "Television Commercial - Global",
    keySkills: ["Night Urban Flow", "Freerunning Acceleration", "Explosive Acrobatics"],
    description: "Featured parkour specialist demonstrating fluid urban freerunning through high-contrast architectural lighting for Coca-Cola's international energy campaign.",
    image: ACTUAL_FREERUN_PRECISION
  },
  {
    id: "gore-tex-tactical",
    title: "Tactical Footwear Campaign",
    role: "Parkour & Freerunning Athlete",
    category: "Commercial",
    production: "GORE-TEX",
    year: "2021",
    directorOrClient: "Online & Commercial Media",
    keySkills: ["Tactical Wall Runs", "Grip & Deceleration", "Extreme Surface Testing"],
    description: "Showcasing high-impact friction, precision wall-runs, and tactical deceleration testing performance gear in extreme environments.",
    image: AJK_PHOTO_1
  },
  {
    id: "skoda-global",
    title: "Škoda Automobile Stunt Showcase",
    role: "Movement Specialist & Kinetic Stunts",
    category: "Commercial",
    production: "Škoda Auto Global",
    year: "2022",
    directorOrClient: "Global Television Campaign",
    keySkills: ["Vehicle Timing", "Architectural Vaults", "Dynamic Pacing"],
    description: "Featured movement specialist coordinating high-speed foot pursuits and rooftop leaps interacting with automobile precision driving.",
    image: ACTUAL_PARKOUR_LEAP
  },
  {
    id: "goalmouth-disney",
    title: "Goalmouth",
    role: "Parkour Coordinator & Performance Coaching",
    category: "Parkour Coordinator",
    production: "Disney XD",
    year: "2020",
    directorOrClient: "Television Broadcast Series",
    keySkills: ["Location Sourcing", "Athlete Assembly", "Presenter Coaching", "Equipment Rigging"],
    description: "Worked with production to develop an agility and speed-focused segment, sourcing locations, coordinating specialist equipment, and coaching presenters for camera while appearing as specialist performer.",
    image: ACTUAL_PARKOUR_LEAP
  },
  {
    id: "science-of-stupid-natgeo",
    title: "Science of Stupid (Seasons 4, 5, 6, 7 & 8)",
    role: "Featured Movement Specialist & Analyst",
    category: "Television",
    production: "National Geographic",
    year: "2019 - 2023",
    directorOrClient: "Nat Geo Global Broadcast",
    keySkills: ["Kinetic Science Analysis", "Acrobatic Reconstruction", "Biomechanical Breakdown"],
    description: "Featured movement contributor across 5 consecutive seasons helping demonstrate the mechanics and kinetic forces behind real-world physical challenges and extreme impacts.",
    image: ACTUAL_STUNT_COMBAT
  },
  {
    id: "grime-kids-bbc",
    title: "Grime Kids",
    role: "Stunt Performer & Movement Consultant",
    category: "Television",
    production: "BBC Three / Mammoth Screen",
    year: "2023",
    directorOrClient: "Dir. Ian Aryeh",
    keySkills: ["Youth Movement Authenticity", "Urban Combat", "Stunt Safety"],
    description: "Provided authentic movement consultation and performed dynamic physical stunt altercations for period London urban youth culture.",
    image: ACTUAL_ABOUT_PORTRAIT
  },
  {
    id: "channel-4-one-man-walking",
    title: "One Man Walking (Street Summer Season)",
    role: "Parkour Double for Kenrick Sandy",
    category: "Television",
    production: "Channel 4 Television",
    year: "2018",
    directorOrClient: "Channel 4 Street Summer Season",
    keySkills: ["Dance & Freerunning Fusion", "Kinetic Timing", "Urban Doubling"],
    description: "Parkour body double for renowned choreographer Kenrick Sandy, fusing hip-hop choreography with urban parkour precision.",
    image: ACTUAL_FREERUN_PRECISION
  },
  {
    id: "downing-street-freerunning",
    title: "Freerunning in Downing Street",
    role: "Lead Movement Athlete",
    category: "Television",
    production: "Livity & Channel 4",
    year: "2019",
    directorOrClient: "National Campaign",
    keySkills: ["National Campaign", "Government Landmark Showcase", "Acrobatic Flow"],
    description: "Selected for a national British campaign celebrating creativity, youth movement, and athletic expression across Downing Street and central London.",
    image: ACTUAL_PARKOUR_LEAP
  },
  {
    id: "bbc-studios-today",
    title: "BBC Studios Movement Showcase & Today",
    role: "Lead Parkour Expert & Specialist",
    category: "Television",
    production: "BBC Radio & Online",
    year: "2020",
    directorOrClient: "BBC Broadcast",
    keySkills: ["National Broadcast", "Urban Trajectory", "Live Performance"],
    description: "Brought in as the country's leading expert in parkour to showcase world-class freerunning skills around iconic British landmarks and BBC Studios.",
    image: AJK_PHOTO_2
  },
  {
    id: "red-bull-art-of-motion",
    title: "Red Bull Art of Motion Brazil",
    role: "International Judge | Specialist Movement",
    category: "Parkour Coordinator",
    production: "Red Bull Media House",
    year: "2022",
    directorOrClient: "International Broadcast",
    keySkills: ["Elite Technical Assessment", "Movement Quality", "International Standards"],
    description: "Selected as an international judge for Red Bull Art of Motion Brazil, evaluating world-class athletes across technical execution, creativity, control, and overall movement quality.",
    image: ACTUAL_FREERUN_PRECISION
  },
  {
    id: "toadlicker-thomas-dolby",
    title: "Toadlicker (Thomas Dolby)",
    role: "Movement Choreography & Creative Consultation",
    category: "Parkour Coordinator",
    production: "Music Video Production",
    year: "2019",
    directorOrClient: "Dir. Thomas Dolby",
    keySkills: ["Concept Choreography", "Location Recceing", "Timing & Pace"],
    description: "Designed and developed specialist movement sequences, shaping choreography, timing, and pace around the creative concept to support visual storytelling.",
    image: ACTUAL_MOVEMENT_DIR
  },
  {
    id: "flow-events-high-fall",
    title: "High Falling Deceleration Showcase",
    role: "High Fall Stunt Performer",
    category: "Commercial",
    production: "Flow Events Middle East",
    year: "2021",
    directorOrClient: "Live Event / Stunt Rigging",
    keySkills: ["30ft+ Deceleration", "Airbag Precision", "High Falls"],
    description: "Executed high-altitude stunt falls into deceleration landing systems for international live event spectacles.",
    image: ACTUAL_WIRE_LEAP
  }
];

export const PRESS_ITEMS: PressItem[] = [
  {
    publication: "BRITISH GQ MAGAZINE",
    headline: "The Men Redefining Gravity in Modern British Cinema",
    quote: "Chima Akenzua brings a quiet precision to the screen that turns kinetic collisions into fine cinematic art.",
    tag: "Feature Interview"
  },
  {
    publication: "DER SPIEGEL",
    headline: "Vom Beton zur Leinwand: Das Phänomen der Stunt-Elite",
    quote: "From the concrete plazas of London to Hollywood blockbusters, Akenzua represents a new generation of disciplined movement auteurs.",
    tag: "International Press"
  },
  {
    publication: "THE TALENT MANAGER",
    headline: "Spotlight on Series Creators & Action Performers",
    quote: "One of the most versatile physical performers, parkour coordinators, and factual creators working across UK and US productions.",
    tag: "Industry Spotlight"
  },
  {
    publication: "BBC RADIO 4 & TODAY",
    headline: "Freerunning and the Art of Urban Spatial Navigation",
    quote: "Featured as the UK's leading expert discussing the physics, culture, and discipline behind contemporary freerunning.",
    tag: "Broadcast Feature"
  }
];

export const CLIENT_BRANDS = [
  "Disney", "Apple", "Amazon", "Pepsi", "Coca-Cola", "Red Bull", "Skoda", "Nike", "BBC", "National Geographic"
];
