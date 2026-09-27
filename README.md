# ⚡ FitLog — Workout Library & Gym Companion

FitLog is a dark-themed, no-nonsense gym companion application built for modern athletes. The platform provides a complete workout library covering major muscle groups, allowing fitness enthusiasts to discover exercises, seamlessly build their daily routine under a structured log, track dynamic live metrics, and organize their fitness journey with zero friction.

🌐 **Live Deployment:** [Insert Your Vercel Live Link Here]
🐙 **GitHub Repository:** [Insert Your Repository Link Here]

---

## 🚀 Key Features

* **🏋️ Robust Workout Library Grid:** Displays all twelve foundational compound and isolation exercises inside a beautifully responsive `3x4` structural grid system, optimized with real-time skeleton loading states.
* **📊 Live Metrics Dashboard:** Features an analytical summary panel tracking total planned Exercises, total active Workout Minutes, and total estimated Calories. These values update dynamically in real time as items are toggled or modified.
* **📋 Multi-Channel Habit Queues (Today's Plan / Saved):** Dual-state architecture featuring a structural layout to commit exercises into "Today's Plan" or earmark configurations for future training modules within "Saved for Later".
* **⚡ Smart Guardrails & Caps:** Implements an intelligent 5-lift cap for the daily workout log to prevent overtraining, complemented by an interactive automated toggle checking system ("Mark as Done" / "Remove").
* **🔄 State Persistence & Sort Filters:** Features deep client-side data state persistence utilizing `localStorage` to survive page reloads alongside custom algorithmic array grouping dropdown arrays sorting workouts by Duration, Calories, or Rating.

---

## 🛠️ Technologies Used

### Core Architecture
* **Framework:** Next.js (App Router)
* **Language:** JavaScript / React

### Styling & UI Kits
* **Base Styles:** Tailwind CSS (Utility-First System)
* **Component Kit:** daisyUI
* **Icon Set:** Lucide React (for uniform vector anchors)

### State Management & Utilities
* **Persistent Storage:** Browser Web Storage API (`localStorage`)
* **Toasts Notification Engine:** React Hot Toast / React-Toastify
* **API Worker Hosting:** Cloudflare Workers Environment

---

## 📋 Standard Developer Commands

First, ensure dependencies are clean and up to date:
```bash
npm install
```

### Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) inside your local web browser to inspect the active application.

### Build Production Assets
Before deploying, execute a structural production build check:
```bash
npm run build
```

---

## 📍 API Specifications

The application directly consumes real-time structured data from a dedicated serverless worker endpoint:

* **Fetch All Workouts:** `GET https://api.abcz.workers.dev/api/fitlog`
* **Fetch Single Workout Details:** `GET https://api.abcz.workers.dev/api/fitlog/:id`

---

## ⚖️ Project License & Guidelines

Developed as an open-source evaluation requirement for the **Next-Level Web Development Program**. Maintained and authored under strict component matching parameters to achieve flawless desktop-to-mobile view conversions.
