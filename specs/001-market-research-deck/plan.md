# Implementation Plan: AI Dating App Market Research Deck

**Branch**: `[001-market-research-deck]` | **Date**: 2026-01-14 | **Spec**: `specs/001-market-research-deck/spec.md`
**Input**: Feature specification from `/specs/001-market-research-deck/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.cursor/commands/speckit.plan.md` for the execution workflow.

## Summary

Build a mobile-first, full-page web presentation (Vite + React + Tailwind) that
delivers a concise, bento-grid style market research story comparing Hinge vs
Tinder. The deck must be dark (black), rounded, touch-first, accessible, and
fast; every quantitative claim must be sourced and fact-checked with a sources
appendix.

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: JavaScript (ESM) + React 19 (via Vite)  
**Primary Dependencies**: Vite 7 + React 19 + Tailwind CSS 3 + PostCSS  
**Storage**: N/A  
**Testing**: N/A (tests optional; add only if explicitly requested later)  
**Target Platform**: Modern mobile + desktop browsers  
**Project Type**: single  
**Performance Goals**: Fast first render + 60fps microanimations/transitions  
**Constraints**: Keep bundle light; avoid heavy animation libs unless justified; respect prefers-reduced-motion  
**Scale/Scope**: ~15–30 slides, grouped into ~6–8 bottom-nav sections

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Audience-first narrative**: each slide has one takeaway; “so what” appears before details.
- **Sourcing integrity**: every number/comparison has a source + date (notes or appendix).
- **Mobile + accessibility**: body text ≥16px on mobile; touch targets ≥44×44px; WCAG AA contrast.
- **Performance**: transitions use transform/opacity; no jank on mobile hardware; avoid unnecessary deps.
- **Velocity gate**: each iteration records hypothesis + change + measurement.

## Project Structure

### Documentation (this feature)

```text
specs/001-market-research-deck/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)
<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature. Delete unused options and expand the chosen structure with
  real paths (e.g., apps/admin, packages/something). The delivered plan must
  not include Option labels.
-->

```text
react-vite/
├── index.html
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── src/
    ├── main.jsx
    ├── index.css
    ├── App.jsx
    ├── content/
    │   ├── deck.content.js         # deck copy + structure (sections/slides/tiles)
    │   └── sources.content.js      # source objects + claim traceability
    ├── deck/
    │   ├── DeckShell.jsx           # full-page layout + bottom nav
    │   ├── SlideRenderer.jsx       # routes slide models → UI
    │   └── components/
    │       ├── BentoGrid.jsx
    │       ├── Tile.jsx
    │       ├── Keyword.jsx
    │       └── SourceBadge.jsx
    └── lib/
        ├── motion.js               # reduced-motion aware motion helpers
        └── copy.js                 # keyword capitalization + copy constraints helpers
```

**Structure Decision**: Single Vite app in `react-vite/` with content separated
from UI (`src/content/*`) and UI primitives in `src/deck/*`.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
