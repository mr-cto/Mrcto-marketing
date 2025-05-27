# Mrcto Marketing

This project was scaffolded without internet access. It sets up a basic **Next.js** app using the modern `app/` router, **TypeScript**, and **Tailwind CSS**.

The site promotes responsible AI adoption for enterprises and small businesses. It includes a home page with a short overview and a services page describing how we can help with data protection, workflow integration, telemetry and ROI projections.

**Disclaimer:** Generative AI can produce incorrect or misleading content, so results should always be reviewed by humans.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app. The home page displays a heading styled with Tailwind to confirm the setup is working.

## Contact form and Slack integration

A `/contact` page allows visitors to send inquiries that are posted to a Slack channel via an incoming webhook. Set `SLACK_WEBHOOK_URL` in a `.env.local` file with your Slack webhook URL.

When an inquiry arrives after business hours you can configure Slack workflows or third–party automations (e.g. Twilio or SendGrid) to email or text the visitor directly. The API endpoint at `/api/contact` can be extended with additional fetch calls to your messaging service of choice.

To enable a floating "Chat with us" button set `NEXT_PUBLIC_SLACK_CHAT_URL` to your workspace invite or channel link. Visitors who click it will be taken directly to Slack for real‑time messaging.
