# Research: AI Dating App Market Research Deck (Hinge vs Tinder)

**Purpose**: Resolve key decisions for the deck build and compile fact-checked
research inputs with sources.

**Accessed**: 2026-01-14

## Decisions (build)

### Decision: Use lightweight CSS-based microanimations (no heavy motion library by default)

- **Rationale**: Keeps bundle small and performance predictable on mobile. Meets
  “microanimations” requirement with CSS transitions + transform/opacity.
- **Alternatives considered**:
  - Framer Motion: richer choreography, but heavier dependency and more runtime.

### Decision: Open-source icons via a permissive icon library

- **Rationale**: Faster than custom SVG work; ensures consistent style.
- **Candidate**: Lucide (permissive license) or Heroicons (MIT).

### Decision: “Low text density” rule as a first-class constraint

- **Rationale**: The deck must be skimmable; bento tiles + short labels reduce
  cognitive load.
- **Implementation idea**: enforce soft limits in content review (and optionally
  in dev via helper warnings).

## Facts & sources (market + product)

### Ownership / corporate context

- **Hinge**: Match Group acquired a 51% stake in Hinge (press release, 2018) and
  later fully acquired it (reported by TechCrunch, 2019).
  - Source: Match Group press release (2018-06-20): `https://ir.mtch.com/investor-relations/news-events/news-events/news-details/2018/Match-Group-Expands-Portfolio-With-Dating-App-Hinge/default.aspx`
  - Source: TechCrunch (2019-02-07): `https://techcrunch.com/2019/02/07/match-fully-acquires-relationship-focused-app-hinge/`

### Business scale (financials)

From Match Group’s FY2024 Form 10‑K:

- **Tinder direct revenue**: $1,940.6M (FY2024).
- **Hinge direct revenue**: $550.4M (FY2024).

Source: Match Group Form 10‑K (FY ended 2024‑12‑31):  
`https://s203.q4cdn.com/993464185/files/doc_financials/2024/ar/MTCH-10-K-2024-12-31.pdf`

### Usage / audience (U.S. survey)

From Pew Research Center (2023):

- **30%** of U.S. adults have used a dating site or app.
- Among online dating users, **Tinder** is the most-used app (reported usage),
  and **Hinge** is also widely used.

Source: Pew Research Center (2023-02-02):  
`https://www.pewresearch.org/short-reads/2023/02/02/key-findings-about-online-dating-in-the-u-s/`

### Positioning / product philosophy (qualitative)

- **Hinge**: “Designed to be deleted” messaging is used in Hinge’s press/campaign
  materials and aligns with a relationship-oriented positioning.
  - Source: Hinge press: `https://hinge.co/press/hinge-releases-third-dtbd-ad-campaign`
- **Tinder**: best known for swipe-based discovery; the swipe mechanic and its
  cultural impact has been covered in depth.
  - Source: Wired (2016): `https://www.wired.com/2016/09/history-of-tinder-right-swipe/`

## Product comparison (inputs for deck slides)

### High-level positioning

- **Tinder**: broad-market, fast discovery, swipe-first; strong cultural
  association with “swiping”.
- **Hinge**: relationship-first, profile depth via prompts, “designed to be
  deleted” narrative.

### Core UX differences (hypothesis-backed; verify with additional sources)

- **Profile depth**:
  - Tinder tends to emphasize quick scanning (photos + minimal copy).
  - Hinge emphasizes conversation starters and specific responses.
- **Engagement loop**:
  - Tinder: higher-volume discovery, speed, “next swipe” loop.
  - Hinge: fewer, richer touchpoints per profile (commenting/liking specific
    prompts/photos).

## Slide structure proposal (bento, minimal text)

Recommended sections for bottom navigation:

1. **OVERVIEW** (thesis + why now)
2. **MARKET** (usage + macro signals)
3. **TINDER** (positioning + business scale)
4. **HINGE** (positioning + growth)
5. **COMPARISON** (bento grid: UX, audience, monetization, brand)
6. **IMPLICATIONS** (what this means for AI dating products)
7. **RECOMMENDATIONS**
8. **SOURCES**

## Gaps to fill (next research iteration)

- Identify official/help-center sources for Hinge prompts + interaction model.
- Add credible sources for monetization features (tiers, feature names) and
  safety/trust tooling.
- Validate any “UX differences” claims with primary sources or clearly label as
  hypotheses on-slide.

