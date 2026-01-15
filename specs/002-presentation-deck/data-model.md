# Data Model (Phase 1): Bilingual Deck Content

This project is UI-only. The “data model” is the content structure that drives the deck renderer.

## Entities

### Deck

- **id**: string
- **title**: localized string (`{ en, zh }`)
- **slides**: list of `Slide`
- **assets**: list of `Asset` (attribution/licensing metadata)

### Section

Used by the bottom navigation.

- **id**: string (e.g., `s1`, `s2`)
- **label**: localized string or short code (e.g., `01`)
- **a11yLabel**: localized string (e.g., “Slide 1” / “第 1 页”)
- **icon**: string key for the icon variant
- **slides**: list of slide ids

### Slide

- **id**: string
- **sectionId**: string (links to `Section.id`)
- **title**: localized string
- **subtitle**: localized string (optional)
- **layout**: string (e.g., `bento`)
- **tiles**: list of `Tile`
- **speakerNotes**: localized string (optional)

### Tile

Composable content blocks.

Common fields:

- **id**: string
- **kind**: `bullet | metric | image | video`
- **title**: localized string (optional)

Kind-specific fields:

- **bullet**: `body` (localized string)
- **metric**: `value` (string), optional `body`
- **image**: `src` (string), `alt` (localized string), optional `body`
- **video**: `youtubeUrl` (string), optional `body`

### LocalePreference

- **value**: `en | zh`
- **source**: `auto | user`
- **storedAt**: timestamp (implementation detail; optional)

### Asset

- **id**: string
- **type**: `icon | photo | video`
- **origin**: string (package, user-provided, etc.)
- **license**: string
- **attribution**: string

