# Research (Phase 0): Presentation Deck Implementation Choices

**Feature**: `002-presentation-deck`  
**Date**: 2026-01-15  

## Decision 1: Implementation base

- **Decision**: Implement inside the existing `react-vite/` application.
- **Rationale**: Repo already has a deck shell + content separation. Reuse reduces risk and ships faster.
- **Alternatives considered**:
  - Standalone static HTML/CSS/JS: simpler deploy, but would duplicate existing deck framework.

## Decision 2: Content format & bilingual strategy

- **Decision**: Store slide copy as structured objects with `{ en, zh }` keys.
- **Rationale**: Keeps translation aligned per field; avoids layout breakage by keeping containers flexible.
- **Alternatives considered**:
  - Separate “EN deck” and “中文 deck”: increases maintenance and drift risk.

## Decision 3: Language preference behavior

- **Decision**: Auto-detect language on first load (browser preferences), default to English; persist a user override.
- **Rationale**: Meets “global UI” expectation while staying user-controlled.
- **Alternatives considered**:
  - Always English: fails bilingual requirement.
  - Always auto-detect with no override: harms UX.

## Decision 4: YouTube embedding for performance

- **Decision**: Click-to-load embeds using `youtube-nocookie.com` iframe.
- **Rationale**: Avoids loading heavy third-party scripts until the viewer opts in; better initial load and privacy.
- **Alternatives considered**:
  - Always-on iframes: hurts load performance and can shift layout.

## Decision 5: Micro-animations approach

- **Decision**: CSS transitions + transform/opacity only; disable/limit via `prefers-reduced-motion`.
- **Rationale**: Smooth 60fps targets and accessible by default.
- **Alternatives considered**:
  - Dedicated animation libraries: higher bundle cost and complexity.

## Decision 6: Icons

- **Decision**: Use a consistent stroke-only icon style in the bottom navigation (single family, ~1.75px stroke).
- **Rationale**: Crisp at all DPIs, theme-compatible, no external icon fetch needed.
- **Alternatives considered**:
  - Mixed icon families: breaks visual consistency.

