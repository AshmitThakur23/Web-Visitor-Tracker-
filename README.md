# Web Visitor Tracker 🚀👀

Secure Google OAuth 2.0 login + automatic visitor logging (device, browser, IP/location) + a stylish animated UI. Built with Node.js and Express as a portfolio‑ready, production‑style template.

[Open the repo](https://github.com/AshmitThakur23/Web-Visitor-Tracker-) • Issues • PRs

![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-Server-000000?logo=express&logoColor=white)
![Passport](https://img.shields.io/badge/Passport-Google%20OAuth%202.0-34E27A?logo=passport&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-79.8%25-F7DF1E?logo=javascript&logoColor=black)
![HTML](https://img.shields.io/badge/HTML-10.7%25-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-9.5%25-1572B6?logo=css3&logoColor=white)

---

## Why this is impressive for recruiters/HR 🌟

- 🔐 Real OAuth 2.0 with sessions (shows security + auth skills).
- 🧭 Automatic analytics: device/browser/IP, timestamps, and routes.
- 🎨 Polished animated UI and clean UX.
- 🧰 Clear structure, logs directory, environment configs, and scripts.
- 📈 Designed to be extended to charts, dashboards, and databases.

---

## Visual Preview 🎥

<p align="center">
  <img src="./Screenshot%202025-10-23%20224623.png" alt="Landing with Google Sign-In" width="90%" />
  <br/>
  <em>Elegant landing page with Google Sign‑In and subtle animations.</em>
</p>

<p align="center">
  <img src="./Screenshot%202025-10-23%20224804.png" alt="Authenticated dashboard" width="90%" />
  <br/>
  <em>Authenticated dashboard after OAuth — shows profile and quick actions.</em>
</p>

<p align="center">
  <img src="./Screenshot%202025-10-23%20224813.png" alt="Visitor logs" width="90%" />
  <br/>
  <em>Visit logs: timestamp, user, device/browser, IP/location.</em>
</p>

<p align="center">
  <img src="./Screenshot%202025-10-23%20225750.png" alt="UI interactions and motion" width="90%" />
  <br/>
  <em>Refined interactions and motion for a modern, professional feel.</em>
</p>

## Tech at a glance 🛠️

- Backend: Node.js + Express
- Auth: Passport + Google OAuth 2.0
- UI: Vanilla HTML/CSS/JS with animations (served from `public/`)
- Logging: File‑based logs under `logs/` (easy to swap for DB)
- Config: `.env`

### Language composition
```mermaid
pie title Language split
  "JavaScript (79.8%)" : 79.8
  "HTML (10.7%)" : 10.7
  "CSS (9.5%)" : 9.5
```

---

## Architecture 🧭

```mermaid
flowchart LR
  A[Browser] -- Sign In --> B((Google OAuth 2.0))
  B --> C[Express + Passport]
  C -->|Create Session| D[Session Store]
  C -->|UA/IP Parse| E[Visitor Logger]
  E -->|Append| F[(logs/)]
  C --> G[Public UI]
```

- Middleware reads User‑Agent and IP (and can enrich with geolocation).
- Logs are append‑only files (rotate daily) and ready for analytics ingestion.

---

## Project structure 📁

```
Web-Visitor-Tracker-/
├─ logs/                   # Visit logs (append-only)
├─ node_modules/
├─ public/                 # Static UI (HTML/CSS/JS)
├─ src/                    # Express app, routes, auth, logger
├─ .env                    # Local environment variables
├─ README.md
├─ package.json
├─ package-lock.json
├─ Screenshot 2025-10-23 224623.png
├─ Screenshot 2025-10-23 224804.png
├─ Screenshot 2025-10-23 224813.png
└─ Screenshot 2025-10-23 225750.png
```

---

## Quick start 🚀

1) Clone and install
```bash
git clone https://github.com/AshmitThakur23/Web-Visitor-Tracker-.git
cd Web-Visitor-Tracker-
npm install
```

2) Create a Google OAuth Client
- Open the [Google Cloud Console](https://console.cloud.google.com/).
- Create OAuth 2.0 credentials (Web application).
- Authorized redirect URI (local):
  - http://localhost:3000/auth/google/callback

3) Configure `.env`
```dotenv
PORT=3000
SESSION_SECRET=super-secure-session-secret

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:3000/auth/google/callback
```

4) Run
```bash
# if dev script exists (nodemon)
npm run dev

# or standard start
npm start
```
Open http://localhost:3000 and sign in with Google.

---

## Core routes 🔌

- GET `/` — Landing page
- GET `/dashboard` — Protected (requires Google login)
- GET `/auth/google` — Start OAuth
- GET `/auth/google/callback` — OAuth callback
- GET `/logout` — End session and redirect

---

## Visit logging 📘

```mermaid
sequenceDiagram
  participant U as User
  participant S as Server (Express)
  participant L as Logger
  U->>S: Request (UA + IP)
  S->>S: Session check (Google OAuth)
  S->>L: Extract UA, device, browser, IP, path, method
  L->>L: Write to logs/visit-YYYY-MM-DD.log
  S-->>U: Response (UI / JSON)
```

Logged fields (typical):
- `timestamp`, `userId/email` (if authenticated)
- `ip`, `userAgent`, parsed `device`/`browser`
- `method`, `path`, optional geolocation

---

## Security notes 🔒

- Keep `SESSION_SECRET` strong and private.
- Never commit real secrets (.env) to Git.
- Use HTTPS and secure cookies in production.
- Add rate‑limits and input sanitization for public routes.

---

## What I built and learned 💡

- Implemented Google OAuth 2.0 with robust session handling.
- Built a clean logging pipeline suitable for dashboards/analytics.
- Designed an animated, responsive UI that feels modern and welcoming.
- Structured the project for maintainability and future growth.

---

## Roadmap 🗺️

- [ ] Built‑in charts (Chart.js) for visits over time, device mix
- [ ] Admin log viewer with search and filters
- [ ] Log rotation + centralized storage (MongoDB/Postgres/ClickHouse)
- [ ] Dockerfile + CI/CD + production reverse proxy (Nginx)
- [ ] IP geolocation via ipinfo/MaxMind

---

## Hire‑me highlights 🙋‍♂️

- Security‑aware authentication and session management
- Practical analytics mindset and clean data logging
- Strong UI polish + attention to detail
- Clear documentation and developer experience

---

## Contact

- Author: [Ashmit Thakur](https://github.com/AshmitThakur23)
- Repo: [Web Visitor Tracker](https://github.com/AshmitThakur23/Web-Visitor-Tracker-)

If you find this template helpful, please ⭐ the repository. It helps recruiters discover it too! ✨
