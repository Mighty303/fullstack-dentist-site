# Broadway Smiles Redesign

> **⚠️ Legacy Project — Not Functional**  
> This is a legacy codebase. Backend services (email, reCAPTCHA, blog API) are **no longer operational**. The frontend may run locally, but contact forms, blog content fetching, and other backend-dependent features will not work as intended.

Developed by [Martin Wong](https://github.com/Mighty303)

---

## Tech Stack

### Frontend

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS** + **DaisyUI**
- **Radix UI** (Dialog, Collapsible, Carousel)
- **Lucide React** (icons)
- **react-hook-form** + **Zod** (form validation)

### Backend / Fullstack (Legacy — Non-Functional)

| Component | Purpose | Status |
|-----------|---------|--------|
| **Nodemailer** | Contact form → SMTP email delivery | ❌ Requires `SMTP_EMAIL`, `SMTP_PASSWORD`; not configured |
| **PostgreSQL** | *(Intended)* Database for form submissions, blog content, or user data | ❌ Not implemented in codebase |
| **reCAPTCHA** | Contact form bot protection | Configure via `RECAPTCHA_SECRET_KEY` + `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` |
| **External Blog API** | Fetches articles for `/blog` via `NEXT_PUBLIC_API_BASE_URL` | ❌ API endpoint and auth token deprecated |

---

## Environment Variables (Backend)

For reference, these were required when the backend was active:

| Variable | Description |
|----------|-------------|
| `SMTP_EMAIL` | Gmail address for Nodemailer transport |
| `SMTP_PASSWORD` | Gmail app password |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | reCAPTCHA site key (client-side, public) |
| `RECAPTCHA_SECRET_KEY` | reCAPTCHA secret key (server-side only) |
| `NEXT_PUBLIC_API_BASE_URL` | External blog API base URL |

> Copy `.env.example` to `.env.local` and fill in your values. The reCAPTCHA secret key is found in [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin) and pairs with your site key.

---

## Project Structure (Backend-Relevant)

```
src/
├── app/api/
│   ├── email/route.js      # POST contact form → Nodemailer
│   └── verify-recaptcha/   # reCAPTCHA server-side verification
├── lib/
│   ├── mail.js             # Nodemailer transport (legacy helper)
│   └── validationSchema.js # Zod schemas for forms
```

---

## How to Run

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd BWS
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` or `.env.local` with any required variables (optional for local static pages).
4. Start the dev server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:5000](http://localhost:5000).

---

## Docker

- **Dockerfile**: Multi-stage build (deps → builder → runner), exposes port 5000.
- **docker-compose.yml**: Single service `app`, uses `.env`, includes healthcheck.

---

## DaisyUI Components Used

- [Carousel](https://daisyui.com/components/carousel/) — Team, Google reviews, Instagram sliders
- [Dropdown](https://daisyui.com/components/dropdown/) — Services nav bar
