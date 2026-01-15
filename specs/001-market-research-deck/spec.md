# Feature Specification: AI Dating App Market Research Deck

**Feature Branch**: `[001-market-research-deck]`  
**Created**: 2026-01-14  
**Status**: Draft  
**Input**: User description: "rounded corners; dark black theme; keywords capitalised; bento grids; opensource icons/images; bottom navigation; full page presentation; microanimations; best web performance; take market research from the web, fact check; product comparison between Hinge and Tinder; refine research; not too many words in one slide"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - View a full-page, mobile-first deck (Priority: P1)

As a viewer, I want a full-page presentation that is readable on mobile in a dark theme,
so I can absorb the market story quickly without squinting or scrolling.

**Why this priority**: If the deck isn’t readable and navigable, none of the research matters.

**Independent Test**: Open the deck on a mobile-sized viewport and verify the first section can
be read end-to-end with bottom navigation, with no overflow and legible text.

**Acceptance Scenarios**:

1. **Given** I open the deck on a mobile screen, **When** the first slide loads, **Then** I see
   a full-viewport slide with a dark black theme, rounded UI surfaces, and readable body text.
2. **Given** I view any slide, **When** I rotate the device or resize the window, **Then** the
   layout remains usable and does not clip essential content.

---

### User Story 2 - Navigate by bottom tabs + lightweight transitions (Priority: P1)

As a viewer, I want bottom navigation to jump between major sections, so I can skim and
return to key comparison slides quickly.

**Why this priority**: Bottom navigation is the primary control surface on mobile and must be fast and obvious.

**Independent Test**: Use the bottom navigation to jump between sections and verify the correct slide/section
loads instantly and the state is obvious (current tab/position).

**Acceptance Scenarios**:

1. **Given** I am on the deck, **When** I tap a bottom navigation item, **Then** I land on the
   corresponding section with a smooth microanimation that respects reduced-motion preferences.
2. **Given** I navigate between sections, **When** I use keyboard navigation, **Then** focus order is logical
   and all navigation controls are operable without a mouse.

---

### User Story 3 - Trust the Hinge vs Tinder comparison (Priority: P1)

As a stakeholder, I want a fact-checked comparison between Hinge and Tinder with clear sourcing,
so I can make product and positioning decisions without debating the data’s credibility.

**Why this priority**: The deck’s value is credibility; unsourced claims undermine decisions.

**Independent Test**: Review the comparison slides and verify every quantitative claim has a source + date,
and that a dedicated sources appendix exists.

**Acceptance Scenarios**:

1. **Given** a slide contains a number or competitive claim, **When** I open the speaker notes or sources
   appendix, **Then** I can find the supporting source and publication date.
2. **Given** a claim cannot be verified, **When** the deck is prepared for sharing, **Then** that claim is
   removed or reframed as a clearly labeled hypothesis.

---

### User Story 4 - Minimal text, bento-grid storytelling (Priority: P2)

As a viewer, I want slides that use bento grids and concise copy, so I can understand each slide’s takeaway
in seconds rather than reading paragraphs.

**Why this priority**: High comprehension and shareability require scannable slides.

**Independent Test**: Check every slide against word-count constraints and verify each slide has one clear takeaway.

**Acceptance Scenarios**:

1. **Given** I read a slide, **When** I scan the primary headline + keywords, **Then** I can explain the
   slide’s takeaway in one sentence without reading dense paragraphs.
2. **Given** a slide includes multiple blocks, **When** the layout renders on mobile, **Then** it uses a bento
   grid (cards/tiles) that preserves hierarchy and spacing without requiring pinch-zoom.

---

### User Story 5 - Open-source visual assets with attribution (Priority: P3)

As a publisher of the deck, I want open-source icons and images (with attribution when required),
so I can share publicly without licensing risk.

**Why this priority**: The deck will be shared; licensing issues block distribution.

**Independent Test**: Audit the assets used and confirm each has a documented license and attribution requirements.

**Acceptance Scenarios**:

1. **Given** an icon or image is used in the deck, **When** I check the sources/attribution section,
   **Then** I can see its license and attribution text (if required).

### Edge Cases

- What happens when the user has **prefers-reduced-motion** enabled?
- What happens when the network is slow (e.g., “Fast 3G”) and images load late?
- How does the deck handle missing/failed image loads (fallbacks + no layout break)?
- How does navigation behave on very small screens (e.g., 320px width)?
- How does the deck behave in high-contrast modes and in dark environments?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST present a full-viewport, slide-based experience (no long-scrolling page required
  to consume the core narrative).
- **FR-002**: The system MUST provide bottom navigation for major sections and visually indicate the active
  section and position.
- **FR-003**: The system MUST implement a dark black theme as the default look, with rounded corners on
  primary surfaces (cards, nav, modals if any).
- **FR-004**: The system MUST be mobile-first and touch-first: interactive elements MUST meet a minimum
  44×44px touch target and MUST include pressed/active/disabled states where applicable.
- **FR-005**: The system MUST use bento-grid layouts (tile/card-based composition) for slides where multiple
  ideas are presented on the same screen.
- **FR-006**: The system MUST constrain on-slide copy to keep slides scannable:
  - Headline + subhead + tiles MUST stay concise
  - Slides MUST avoid dense paragraphs
  - Keywords used for emphasis MUST appear in capitalized form
- **FR-007**: The system MUST include microanimations for navigation and state changes, and MUST respect
  reduced-motion preferences.
- **FR-008**: The system MUST be optimized for best web performance, including fast initial load and smooth
  transitions on mobile hardware.
- **FR-009**: The deck MUST include a product comparison between Hinge and Tinder that is explicitly fact-checked:
  - Every quantitative claim MUST include a source and date in speaker notes or a sources appendix
  - Unverifiable claims MUST be removed or labeled as hypotheses
- **FR-010**: The deck MUST support ongoing refinement of research by updating sources and refreshing findings
  while maintaining traceability from claims → sources.
- **FR-011**: The system MUST use open-source icons and images, and MUST provide attribution where required by
  the asset’s license.

### Key Entities *(include if feature involves data)*

- **Slide**: A single full-viewport screen with a headline, optional subhead, and one or more tiles/visuals.
- **Section**: A named group of slides mapped to bottom navigation (e.g., Overview, Market, Tinder, Hinge, Comparison, Recommendations, Sources).
- **Claim**: A specific statement (often quantitative) that MUST be traceable to a source or labeled as hypothesis.
- **Source**: A web-accessible reference with publisher, title, URL, and publication date.
- **Asset**: An icon or image with a verifiable license and (if needed) attribution text.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: On a mobile viewport, 100% of slides remain readable without clipping key content and without
  requiring pinch-zoom.
- **SC-002**: The deck achieves “fast perceived load” on typical devices (e.g., meaningful content visible quickly)
  and maintains smooth transitions during navigation.
- **SC-003**: 100% of quantitative claims and explicit competitor comparisons in the Hinge vs Tinder section
  have a source + publication date available via notes/appendix.
- **SC-004**: Copy density stays low: every slide can be summarized as a single sentence takeaway, and reviewers
  report high comprehension during a short walkthrough (internal stakeholder validation).
