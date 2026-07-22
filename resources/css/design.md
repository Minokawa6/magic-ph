# Design System

This document defines the visual design language for this project. Use these guidelines when building any user interface. The goal is a cohesive, polished look across every screen and component.

## Colors

### Primary Palette

- **Brand 1**: `#6943A3` -- Buttons, icons, details
- **Brand 2**: `#462D6D` -- Links, CTAs, hovers
- **Light 1**: `#FCFCFD` -- Headings, BGs, buttons
- **Light 2**: `#F7F6F8` -- Body text, BGs
- **Light 3**: `#E4E2E8` -- Borders, fine details
- **Dark 1**: `#25202C` -- Headings, BGs
- **Dark 2**: `#3E3747` -- Body text, BGs
- **Dark 3**: `#575160` -- Borders, fine details

### Secondary Palette

- **Brand 1**: `#9943A3` -- Buttons, icons, details
- **Brand 2**: `#662D6D` -- Links, CTAs, hovers
- **Light 1**: `#FDFCFD` -- Headings, BGs, buttons
- **Light 2**: `#F8F6F8` -- Body text, BGs
- **Light 3**: `#E8E2E8` -- Borders, fine details
- **Dark 1**: `#2B202C` -- Headings, BGs
- **Dark 2**: `#463747` -- Body text, BGs
- **Dark 3**: `#5E5160` -- Borders, fine details

The secondary palette is used for: button backgrounds, badges, navigation highlights. For all other elements, fall back to the primary palette.

### How to Use Colors

- **Brand colors** (`#6943A3`, `#462D6D`) are the signature of the design. Use them for buttons, links, active states, and anywhere the interface needs to feel intentional and branded.
- **Light colors** (`#FCFCFD`, `#F7F6F8`, `#E4E2E8`) serve as backgrounds and surfaces. The lightest shade is for primary page backgrounds, the mid shade works well for alternate sections or card fills, and the deepest light shade is ideal for borders and subtle dividers.
- **Dark colors** (`#25202C`, `#3E3747`, `#575160`) are for text and dark surfaces. The deepest dark is for headings and high-emphasis text. The mid dark works for body text and supporting copy. The lightest dark is for borders, muted text, and fine details on dark backgrounds.
- **Headings on light backgrounds** always use `#25202C`. **Headings on dark backgrounds** always use `#FCFCFD`.
- **Body text on light backgrounds** always uses `#3E3747`. **Body text on dark backgrounds** always uses `#F7F6F8`.
- Always ensure text has strong contrast against its background.

## Typography

**Heading font:** Inter (Bold)
**Body font:** Inter (Medium)

Use "Inter" for all headings, hero text, and display elements. Use "Inter" for paragraphs, labels, navigation, form fields, and all other interface text. Load both from Google Fonts.

### Type Scale

The type scale uses fluid sizing that adapts smoothly between mobile and desktop viewports:

- **Title Size 1** -- 48px on mobile, 61px on desktop, Bold, Inter. Use for hero headlines and major page titles.
- **Title Size 2** -- 40px on mobile, 49px on desktop, Bold, Inter. Use for section headings.
- **Title Size 3** -- 33px on mobile, 39px on desktop, Bold, Inter. Use for card titles and subsection headings.
- **Title Size 4** -- 28px on mobile, 31px on desktop, Bold, Inter. Use for smaller headings, labels, or group titles.
- **Title Size 5** -- 23px on mobile, 25px on desktop, Bold, Inter. Use for fine headings or emphasized labels.
- **Title Size 6** -- 19px on mobile, 20px on desktop, Bold, Inter. Use for the smallest headings or captions.
- **Title Subtitle** -- 14px on mobile, 14px on desktop, Bold, Inter. Use for labels, overlines, and category tags. Displayed uppercase with wide letter-spacing.
- **Body Size L** -- 18px on mobile, 18px on desktop, Medium, Inter. Use for lead paragraphs, introductions, or featured body text.
- **Body Size M** -- 16px on mobile, 16px on desktop, Medium, Inter. The default size for paragraphs and general reading.
- **Body Size S** -- 14px on mobile, 14px on desktop, Medium, Inter. Use for captions, footnotes, helper text, and secondary information.

Sizes should scale fluidly between the mobile and desktop values. Use responsive or fluid sizing so text feels comfortable at every viewport width.

### CSS Variables

Store font families and weights as variables so they stay consistent across the system:

```css
:root {
    --font-family-heading: 'Inter';
    --font-family-body: 'Inter';
}
```

## Backgrounds and Sections

The overall tone is light. Most sections should use light backgrounds with dark text.

- For light sections, use `#FCFCFD` or `#F7F6F8` as the background, with `#25202C` or `#3E3747` for text.
- For dark sections, use `#25202C` or `#3E3747` as the background, with `#FCFCFD` or `#F7F6F8` for text.
- Use `#E4E2E8` for subtle borders and dividers on light backgrounds, and `#575160` for the same on dark backgrounds.
- Alternate background tones between consecutive sections so they feel visually distinct without competing.

## Buttons

**Primary buttons** use a `#9943A3` background with white text and rounded corners. They should feel solid and confident. Add a subtle hover effect -- a gentle scale, brightness shift, or shadow -- to make them feel interactive.

**Secondary buttons** are outlined or ghost-style. They have a transparent background with a visible border and text that matches the brand or dark palette. Use them for less prominent actions alongside a primary button.

**Button typography:** Inter at weight 500.

**Button sizes:**

- Small: 8px vertical · 16px horizontal · 13px font
- Medium: 12px vertical · 24px horizontal · 15px font
- Large: 16px vertical · 32px horizontal · 17px font
- Default size: md

**Tags** are used for labels like "Popular", "New", or category chips. They use noticeably tighter padding than buttons so they read as labels, not actions.

- Variant: soft (tinted brand background with brand text)
- Size: md
- Radius: 999px

## Borders, Cards, and Details

Use `#E4E2E8` for card borders, input outlines, and dividers on light surfaces. On dark surfaces, use `#575160`. Keep borders subtle -- they should organize the layout without drawing attention.

Cards and elevated surfaces should use soft shadows or a thin border to create a sense of layering. Avoid heavy drop shadows.

## General Guidance

- Maintain generous whitespace. Let the content breathe.
- Use consistent spacing throughout. Pick an 8px base unit and stick with it.
- Headings should feel bold and prominent. Body text should be comfortable to read at length.
- Interactive elements (links, buttons, toggles) should always use brand colors so they are immediately recognizable.
- Keep the design clean and intentional. Every color, font choice, and spacing decision in this system exists for a reason -- follow it consistently.
