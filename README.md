# ⚡ Institutional Crypto Analytics & Portfolio Dashboard

[![Build & Validation CI](https://github.com/omniversodigital/crypto-dashboard/actions/workflows/ci.yml/badge.svg)](https://github.com/omniversodigital/crypto-dashboard/actions)
[![React](https://img.shields.io/badge/React-19.2-61dafb?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.1-646cff?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Oxlint](https://img.shields.io/badge/Oxlint-High_Speed-orange)](https://oxc.rs/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A high-performance, responsive institutional cryptocurrency analytics and module monitoring dashboard built with **React 19**, **Vite**, and custom design tokens. Engineered by **Omniverso Digital** for sub-16ms render frames and zero layout shifts.

---

## 🏛️ Architecture & Component Hierarchy

```
src/
├── components/
│   ├── Dashboard.jsx         # Main analytical grid and metrics aggregator
│   ├── ModuleCard.jsx        # Telemetry cards for autonomous execution modules
│   ├── OrderbookView.jsx     # Live depth chart & spread visualization
│   └── PerformanceChart.jsx  # PnL progression and drawdowns
├── assets/                   # SVG icons and visual tokens
├── App.jsx                   # Root application shell
└── index.css                 # Curated CSS custom properties & dark-mode theme
```

---

## ⚡ Key Highlights

- **React 19 Concurrent Rendering**: Leveraging React 19's native action transitions and optimistic state updates.
- **Microsecond CSS Design System**: Custom HSL tailored dark-mode tokens with hardware-accelerated transforms for 60 FPS scrolling.
- **Live Trading Module Telemetry**: Real-time status cards monitoring SIMD vector engines, cross-rollup bundlers, and gasless paymasters.
- **Ultra-Fast Developer Experience**: Instant Hot Module Replacement (HMR) via Vite and Rust-powered linting via Oxlint.

---

## 🛠️ Quickstart Guide

### 1. Installation
```bash
git clone https://github.com/omniversodigital/crypto-dashboard.git
cd crypto-dashboard

npm install
```

### 2. Local Development
```bash
npm run dev
# Vite server starts at http://localhost:5173
```

### 3. Build & Lint
```bash
# Run lightning-fast Oxlint check
npm run lint

# Generate production build
npm run build
```

---

## 📄 License
MIT License © Omniverso Digital. All rights reserved.
