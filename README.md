# Ekagrah Foundation Website

![Live Status](https://img.shields.io/badge/Status-Live-success.svg)
![Tech Stack](https://img.shields.io/badge/Stack-Next.js%20%7C%20Tailwind%20%7C%20Framer%20Motion-blue.svg)

Welcome to the official repository for the **Ekagrah Foundation** website. This is a modern, fast, and fully responsive web application designed with a bold "brutalist" aesthetic to showcase the foundation's core programs, share real-world impact stories, and seamlessly accept donations.

🌐 **Live URL:** [https://ekagrah-foundation.web.app](https://ekagrah-foundation.web.app)

---

## 🚀 Key Features

* **Bold & Elegant Design:** Built with a clean, brutalist-inspired UI, utilizing smooth micro-interactions.
* **Animated UI:** Rich, scroll-driven animations powered by Framer Motion.
* **Impact & Programs Showcases:** Dedicated dynamically routed pages (`/impact/[slug]`, `/programs/[slug]`) to deeply explore the foundation's work.
* **Smart Donation Flow:** Pre-fills donation context based on the program users navigate from (e.g., `?type=education`).
* **Static Export:** Fully optimized for static hosting via Firebase.

## 🛠️ Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) 16 (App Router)
* **Language:** TypeScript
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/)
* **Hosting:** [Firebase Hosting](https://firebase.google.com/docs/hosting)

---

## 💻 Local Development

Follow these steps to run the application locally on your machine.

### Prerequisites

* Node.js 18.x or later installed.
* npm or yarn package manager.

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Shaurya8008/Ekagrah-website.git
   cd Ekagrah-website/ekagrah-foundation
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **View the application:**
   Open [http://localhost:3000](http://localhost:3000) in your web browser.

---

## 📂 Project Structure

```text
ekagrah-foundation/
├── src/
│   ├── app/           # Next.js App Router pages & API routes
│   ├── components/    # Reusable UI elements (Buttons, Cards, Animations)
│   ├── data/          # Mock database / Static JSON records (Programs, Stories)
│   ├── hooks/         # Custom React hooks (e.g., useCountUp, useInView)
│   ├── lib/           # Utilities and configuration (e.g., Firebase, Utils)
│   └── types/         # Global TypeScript definitions
├── public/            # Static assets (Images, SVG icons)
├── firebase.json      # Firebase Hosting configuration
└── next.config.ts     # Next.js configuration (set to output: 'export')
```

---

## 🚢 Deployment

This project is configured to be statically exported and hosted on Firebase Hosting.

1. **Build the application:**
   ```bash
   npm run build
   ```
   *This generates an optimized static bundle in the `out/` directory.*

2. **Deploy to Firebase:**
   ```bash
   npx firebase-tools deploy --only hosting
   ```
   *(Ensure you are logged in using `npx firebase-tools login` and have an active project selected via `npx firebase-tools use` before deploying).*
