# Implementation Plan: Bilingual Presentation Deck (First Prompt Brief)

**Branch**: `002-presentation-deck` | **Date**: 2026-01-15 | **Spec**: `specs/002-presentation-deck/spec.md`
**Input**: Feature specification from `/specs/002-presentation-deck/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.cursor/commands/speckit.plan.md` for the execution workflow.

## Summary

Build a full-page 16:9 web presentation (max 4 slides) summarizing key takeaways from First Prompt
(Asia’s flagship AI conference), with a modern cinematic blue→teal gradient theme, glassmorphic
rounded content blocks, bottom navigation, bilingual (English/中文) toggle, micro-animations, and
performance-first media loading (including relevant YouTube videos and conference photos).

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: JavaScript (React 18) + Node.js (Vite dev/build)  
**Primary Dependencies**: React, Vite, Tailwind CSS (existing repo app in `react-vite/`)  
**Storage**: Local-only (browser `localStorage` for language preference); no backend  
**Testing**: Manual QA checklist + lightweight smoke checks (no test runner required for MVP)  
**Target Platform**: Modern browsers (mobile + desktop)  
**Project Type**: Web application (single-page deck)  
**Performance Goals**: First slide readable fast; 60fps micro-animations (transform/opacity only)  
**Constraints**: Max 4 slides; accessibility (keyboard + touch targets); defer heavy media; minimal new deps  
**Scale/Scope**: Internal team brief (single deck instance)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Audience-first narrative**: Each slide has one takeaway, with “so what” before detail.
- **Evidence & sourcing integrity**: Any quantitative/comparative claim MUST have a source/date
  (speaker notes or sources section). YouTube embeds are treated as sources for demo references.
- **Mobile/touch/accessibility**: Touch targets ≥44px, body text ≥16px on mobile, visible focus
  states, keyboard navigable, and respects reduced motion.
- **Performance & simplicity**: Defer media loading (click-to-load for video), avoid heavy
  animation libraries, keep transitions GPU-friendly.
- **Quality gates before share**: Narrative + sourcing + accessibility + mobile + performance gates
  pass before sharing externally.

## Project Structure

### Documentation (this feature)

```text
specs/002-presentation-deck/
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
├── public/
│   └── photos/first-prompt/        # conference photos (local assets)
├── src/
│   ├── content/
│   │   ├── deck.content.js         # bilingual slide content + media references
│   │   └── sources.content.js      # sources + asset attribution
│   ├── deck/                       # deck UI shell + rendering
│   │   ├── DeckShell.jsx
│   │   ├── SlideRenderer.jsx
│   │   └── components/Tile.jsx     # supports bullet, metric, image, video
│   ├── App.jsx                     # locale persistence + shell wiring
│   └── index.css                   # base + reduced-motion rules
└── package.json
```

**Structure Decision**: Use the existing `react-vite/` app as the runtime. Keep slide copy in
`src/content/deck.content.js` to separate content from UI and make edits fast.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | N/A | N/A |
