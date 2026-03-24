# Personal Portfolio — Next.js + TypeScript + Resend

A dark, editorial-styled personal portfolio with a working contact form powered by [Resend](https://resend.com).

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Email**: Resend
- **Forms**: React Hook Form + Zod validation
- **Animations**: CSS animations (+ Framer Motion ready)

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Copy the example file and fill in your values:

```bash
cp .env.local.example .env.local
```

Open `.env.local` and set:

```env
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=you@youremail.com
```

**Getting a Resend API key:**
1. Sign up at [resend.com](https://resend.com) (free tier: 3,000 emails/month)
2. Go to **API Keys** → **Create API Key**
3. Paste it into `.env.local`

> **Important**: On the free Resend plan, you can only send emails from `onboarding@resend.dev` until you verify a custom domain. To use your own domain, add it in the Resend dashboard under **Domains**, then update the `from` field in `src/app/api/contact/route.ts`.

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Customization Checklist

### Personal Info
- [ ] `src/app/layout.tsx` — Update `metadata` (title, description)
- [ ] `src/components/Navbar.tsx` — Update initials/logo
- [ ] `src/components/Hero.tsx` — Update headline, description, city, tech tags
- [ ] `src/components/About.tsx` — Update bio, stats, city
- [ ] `src/components/Projects.tsx` — Replace with your real projects
- [ ] `src/components/Skills.tsx` — Update skill levels and categories
- [ ] `src/components/Contact.tsx` — Update social links
- [ ] `src/components/Footer.tsx` — Update your name

### Profile Photo
Replace the placeholder in `About.tsx` with:
```tsx
<Image
  src="/your-photo.jpg"
  alt="Your Name"
  fill
  className="object-cover"
/>
```
Place the image in the `public/` folder.

### Resume
Add your `resume.pdf` to the `public/` folder to enable the resume link in the navbar.

### Email sender (Resend domain)
Once you've verified a domain in Resend, update the `from` field in `src/app/api/contact/route.ts`:
```ts
from: "Your Name <hello@yourdomain.com>",
```

---

## Deployment

### Vercel (recommended — zero config)

```bash
npm i -g vercel
vercel
```

Then add your environment variables in the Vercel project dashboard under **Settings → Environment Variables**.

### Other platforms
Build the production bundle:
```bash
npm run build
npm start
```

---

## Project Structure

```
src/
├── app/
│   ├── api/contact/route.ts   # Contact form API endpoint
│   ├── layout.tsx             # Root layout + fonts
│   ├── page.tsx               # Main page
│   └── globals.css            # Global styles + CSS variables
└── components/
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── About.tsx
    ├── Projects.tsx
    ├── Skills.tsx
    ├── Contact.tsx
    └── Footer.tsx
```
