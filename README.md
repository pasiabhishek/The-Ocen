<div align="center">

# 🌊 THE OCEANIC

### *Deeper Than You Imagine*

A cinematic, scroll-driven ocean experience built with React — immersive video backdrops, animated wave dividers, and buttery-smooth scrolling that pulls you into the deep.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-ScrollTrigger-88CE02?logo=greensock&logoColor=black)](https://gsap.com/)
[![Swiper](https://img.shields.io/badge/Swiper-Carousel-6332F6?logo=swiper&logoColor=white)](https://swiperjs.com/)
[![Lenis](https://img.shields.io/badge/Lenis-Smooth_Scroll-000000)](https://lenis.darkroom.engineering/)

</div>

---

## ✨ Overview

**The Oceanic** is a single-page, animation-first landing site that tells the story of ocean life through full-bleed video sections, GSAP-powered scroll animations, and swipeable cards. It's built as a showcase of what's possible when you combine **React 19**, **Tailwind CSS 4**, **GSAP ScrollTrigger**, and **Lenis** smooth scrolling into one cohesive, wave-stitched page.

## 🖼️ Preview

| Section | Description |
|---|---|
| 🌅 **Hero** | Full-screen looping video with animated intro copy and a floating nav |
| 🐚 **Ocean Cards** | Auto-playing Swiper carousel introducing what the ocean holds |
| 🌊 **Ambient Section** | A breathing video interlude stitched together with animated wave dividers |
| 🐬 **Marine Life** | A responsive carousel of marine species with habitat, diet, and description |
| 💙 **Support** | A closing call-to-action inviting visitors to get involved |

## 🚀 Features

- **Cinematic video sections** — multiple looping, autoplaying background videos across the page
- **Scroll-driven motion** — entrance and parallax animations powered by `GSAP` + `ScrollTrigger`
- **Buttery smooth scrolling** — powered by [`Lenis`](https://lenis.darkroom.engineering/)
- **Animated SVG wave dividers** — seamless, infinitely-looping wave transitions between sections
- **Swipeable carousels** — auto-playing, responsive `Swiper` sliders for ocean and marine-life cards
- **Fully responsive** — breakpoints tuned from mobile up to large desktop
- **Utility-first styling** — built entirely with Tailwind CSS 4
- **Data-driven content** — marine life and ocean cards rendered from simple JSON files, easy to extend

## 🛠️ Tech Stack

| Layer | Tools |
|---|---|
| **Framework** | React 19 + Vite 8 |
| **Styling** | Tailwind CSS 4 |
| **Animation** | GSAP + `@gsap/react` (ScrollTrigger) |
| **Smooth Scroll** | Lenis |
| **Carousel** | Swiper |
| **Linting** | ESLint 10 |

## 📁 Project Structure

```
The-Ocen-main/
├── public/
│   ├── Hero-bg.mp4 / Hero-bg2.mp4      # Hero background videos
│   ├── hero-bg3.mp4
│   ├── section-bg.mp4 / section-bg2.mp4 # Ambient / support section videos
│   ├── icons.svg
│   └── favicon.svg
│
├── src/
│   ├── assets/                          # Static images
│   ├── component/
│   │   ├── common/
│   │   │   ├── Header.jsx               # Floating nav bar
│   │   │   ├── HeroMiddle.jsx           # Hero headline + copy
│   │   │   └── Wave1.jsx                # Animated SVG wave dividers (Wave1/2/3)
│   │   ├── Effects/
│   │   │   └── SmoothScroll.jsx         # Lenis smooth-scroll setup
│   │   ├── Home/
│   │   │   ├── Hero.jsx                 # Hero section
│   │   │   ├── Swiper.jsx               # Ocean cards section
│   │   │   ├── Section.jsx              # Ambient video interlude
│   │   │   ├── MarinLife.jsx            # Marine life section
│   │   │   └── Support.jsx              # Support section wrapper
│   │   ├── Swiper/
│   │   │   ├── OceanCardHeader.jsx      # "Dive Into The Blue" heading
│   │   │   └── ImageSlide.jsx           # Ocean cards carousel
│   │   ├── MarinLife/
│   │   │   ├── MarinLifeHeader.jsx      # "Life Under The Blue" heading
│   │   │   └── MarinLifeSlider.jsx      # Marine species carousel
│   │   ├── support/
│   │   │   └── SupportSection.jsx       # "Support The Ocean" call-to-action
│   │   └── data/
│   │       ├── OceanCard.json           # Ocean card content
│   │       └── MarinLife.json           # Marine species content
│   ├── App.jsx                          # Composes all sections
│   ├── App.css                          # Section + wave animation styles
│   ├── index.css                        # Tailwind entry + global resets
│   └── main.jsx                         # React entry point
│
├── index.html
├── vite.config.js
└── package.json
```

## ⚡ Getting Started

### Prerequisites

- **Node.js** (v18 or later recommended)
- **npm**

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/The-Ocean.git
cd The-Ocean

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## 🧩 Adding Content

Both carousels are driven by JSON, so adding a new card doesn't require touching any component code.

**Ocean Cards** — `src/component/data/OceanCard.json`
```json
{
  "title": "Coral Reefs",
  "description": "Vibrant underwater ecosystems teeming with life.",
  "image": "/path/to/image.jpg"
}
```

**Marine Life** — `src/component/data/MarinLife.json`
```json
{
  "id": 1,
  "name": "Great White Shark",
  "scientificName": "Carcharodon carcharias",
  "category": "Predator",
  "habitat": "Coastal Waters",
  "diet": "Carnivore",
  "shortDescription": "The ocean's most iconic apex predator.",
  "image": "/path/to/image.jpg"
}
```

## 🎨 Design Language

- **Palette** — deep ocean navy (`#00141f`), teal-blue accents (`#0099ff`, `#003b55`), and soft foam whites
- **Typography** — bold, wide-tracked uppercase for taglines; large serif-free headlines for impact
- **Motion** — everything enters from a hidden state and settles into place as you scroll, echoing the feel of drifting through water


<div align="center">

Made with 💙 for the ocean.

</div>
