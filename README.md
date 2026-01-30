# Broadway Smiles Redesign

> **Note:** Some backend services (blog API) are legacy/deprecated. **Contact form submission still works** when environment variables are configured—it sends to the clinic and a confirmation copy back to the user.

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

### Backend / Fullstack

| Component | Purpose | Status |
|-----------|---------|--------|
| **Nodemailer** | Contact form → SMTP email delivery | ✅ Configure `SMTP_EMAIL`, `SMTP_PASSWORD` |
| **Contact form flow** | Submits to reception; sends confirmation copy to user | ✅ Works when SMTP env vars are set |
| **PostgreSQL** | *(Intended)* Database for form submissions, blog content | ❌ Not implemented |
| **reCAPTCHA** | Contact form bot protection | Optional; configure `RECAPTCHA_SECRET_KEY` + `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` |
| **External Blog API** | Fetches articles for `/blog` | ❌ Deprecated; blog uses hardcoded content |

---

## Contact Form Behavior

On successful submission:
1. **To clinic** — Email sent to `reception@broadwaysmiles.ca` with the form data
2. **To user** — Confirmation email sent to the submitter with a copy of their submission (sample of what was received)

## Environment Variables (Backend)

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
3. Copy `.env.example` to `.env.local` and add `SMTP_EMAIL` and `SMTP_PASSWORD` for contact form submission.
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
