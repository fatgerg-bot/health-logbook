# Health Logbook

A private health logbook web app for a few people. Each person keeps their own records — conditions, operations, medicines, allergies, symptoms, a daily diary, blood pressure, weight, periods, test results, letters, appointments and due dates —.

## What's on the overview

- **Today's check-in** — tap a face for how you feel, tap a symptom then a 1–10 score (saved with the time), log today's period flow, and see the last 7 days at a glance.
- **Cycle ring** — day of cycle, logged period days, expected next period, an estimated fertile window, average cycle and period length, and recent cycles. Hidden for anyone whose profile is set to Male.
- **Next appointment, due dates, compact test-result trends** (out-of-range results first), current medicines, ongoing conditions and recent symptoms.

Each person can use Claude to:

- read NHS App PDFs, screenshots and photos of letters and turn them into entries
- write a brief before an appointment
- review the whole history for patterns and things worth asking about
- explain letters, results and medical terms

## How it's put together

- **This repo** — one static page (`index.html`) served by GitHub Pages. No health data is ever stored here.
- **Supabase project `health-logbook`** (London) — logins, and a `docs` table where row-level security lets each person read and write only their own records.
- **Supabase server functions**
  - `setup` — creates the first administrator account (only works once).
  - `admin` — lets the administrator list, add, reset or remove people.
  - `claude` — holds the Claude API key (`ANTHROPIC_API_KEY` secret), checks the caller is a member, calls the Claude API and logs token use. Each person is limited to 150 Claude requests a day.

## Admin

Sign in as the administrator, then **About you, PIN, account and people → People** to add someone. They get a starting password to change later.

Claude API use is billed to the administrator's Anthropic account. Set a monthly spend limit in the Claude Console.

## Not medical advice

The app helps people keep track and prepare for appointments. In an emergency call 999; for urgent help that isn't an emergency call NHS 111.

## Updating

When you change `index.html`, bump the `app-version` meta tag at the top and add a line to `CHANGES` (shown as "What's new" after the update). Open apps check it each time they come to the front and reload themselves when it changes.
