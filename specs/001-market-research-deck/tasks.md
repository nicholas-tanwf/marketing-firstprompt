---

description: "Task list for AI market research deck implementation"
---

# Tasks: AI Dating App Market Research Deck

**Input**: Design documents from `/specs/001-market-research-deck/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/, quickstart.md

**Tests**: Not requested. Do not add test tasks unless you later request them explicitly.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `react-vite/src/` (app code), `specs/001-market-research-deck/` (docs)

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Ensure the Vite app and docs are ready for implementation

- [x] T001 Confirm Vite app runs locally via `react-vite/package.json` scripts
- [x] T002 Add `react-vite/src/content/` and `react-vite/src/deck/` folders per `specs/001-market-research-deck/plan.md`
- [x] T003 [P] Add initial content stubs in `react-vite/src/content/deck.content.js` and `react-vite/src/content/sources.content.js`
- [x] T004 [P] Add helper stubs in `react-vite/src/lib/motion.js` and `react-vite/src/lib/copy.js`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T005 Implement `react-vite/src/deck/DeckShell.jsx` with full-viewport layout + safe padding + bottom nav slot
- [x] T006 Implement `react-vite/src/deck/SlideRenderer.jsx` that renders slides from `react-vite/src/content/deck.content.js`
- [x] T007 Implement `react-vite/src/deck/components/BentoGrid.jsx` for responsive tile layout (mobile-first → tablet/desktop)
- [x] T008 Implement `react-vite/src/deck/components/Tile.jsx` with rounded surfaces, dark theme defaults, and low text density styling
- [x] T009 Implement `react-vite/src/deck/components/Keyword.jsx` to render emphasized keywords in CAPITALIZED form
- [x] T010 Implement `react-vite/src/deck/components/SourceBadge.jsx` that links slide tiles/claims to sources (appendix traceability)
- [x] T011 Implement reduced-motion aware microanimation helpers in `react-vite/src/lib/motion.js` (transform/opacity only)
- [x] T012 Implement copy constraints helpers in `react-vite/src/lib/copy.js` (keyword capitalization + optional length warnings)
- [x] T013 Wire `react-vite/src/App.jsx` to use `DeckShell` + `SlideRenderer` as the root experience

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - View a full-page, mobile-first deck (Priority: P1) 🎯 MVP

**Goal**: Full-viewport, dark (black) themed deck that is readable on mobile and scales up

**Independent Test**: Run `npm run dev` in `react-vite/`, open on a 375×812 viewport, and verify slide content is legible (≥16px body), not clipped, and does not require scrolling for the core slide

### Implementation for User Story 1

- [x] T014 [US1] Implement global baseline + dark theme tokens in `react-vite/src/index.css` (Tailwind utilities + app defaults)
- [x] T015 [US1] Apply “dark black” surface defaults and rounded corners in `react-vite/src/deck/DeckShell.jsx`
- [x] T016 [US1] Ensure consistent mobile padding (20px) in `react-vite/src/deck/DeckShell.jsx`
- [x] T017 [US1] Ensure body text sizing rules in `react-vite/src/deck/components/Tile.jsx` (min 16px on mobile)
- [x] T018 [US1] Add initial slide sequence (overview + market + comparison placeholders) in `react-vite/src/content/deck.content.js`

**Checkpoint**: User Story 1 is fully viewable and readable as a full-page deck

---

## Phase 4: User Story 2 - Navigate by bottom tabs + lightweight transitions (Priority: P1)

**Goal**: Bottom navigation to jump between major sections with smooth microanimations and full accessibility

**Independent Test**: Use bottom navigation to move between sections and verify active state, keyboard focus, and reduced-motion behavior

### Implementation for User Story 2

- [ ] T019 [US2] Implement bottom navigation component in `react-vite/src/deck/DeckShell.jsx` (44×44px min targets)
- [ ] T020 [US2] Add section model (id/label/icon/slide order) to `react-vite/src/content/deck.content.js`
- [ ] T021 [US2] Implement navigation state + deep-linking (URL hash or query) in `react-vite/src/deck/DeckShell.jsx`
- [ ] T022 [US2] Add microanimations for slide transitions in `react-vite/src/deck/SlideRenderer.jsx` using `react-vite/src/lib/motion.js`
- [ ] T023 [US2] Add keyboard support + visible focus states for nav in `react-vite/src/deck/DeckShell.jsx`
- [ ] T024 [US2] Add `prefers-reduced-motion` handling (disable non-essential motion) in `react-vite/src/lib/motion.js`

**Checkpoint**: Navigation is touch-first, keyboard-accessible, and smooth without jank

---

## Phase 5: User Story 3 - Trust the Hinge vs Tinder comparison (Priority: P1)

**Goal**: Fact-checked comparison content with traceable sources and a sources appendix section

**Independent Test**: Open comparison slides and verify all quantitative claims show source+date in appendix/notes; verify sources section is accessible from bottom nav

### Implementation for User Story 3

- [ ] T025 [US3] Convert research sources into structured objects in `react-vite/src/content/sources.content.js` (publisher/title/url/publishedAt/accessedAt)
- [ ] T026 [US3] Create claim objects (id/text/type/sourceIds/dateRange) in `react-vite/src/content/sources.content.js`
- [ ] T027 [US3] Implement comparison slides (Tinder, Hinge, Comparison) in `react-vite/src/content/deck.content.js` referencing claim IDs
- [ ] T028 [US3] Implement “Sources” section/slide(s) in `react-vite/src/content/deck.content.js` that render a sources appendix
- [ ] T029 [US3] Render claim/source links on relevant tiles via `react-vite/src/deck/components/SourceBadge.jsx`
- [ ] T030 [US3] Add speaker notes support (presenter-only) in `react-vite/src/deck/SlideRenderer.jsx` (toggleable, not shown by default)
- [ ] T031 [US3] Audit all numbers/comparisons in `specs/001-market-research-deck/research.md` and ensure each maps to a `Source` and `Claim`

**Checkpoint**: Comparison content is traceable and defensible; unsourced claims are labeled as hypotheses or removed

---

## Phase 6: User Story 4 - Minimal text, bento-grid storytelling (Priority: P2)

**Goal**: Slides remain scannable with bento grids and restrained copy per slide

**Independent Test**: Spot-check each slide for one-takeaway clarity and low copy density; verify bento layout holds at 320px width without pinch-zoom

### Implementation for User Story 4

- [ ] T032 [US4] Implement bento layouts for key sections in `react-vite/src/content/deck.content.js` (tiles with clear hierarchy)
- [ ] T033 [US4] Apply copy density styling (line length, spacing, truncation where needed) in `react-vite/src/deck/components/Tile.jsx`
- [ ] T034 [US4] Enforce CAPITALIZED KEYWORDS rendering via `react-vite/src/deck/components/Keyword.jsx`
- [ ] T035 [US4] Add “one takeaway” slide pattern (headline + 3–6 tiles max) in `react-vite/src/deck/SlideRenderer.jsx`
- [ ] T036 [US4] Add optional dev-only warnings for overly long tile copy in `react-vite/src/lib/copy.js`

**Checkpoint**: Slides are bento-first and readable without dense paragraphs

---

## Phase 7: User Story 5 - Open-source visual assets with attribution (Priority: P3)

**Goal**: Use open-source icons/images safely with documented license/attribution

**Independent Test**: Review the sources/assets section and confirm every icon/image has a license and attribution where required

### Implementation for User Story 5

- [ ] T037 [P] [US5] Add open-source icon dependency to `react-vite/package.json` (e.g., `lucide-react`)
- [ ] T038 [US5] Create an assets registry in `react-vite/src/content/sources.content.js` (asset id → license/attribution)
- [ ] T039 [US5] Integrate icons into bottom nav + tiles in `react-vite/src/deck/DeckShell.jsx` and `react-vite/src/deck/components/Tile.jsx`
- [ ] T040 [US5] Add a visible “Attribution” section in the Sources appendix slides in `react-vite/src/content/deck.content.js`
- [ ] T041 [US5] Add graceful image fallbacks in `react-vite/src/deck/components/Tile.jsx` (no layout break on load error)

**Checkpoint**: Visuals are open-source and share-safe

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories (accessibility, performance, docs)

- [ ] T042 [P] Add focus ring + contrast review pass across `react-vite/src/deck/**`
- [ ] T043 Ensure bottom nav respects safe area (iOS) in `react-vite/src/deck/DeckShell.jsx`
- [ ] T044 Reduce layout thrash: keep animations to transform/opacity in `react-vite/src/lib/motion.js`
- [ ] T045 Optimize images (size, format) and add lazy-loading where applicable in `react-vite/src/deck/components/Tile.jsx`
- [ ] T046 Run a performance pass (Lighthouse / Web Vitals) and address top offenders in `react-vite/` config and components
- [ ] T047 Update documentation pointers in `specs/001-market-research-deck/quickstart.md` to match implemented file paths

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can proceed in parallel after Phase 2 (team-capacity permitting)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2)
- **User Story 2 (P1)**: Can start after Foundational (Phase 2)
- **User Story 3 (P1)**: Can start after Foundational (Phase 2) (depends on content model from Phase 2)
- **User Story 4 (P2)**: Can start after Foundational (Phase 2) (builds on Tile/Bento primitives)
- **User Story 5 (P3)**: Can start after Foundational (Phase 2)

### Parallel Opportunities

- Phase 2 tasks are mostly sequential (shared primitives).
- After Phase 2:
  - US1 content/styling and US2 navigation can proceed in parallel.
  - US3 sources modeling can proceed in parallel with US4 layout refinement.

---

## Parallel Example: User Story 2

```bash
Task: "Implement bottom navigation component in react-vite/src/deck/DeckShell.jsx"
Task: "Add section model to react-vite/src/content/deck.content.js"
Task: "Add reduced-motion handling in react-vite/src/lib/motion.js"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Mobile readability + full-page experience

### Incremental Delivery

1. Add User Story 2 (navigation + transitions)
2. Add User Story 3 (fact-checked comparison + sources)
3. Add User Story 4 (bento + low copy density across slides)
4. Add User Story 5 (open-source visuals + attribution)

