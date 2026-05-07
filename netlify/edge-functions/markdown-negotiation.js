/**
 * Netlify Edge Function: Markdown Negotiation
 * RFC: https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/
 *
 * When a request arrives with Accept: text/markdown, returns a markdown
 * version of the homepage instead of HTML. Browsers receive HTML as normal.
 */

const MARKDOWN_CONTENT = `# Conversive — AI-Powered Patient Engagement & Care Conversations Platform

> Conversive helps healthcare providers deliver care 24/7 through AI-powered conversations across SMS, WhatsApp, voice, and email.

## What is Conversive?

Conversive is a leading Care Conversations AI platform purpose-built for healthcare. It enables providers to automate patient engagement while maintaining empathy, compliance, and personalization — reducing no-shows by up to 50% and converting prospects 4× faster.

## Key Capabilities

### Digital Front Desk
24/7 AI agents handle patient inquiries, triage requests, and route conversations — so your staff focuses on care, not admin.

### Appointment Booking & Reminders
Direct EHR-integrated scheduling with automated reminders sent via the patient's preferred channel (SMS, WhatsApp, voice).

### No-Show Handling
Proactive re-engagement workflows automatically reach patients who miss appointments and help them reschedule.

### Patient Intake
Secure pre-visit data collection via SMS or WhatsApp — forms completed before the patient walks in.

### Ongoing Care & Follow-Up
Post-visit check-ins, medication reminders, and care plan follow-through via automated conversation sequences.

### Reviews & Feedback
Automated patient satisfaction surveys with smart routing for positive reviews to Google/Healthgrades.

## Compliance
- HIPAA / HITECH compliant
- End-to-end encryption
- Audit logs and consent tracking
- SOC 2 aligned

## Who Uses Conversive?
- Hospitals and health systems
- Specialty clinics (dental, dermatology, orthopedics, mental health)
- Multi-site healthcare groups
- Independent practices

## Impact Metrics
- 50% reduction in no-shows
- 4× faster patient conversion
- 24/7 availability without additional staffing
- Multilingual support (50+ languages)

## Pages

- [Home](https://conversive.ai/) — Platform overview
- [Book a Demo](https://conversive.ai/demo.html) — Schedule a personalized 30-45 minute walkthrough
- [Blog](https://conversive.ai/blogs.html) — Healthcare AI insights and guides
- [LLMs.txt](https://conversive.ai/llms.txt) — Machine-readable site summary

## Contact

| Region | Phone |
|--------|-------|
| US | +1-888-568-1315 |
| UK | 0-808-189-1305 |
| Australia | 1-800-823-175 |
| India | 9240915633 |

- LinkedIn: https://www.linkedin.com/company/screen-magic-media/
- Platform login: https://app.beconversive.com
`;

export default async (request, context) => {
  const accept = request.headers.get("accept") || "";

  // Only intercept if client explicitly requests markdown
  if (!accept.includes("text/markdown")) {
    return context.next();
  }

  const tokenCount = MARKDOWN_CONTENT.split(/\s+/).filter(Boolean).length;

  return new Response(MARKDOWN_CONTENT, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "x-markdown-tokens": String(tokenCount),
      "Vary": "Accept",
      "Cache-Control": "public, max-age=3600",
    },
  });
};

export const config = { path: "/" };
