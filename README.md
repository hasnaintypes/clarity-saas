# Clarity

A SaaS platform for collecting, processing, and analyzing user feedback at scale. Clarity combines embeddable feedback widgets, a drag-and-drop form builder, AI-powered processing, and real-time analytics into a single product.

## Features

- **Drag-and-Drop Form Builder** -- Visual editor with conditional logic, multi-step flows, field validation, and real-time preview
- **Smart Feedback Processing** -- AI-powered spam filtering, sentiment analysis, topic extraction, and auto-categorization
- **Advanced Analytics** -- Real-time dashboards with NPS tracking, sentiment trends, and exportable reports
- **Multi-Language Support** -- Automatic language detection and translation for forms and responses
- **Customizable Templates** -- Pre-built NPS, star rating, CSAT, contact, poll, and feedback templates
- **Embeddable Widgets** -- Script tag, iframe, and React component embeds with popup, slide-in, and inline modes
- **Team Collaboration** -- Role-based workspaces, response assignment, internal notes, and tagging
- **Workflow Automation** -- Trigger-based rules for notifications, assignments, and third-party integrations
- **API and Webhooks** -- RESTful API with OpenAPI spec and real-time webhook events
- **White-Label Branding** -- Custom domains, colors, fonts, and removal of Clarity branding
- **GDPR Compliant** -- Consent management, data retention policies, IP anonymization, and right-to-erasure support

## Tech Stack

| Layer            | Technology                                     |
| ---------------- | ---------------------------------------------- |
| Framework        | Next.js 16 (App Router)                        |
| Language         | TypeScript 5                                   |
| UI               | React 19, Tailwind CSS 4, shadcn/ui            |
| Forms            | React Hook Form, Zod 4                         |
| Charts           | Recharts 3                                     |
| Icons            | Lucide React                                   |
| Theming          | next-themes                                    |

## Getting Started

```bash
git clone https://github.com/hasnaintypes/clarity-saas.git
cd clarity-saas
npm install
npm run dev
```

Requires Node.js 20+ and npm 10+. The dev server starts at `http://localhost:3000`.

## Project Structure

```
app/
  layout.tsx              Root layout with theme provider
  page.tsx                Landing page
components/
  landing-page/           Marketing site sections (navbar, hero, features, pricing, CTA, footer)
  ui/                     shadcn/ui component library
  theme-provider.tsx      Light/dark/system theme management
content/                  Static content data
hooks/                    Custom React hooks
lib/                      Utility functions
types/                    TypeScript type definitions
```

## Scripts

| Command         | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Start development server          |
| `npm run build` | Create optimized production build |
| `npm start`     | Serve production build            |
| `npm run lint`  | Run ESLint                        |

## Environment Variables

Create a `.env.local` file in the project root. Required variables will be documented as integrations are implemented.

## Deployment

Designed for Vercel (zero-config), but works with any Node.js hosting platform including Docker, AWS, GCP, and Azure.

## License

Proprietary. Not licensed for public use, modification, or distribution. All rights reserved.

---

This project is under active development. See [FEATURES.md](./FEATURES.md) for the full feature specification.
