# Dream Quest Video Games — Website Build Task

## Business Description
- **Name:** Dream Quest Video Games
- **Tagline:** "Keeping Score Since '24"
- **Type:** Retro & modern video game store (buy/sell used games)
- **Logo:** `logo.jpg` in project root — pixel art warrior girl with sword, purple/teal/green color palette, circular badge design

## Services Offered
1. **Buy & Sell Used Video Games** — Atari through modern gen (PS5, Xbox Series X, Switch)
2. **Gaming Accessories** — Controllers, cables, memory cards, etc.
3. **Anime Statues & Collectibles**
4. **Console Reconditioning** — Repair & restore old consoles
5. **CD/Disc Resurfacing** — Fix scratched discs

## Mascot
The pixel art warrior girl in the logo is named **Valerie the Viking** — she is the official mascot of Dream Quest Video Games. Reference her by name throughout the site (e.g. "Meet Valerie, our guardian of the collection", taglines, About section, etc.). She should feel like the face of the brand.

## Brand Colors (from logo)
- Primary purple: #7B2FBE / #9B59B6
- Accent teal/cyan: #00BCD4 / #4DD0E1
- Green glow: #4CAF50 / #66BB6A
- Background dark: #0D0D1A (near-black dark navy)
- White/light accents

## What to Build
A full marketing website with:

### Pages / Sections (single page scrollable or multi-page)
1. **Hero Section** — Full-width with logo, animated pixel/retro aesthetic, tagline, CTA "Browse Our Collection" & "Get a Quote"
2. **About Section** — Who we are, passion for retro gaming, founded 2024
3. **Services Section** — Cards for each of the 5 services with retro-style icons
4. **Featured Inventory** — Showcase grid (can be placeholder items across generations: Atari, NES, SNES, N64, PS1, PS2, Xbox, GameBoy, modern)
5. **Console Reconditioning CTA** — Bold section explaining the reconditioning & disc resurfacing services
6. **Collectibles Section** — Anime statues highlight
7. **Why Choose Us** — Trust signals (authentic, tested, guaranteed)
8. **Contact / Location** — Placeholder contact form + social links
9. **Footer** — Logo, links, copyright

### Technical Requirements
- **Framework:** Next.js 14+ with App Router (or plain HTML/CSS/JS if cleaner)
- **Styling:** Tailwind CSS — dark theme, pixel/retro aesthetic with modern polish
- **Containerized:** Docker + docker-compose.yml exposing port **8420**
- **SEO Ready:** Meta tags, Open Graph, sitemap.xml, robots.txt, semantic HTML
- **Logo:** Use `logo.jpg` as the actual logo throughout — hero, navbar, favicon
- **Pixel Art Aesthetic:** CSS pixel borders, scanline effects, retro fonts (Press Start 2P from Google Fonts for headings, clean sans for body)
- **Animations:** Subtle — pixel-style hover effects, glow animations on CTAs
- **Mobile Responsive:** Must look great on phone

### SEO Strategy
- Title: "Dream Quest Video Games | Retro & Modern Games, Consoles & Accessories"
- Meta description about buying/selling retro games, console repair, disc resurfacing
- Local business schema markup (JSON-LD)
- Keywords woven naturally: retro video games, used games, console repair, game store

### File Structure
```
dreamquest-website/
├── Dockerfile
├── docker-compose.yml
├── package.json
├── next.config.js
├── tailwind.config.js
├── public/
│   ├── logo.jpg (already exists)
│   ├── favicon.ico
│   └── images/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── Inventory.tsx
│       ├── Reconditioning.tsx
│       ├── Collectibles.tsx
│       ├── WhyUs.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
```

## Quality Bar
- Professional enough to hand to a real business owner
- Should generate organic traffic — proper SEO, fast load, mobile-first
- Dark retro gaming aesthetic throughout — NOT generic/boring
- The logo warrior girl should feel like the mascot — reference the pixel art style
- Every section should have placeholder content that feels real (not "Lorem ipsum")

## Final Step — Persist Learnings
Append to `/Users/jgavinray/Obsidian/personal/zoidberg/memory/2026-03-27.md`:
- What worked
- What didn't work  
- Decisions made
- Blockers hit
- Next steps (e.g. "docker-compose up" instructions for Gavin)
- The port the site is exposed on (8420)
- The project path (/Users/jgavinray/dev/dreamquest-website)

## Notify When Done
When completely finished, run:
openclaw system event --text "Done: Dream Quest website built and containerized at ~/dev/dreamquest-website — run docker-compose up to start on port 8420" --mode now
