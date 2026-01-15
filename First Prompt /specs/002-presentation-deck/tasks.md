---
description: "Task list for implementing the bilingual First Prompt deck"
---

# Tasks: Bilingual Presentation Deck (First Prompt Brief)

**Input**: Design documents from `/specs/002-presentation-deck/`  
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/  
**Tests**: Not requested in the feature spec; use manual QA tasks below.  

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Use the existing deck framework and establish the content + asset structure.

- [x] T001 Create feature spec + plan docs in `specs/002-presentation-deck/` (spec.md, plan.md)
- [x] T002 Confirm runtime app exists in `react-vite/` and builds (`react-vite/package.json`)
- [x] T003 [P] Create Phase 0/1 artifacts: `specs/002-presentation-deck/research.md`, `data-model.md`, `quickstart.md`, `contracts/deck.schema.json`
- [x] T004 [P] Create photos folder in `react-vite/public/photos/first-prompt/` and add README

**Checkpoint**: Structure ready for slide implementation.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core capabilities needed before any story is usable.

- [x] T005 [P] Ensure reduced-motion baseline exists in `react-vite/src/index.css`
- [x] T006 [P] Ensure slide renderer can handle localized copy in `react-vite/src/deck/SlideRenderer.jsx`
- [x] T007 [P] Extend tiles to support `image` + `video` kinds with deferred loading in `react-vite/src/deck/components/Tile.jsx`

**Checkpoint**: The deck can render bilingual text and media tiles safely.

---

## Phase 3: User Story 1 — View the deck (Priority: P1) 🎯 MVP

**Goal**: Open a single URL and immediately see a polished 4-slide deck (16:9 stage, readable on mobile/desktop).

**Independent Test**: `cd react-vite && npm run dev` → open the page and verify slide 1 is readable and stable.

### Implementation for User Story 1

- [x] T008 [US1] Implement 4-slide deck content (EN/中文) in `react-vite/src/content/deck.content.js`
- [x] T009 [US1] Apply modern blue→teal cinematic background + glassmorphic blocks in `react-vite/src/deck/DeckShell.jsx` and `react-vite/src/deck/SlideRenderer.jsx`
- [x] T010 [US1] Copy conference photos into `react-vite/public/photos/first-prompt/` and reference them in `react-vite/src/content/deck.content.js`

**Checkpoint**: Slide 1 renders fast, looks correct, and is readable on mobile width.

---

## Phase 4: User Story 2 — Navigate slides confidently (Priority: P2)

**Goal**: Clear bottom navigation with progress indicators; touch-first + keyboard-friendly.

**Independent Test**: Navigate slide 1 → 4 → 1 using bottom nav on mobile and desktop; verify focus states.

### Implementation for User Story 2

- [x] T011 [US2] Implement fixed bottom nav with icon-only buttons + tooltips in `react-vite/src/deck/DeckShell.jsx`
- [x] T012 [US2] Add progress dots + slide position indicator in `react-vite/src/deck/DeckShell.jsx`
- [x] T013 [US2] Add subtle auto-hide on scroll down + show on scroll up in `react-vite/src/deck/DeckShell.jsx`

**Checkpoint**: Navigation is obvious, responsive, and accessible.

---

## Phase 5: User Story 3 — Switch languages (English / 中文) (Priority: P3)

**Goal**: Toggle language with a subtle transition; auto-detect on first load; persist preference.

**Independent Test**: Toggle language on each slide; reload; confirm preference persists.

### Implementation for User Story 3

- [x] T014 [US3] Add locale state + auto-detect + persistence in `react-vite/src/App.jsx`
- [x] T015 [US3] Add top-right language toggle UI in `react-vite/src/deck/DeckShell.jsx`
- [x] T016 [US3] Ensure all slide titles/bodies render localized text via `react-vite/src/deck/SlideRenderer.jsx` + `react-vite/src/deck/components/Tile.jsx`

**Checkpoint**: Language switching is smooth and layout remains stable.

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Compliance with constitution gates (sourcing, accessibility, performance) and final shippability.

- [ ] T017 [P] Add an in-app “Sources / Attribution” view without increasing slide count (e.g., modal/button)
  - `react-vite/src/content/sources.content.js`
  - `react-vite/src/deck/DeckShell.jsx` (entry point UI)
  - (new) `react-vite/src/deck/SourcesPanel.jsx` (or similar)
- [ ] T018 [P] Review Chinese copy for clarity and tone; adjust line breaks for mobile readability in `react-vite/src/content/deck.content.js`
- [ ] T019 [P] Accessibility audit: keyboard-only navigation, focus visibility, touch target sizing, reduced-motion behavior
  - `react-vite/src/deck/DeckShell.jsx`
  - `react-vite/src/deck/SlideRenderer.jsx`
  - `react-vite/src/deck/components/Tile.jsx`
- [ ] T020 [P] Performance pass: verify click-to-load video behavior and image sizes; ensure first slide is text-first
  - `react-vite/src/deck/components/Tile.jsx`
  - `react-vite/public/photos/first-prompt/*`
- [x] T021 Run production build to verify bundling succeeds: `react-vite/` (`npm run build`)
- [x] T022 Validate quickstart steps in `specs/002-presentation-deck/quickstart.md`

---

## Dependencies & Execution Order

- **Phase 1 → Phase 2**: Must be complete before user stories (renderer + tile kinds).
- **US1** can ship as MVP once slide 1 loads, is readable, and has correct theme.
- **US2 + US3** can be done in parallel after Phase 2 (they touch mostly separate files).
- **Polish** can proceed after all user stories are complete.

