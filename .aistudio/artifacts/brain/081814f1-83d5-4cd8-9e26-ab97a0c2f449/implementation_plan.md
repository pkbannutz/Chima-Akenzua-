# Chima Akenzua Official Website Rebuild (chimaakenzua.com)

A high-impact, cinematic rebuild of **Chima Akenzua's** official portfolio website (`chimaakenzua.com`), spotlighting his career as a SAG Award-nominated stunt performer, actor, movement director, and series creator.

## User Review & Critical Decisions

> [!IMPORTANT]
> Based on your link (`https://www.chimaakenzua.com/`), we are rebuilding Chima Akenzua's site with cinematic visual drama, an interactive showreel theater, a comprehensive filterable filmography (featuring *Wicked*, commercial stunt doubles, TV credits, and movement direction), press highlights (*GQ*, *Der Spiegel*), and representation booking workflows (AJK Agency London).

- **Target Brand**: Chima Akenzua (London & Worldwide) — SAG Award Nominee · Stunt Performer · Actor · Movement Director · Series Creator.
- **Visual Aesthetic**: Film-noir cinematic elegance. Deep obsidian canvas (`#08090C`), gold/amber prestige accents (`#D4AF37` / `#F59E0B`), razor-sharp typography, and full-screen video/lightbox presentation.
- **Key Modules**:
  1. **Cinematic Hero**: Dramatic headline, SAG Award nomination badge, primary showreel trigger, and high-impact visual.
  2. **Interactive Showreel Theater**: Switchable reels for Stunts & Action, Dramatic Acting, Movement Direction & Parkour, with custom playback controls.
  3. **Curated Filmography & Stunts Database**: Filterable across Film, Television, Commercials, and Movement Coaching (e.g., *Wicked*, Raheem Sterling stunt double, *Grime Kids*, *Science of Stupid*).
  4. **Movement Direction & Elite Coaching Philosophy**: Exploration of wirework, combat choreography, parkour/freerunning pedigree (World Parkour silver medallist), and actor training.
  5. **Press Coverage & Accolades**: Highlighting features from *GQ Magazine*, *DER SPIEGEL*, and industry honors.
  6. **Representation & Booking Terminal**: Official contact details for AJK Agency London and direct project inquiry form with date picker and project scope selector.

---

## 1. Overview & Core Concept

- **What It Does**: Delivers an immersive, production-grade website for Chima Akenzua that serves directors, producers, stunt coordinators, casting agents, and brand collaborators.
- **Target Audience**: Film directors, Hollywood stunt coordinators, casting directors, commercial producers, media journalists, and physical theatre companies.
- **Key Value**: Elevates Chima's digital footprint from a conventional actor page into an authoritative cinematic platform that commands immediate prestige and simplifies the casting/booking process.

---

## 2. User Experience & Visual Design

### Key User Flows
1. **First Impression & Hero**: The visitor is greeted with bold typographic hierarchy, Chima's prestigious credits, and a prominent "Watch 2026 Showreel" button.
2. **Interactive Reel Theater**: Tabs allow instant switching between the Stunt Reel, Acting Reel, and Movement Reel with full-screen playback and timecode highlights.
3. **Filmography Exploration**: Visitors can sort credits by category (*All*, *Feature Films*, *Television*, *Commercials*, *Movement Direction*) or search by production name (*Wicked*, *Nike*, *BBC*).
4. **Physicality & Movement Methodology**: A visual breakdown of Chima's unique discipline—combining elite acrobatic parkour, film combat, martial arts, and biomechanical actor preparation.
5. **Press & Interviews**: Clean editorial cards detailing coverage in *GQ* and *Der Spiegel* with quotes and readouts.
6. **Bookings & Representation**: Clear contact cards for London agent (AJK Agency) + direct production inquiry form with instant validation.

### Visual Identity & Theme
- **60% Neutral Field**: Stark cinematic obsidian `#08090C` with subtle radial lighting.
- **30% Structural Surfaces**: Rich charcoal `#12151D`, hairline borders `rgba(255,255,255,0.08)`, muted silver `#9CA3AF`.
- **10% Accent**: Warm prestige gold `#E5B869` / `#D4AF37` reserved for active tabs, CTAs, and award accolades.
- **Typography**:
  - Display: Architectural geometric sans (`Plus Jakarta Sans` / `Outfit`) with uppercase editorial kickers.
  - Body: Crisp modern sans (`DM Sans`) with generous line spacing.
  - Numbers & Dates: Tabular figures (`tabular-nums`) for credits and release years.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Embedded Interactive Video Reel Experience**
  - *Chosen Approach*: Responsive video theater with realistic showreel simulation, interactive scrubber, category switcher, and YouTube/Vimeo embed capability.
  - *Why*: Stunt and movement directors hire based on visual motion. Seamless video access without leaving the site maximizes engagement.

- **Decision 2: Comprehensive Categorized Filmography with Search**
  - *Chosen Approach*: Searchable, filterable table/grid with roles, directors, production companies, and year.
  - *Why*: Industry professionals need to immediately check specific credentials (e.g., wirework, vehicle stunts, body double).

- **Decision 3: Dual Inquiries (Agency + Direct Production Contact)**
  - *Chosen Approach*: Prominently display AJK Agency London contact info alongside an interactive inquiry form that generates structured proposals.
  - *Why*: Industry standard respects agency representation while offering an immediate path for urgent production requests.

---

## 4. Technical Architecture & System Structure

```
┌────────────────────────────────────────────────────────────────────────┐
│                        Top Navigation Bar                              │
│   [CHIMA AKENZUA] ─── [Showreels · Filmography · About · Press] ─── [Bookings] │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
┌───────────────────────────────────▼────────────────────────────────────┐
│                    Cinematic Split Hero & Badges                       │
│    Headline · SAG Award Nominee · Stunt / Actor · Quick Reel Trigger   │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
┌───────────────────────────────────▼────────────────────────────────────┐
│                  Showreel Theater (Tabbed Playback)                    │
│      [Stunts & Action]    [Acting Reel]    [Movement Direction]        │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
┌───────────────────────────────────▼────────────────────────────────────┐
│                  Filterable Filmography & Credits                      │
│        [All] [Feature Film] [Television] [Commercials] [Movement]      │
│   ┌──────────────────────────────────────────────────────────────┐    │
│   │ Wicked (Universal Pictures) · Stunt Performer · 2024         │    │
│   │ Play Never Stops · Parkour Double for Raheem Sterling        │    │
│   │ Grime Kids (BBC) · Stunt Performer / Movement                │    │
│   └──────────────────────────────────────────────────────────────┘    │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
┌───────────────────────────────────▼────────────────────────────────────┐
│            Movement Philosophy, Parkour Pedigree & Press               │
│   World Parkour Championships Silver · GQ Feature · Der Spiegel        │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
┌───────────────────────────────────▼────────────────────────────────────┐
│        Representation (AJK Agency) & Interactive Booking Terminal      │
└────────────────────────────────────────────────────────────────────────┘
```
