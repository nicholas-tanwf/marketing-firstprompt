<!--
Sync Impact Report
- Version change: N/A (template) → 1.0.0
- Modified principles: Template placeholders → 5 marketing-deck principles (new titles)
- Added sections: Deliverables & Content Structure; Workflow & Quality Gates
- Removed sections: N/A (template filled)
- Templates requiring updates:
  - ✅ .specify/templates/plan-template.md (fix command path reference)
- Deferred TODOs:
  - TODO(RATIFICATION_DATE): Original adoption date not provided
-->

# AI Market Research Deck Constitution

## Core Principles

### I. Audience-First Narrative (Insight > Information)
Every slide MUST communicate a single, clear takeaway. The “so what” MUST appear
before supporting detail. Content MUST be structured as a story (problem →
shift → opportunity → proof → next action) rather than a feature list.

### II. Evidence & Sourcing Integrity (No Unattributed Claims)
Any quantitative claim, competitor comparison, or market sizing statement MUST
include a source and date (in speaker notes or an appendix). Hypotheses MUST be
labeled as hypotheses. If a claim cannot be sourced, it MUST be removed or
rewritten as a qualitative insight.

### III. Mobile-First, Touch-First, Accessibility-First (WCAG 2.1 AA)
Design MUST start on mobile viewports and scale up. Interactive elements MUST
meet a minimum 44×44px touch target. Body text MUST be ≥16px on mobile, and each
screen MUST use at most 3 font sizes. The deck MUST maintain WCAG 2.1 AA color
contrast, include visible focus states, and ship with dark mode styling.

### IV. Performance & Simplicity (Fast, Lightweight, Maintainable)
The presentation MUST load quickly and animate smoothly (60fps targets using
transform/opacity). Heavy dependencies MUST be avoided unless they materially
reduce complexity. Prefer static assets and small components over runtime-heavy
effects.

### V. Velocity With Quality Gates (Ship, Measure, Iterate)
Work happens in short cycles. Each iteration MUST include: the hypothesis being
tested, what changed, and how success will be measured (e.g., comprehension,
retention, conversion, or stakeholder approval). Quality gates in this
constitution MUST be met before sharing externally.

## Deliverables & Content Structure

The project MUST maintain a clear separation between content, sources, and UI.

- **Deck**: A React (Vite) presentation UI with reusable slide components.
- **Content**: Slide copy stored in a structured format (JSON/TS module/MDX).
- **Sources**: A single “sources appendix” page or section that lists:
  - Source title + publisher
  - URL (or internal document name)
  - Publication date
  - The claims/slides it supports (traceability)
- **Speaker notes**: Notes MUST include any assumptions, definitions, and
  positioning choices that are not visible on-slide.

## Workflow & Quality Gates

Before any deck iteration is considered “ready to share”, it MUST pass:

- **Narrative gate**: Every slide has one takeaway, and the storyline reads
  coherently without presenter commentary.
- **Sourcing gate**: Every number/comparison has a source + date.
- **Accessibility gate**: Contrast checks, keyboard navigation, and visible
  focus states verified; touch target minimums met.
- **Mobile gate**: Usable and readable at mobile width; body text ≥16px.
- **Performance gate**: No jank in transitions; avoid layout-thrashing.
- **Brand/voice gate**: Tone matches “confident, clear, evidence-led”.

## Governance

- This constitution supersedes local conventions and template defaults.
- **Amendments**:
  - Any change MUST include rationale and a brief “impact” note.
  - Amendments MUST update dependent templates/docs if references become stale.
- **Versioning**:
  - MAJOR: A principle is removed/redefined, or quality gates become weaker.
  - MINOR: A new principle/section is added, or requirements materially expand.
  - PATCH: Clarifications and wording improvements with no behavioral change.
- **Compliance review**:
  - Any work that introduces new claims MUST also update sources/traceability.
  - Any work that introduces new UI patterns MUST meet accessibility rules.
  - Exceptions MUST be explicitly documented under “Complexity Tracking” in the
    relevant plan.

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE): original adoption date not provided | **Last Amended**: 2026-01-14
