/**
 * Free Guides — short, copy-paste AI how-tos for the small operators this
 * site is actually for: retail, studios and clinics, cafés, e-commerce, and
 * service businesses running on spreadsheets and email. Each guide stands
 * alone (no email gate) and closes with an honest bridge to the $999 AI
 * Tools Assessment. Keep this list small and specific.
 */

export const GUIDE_TOPICS = [
    'Getting started',
    'Customer communication',
    'Quotes & proposals',
    'Operations',
];

export const GUIDES = [
    {
        slug: 'ai-setup-for-a-small-business',
        topic: 'Getting started',
        tool: 'Claude',
        title: 'The 5-minute AI setup I wish every small business started with',
        description: 'Sign up, one real prompt, four facts about your shop or studio. Do this once, before any of the other guides.',
        readTime: '5 min',
        intro: "I use Claude in my own work the same way I tell clients to: not as a magic trick, as a second brain for the repetitive writing and sorting that eats evenings. This is the whole setup. No coding, no course — five minutes on your phone.",
        steps: [
            {
                n: '01',
                eyebrow: 'sign up free',
                heading: 'Get Claude open on your phone',
                body: "Go to claude.ai and sign up with the email you actually check — memory and projects are tied to this account. The free plan is enough to start; upgrade later if you hit a wall, not before. Grab the mobile app while you're there so you can use it between customers, not only at a desk.",
            },
            {
                n: '02',
                eyebrow: 'copy this',
                heading: 'Your first real prompt',
                body: "Most people's first prompt is \"write me a caption.\" Try this instead — it gets Claude asking you questions instead of guessing:",
                copy: "I run a [shop / studio / café / clinic / service business] in Metro Vancouver. My biggest time-sink this week is [the thing — e.g. restocking, follow-ups, Monday numbers, booking confirmations]. Before you suggest anything, what should you ask me first so you actually understand how this business runs?",
            },
            {
                n: '03',
                eyebrow: 'the real unlock',
                heading: 'Teach it four facts about your business',
                body: 'Type "remember that..." followed by a fact, and Claude keeps it for every future chat. Paste these and fill the brackets — two minutes now saves you re-explaining yourself every time:',
                copy: "remember that I run a [type of business] in [neighbourhood / city] with [#] people\nremember that we are busiest [days / hours] and slowest [days / hours]\nremember that I already use [Shopify / Square / Jane / Mindbody / spreadsheets / email — whatever is true]\nremember that I hate long emails — keep replies short and specific",
            },
            {
                n: '04',
                eyebrow: 'make it stick',
                heading: 'Pick one weekly ritual',
                body: "Most people try AI once and forget it exists. Pick one thing you already do every week and do it with Claude for 7 days. Monday: paste last week's numbers and ask what needs attention. Before a supplier or landlord call, paste the thread and ask what to confirm. Friday: tell it what went sideways and ask what to change. After a week you'll spot your own uses — that's the whole trick.",
            },
        ],
        bridge: "This gets you comfortable with one tool. It does not tell you which 3–7 tools actually fit how your week runs — or whether you need AI at all versus a clearer view of numbers you already have. That's the assessment: one week, and if it cannot find 5+ hours back, you don't pay.",
    },
    {
        slug: 'do-you-need-ai-or-a-dashboard',
        topic: 'Getting started',
        tool: 'Multi-tool',
        title: 'Do you need AI — or just a clearer view of your numbers?',
        description: 'A 10-minute diagnostic I use on discovery calls. Honest answer first, tools second.',
        readTime: '6 min',
        intro: "Half the people who talk to me about AI do not have an AI problem. They have a visibility problem: the numbers exist, they live in five places, and nobody can see them in under a minute. I would rather tell you that on a free page than sell you a chatbot you will not open.",
        steps: [
            {
                n: '01',
                eyebrow: 'be honest',
                heading: 'Four questions I ask on a discovery call',
                body: "Answer these for your own business before you buy another app. (1) Can you tell me, right now, which product, class, or item is about to run out or sit too long? (2) Does that answer live in one screen, or in a spreadsheet plus a POS plus an inbox? (3) When something goes wrong — a stockout, a no-show, a quiet quote — how long until you notice? (4) Have you already paid for a tool your team abandoned? If 1 is no, 2 is 'five places,' and 3 is 'days later,' you do not need a language model first. You need the numbers in one place.",
            },
            {
                n: '02',
                eyebrow: 'copy this',
                heading: 'Let the export talk, not a hunch',
                body: "Export last week from Shopify, Square, Jane, or whatever you already use — even a messy spreadsheet is fine. Paste it after this prompt. You want a briefing, not a strategy essay:",
                copy: "Here is last week's export from my [Shopify / Square / POS / spreadsheet]. I run a [type of business] in Metro Vancouver. Do not give me generic advice. Tell me: (1) the 3 numbers I should actually look at on Monday, (2) anything that looks off or about to become a problem, (3) what you cannot tell from this export because the data is missing. Be blunt. Export:\n[paste]",
            },
            {
                n: '03',
                eyebrow: 'read the answer',
                heading: 'What the reply is really telling you',
                body: "If Claude can answer from the export, you already have the data — you just were not looking at it. The next step is a habit (this briefing every Monday) or a dashboard that surfaces the same alerts without a paste. If it says the data is missing or split across files, that is the real problem: the work is not 'get AI,' it is 'stop reconciling five tabs.' The inventory hub on the Proof page is the kind of thing I build when that is the case — stock, transfers, and reorders on one screen, not another chatbot.",
            },
            {
                n: '04',
                eyebrow: 'then decide',
                heading: 'When AI is actually the right next step',
                body: "AI is the right next step when the data is already visible and the leftover work is writing, sorting, or following up: review replies, quote drafts, reminder texts, a Monday summary you still type by hand. Those are the other guides on this page. If you are not sure which bucket you are in, that is what the assessment is for — I map the week with you and tell you which 3–7 tools are worth it, including 'none of these, you need a dashboard.' If I cannot find 5+ hours a week, you do not pay.",
            },
        ],
        bridge: "A free diagnostic gets you oriented. The assessment is the same conversation with your actual week on the table, a written report, and a guarantee. Start there if you want a second pair of eyes before you buy another tool.",
    },
    {
        slug: 'monday-briefing-from-a-messy-spreadsheet',
        topic: 'Operations',
        tool: 'Multi-tool',
        title: 'Turn last week’s numbers into a Monday briefing in 5 minutes',
        description: 'Paste a Shopify, Square, or spreadsheet export. Get the three things that actually need attention — not another dashboard you will not open.',
        readTime: '5 min',
        intro: "If Monday morning is you opening three tabs and hoping nothing important is hiding in them, this is the 5-minute version of that ritual. I built a full inventory hub for this exact pain when the numbers needed to live on one screen. Most weeks, a pasted export and a tight prompt is enough to start.",
        steps: [
            {
                n: '01',
                eyebrow: 'before you start',
                heading: 'Export one week, messy is fine',
                body: "From Shopify, Square, your POS, Jane, or the spreadsheet you already live in — export last week. You do not need it cleaned. Columns in the wrong order, extra rows, CAD mixed with notes: paste it anyway. The job is 'what needs a human this morning,' not a perfect model.",
            },
            {
                n: '02',
                eyebrow: 'copy this',
                heading: 'The Monday briefing prompt',
                body: 'Paste the export after this. Ask for a briefing you can read in under a minute:',
                copy: "I run a [retail shop / studio / café / clinic / e-commerce store] in Metro Vancouver. Turn this export into a Monday briefing with exactly three sections: (1) Needs attention today — stockouts, no-shows, quiet products, anything that will cost me money this week. (2) Fine to ignore — so I stop staring at it. (3) Missing data — what I cannot see from this file. Keep it under 200 words. No strategy. No pep talk. Export:\n[paste]",
            },
            {
                n: '03',
                eyebrow: 'copy this',
                heading: 'The "what should I actually reorder / restock" follow-up',
                body: "If the briefing flags products, ingredients, or retail SKUs, stay in the same chat and ask this. It only works if your export has quantities — if it does not, that is useful information too:",
                copy: "From that same export, list the 5 items I should restock or promote first this week, with one sentence why. If you do not have enough data to say, say so instead of guessing.",
            },
            {
                n: '04',
                eyebrow: 'make it a Monday habit',
                heading: 'Same prompt, every week — until the paste is the annoying part',
                body: "Save the prompt in a note on your phone. Monday: export, paste, read, act. If after a few weeks the annoying part is still gathering the file from five places, you have outgrown the paste — that is a visibility problem, not a prompting problem. That is when a simple operations view (the kind on the Proof page) is worth talking about, not another AI subscription.",
            },
        ],
        bridge: "A Monday paste saves an hour if the data is already in one export. If it is not, the assessment is where we map which 3–7 tools — or which one screen — would actually give you that hour back every week. 5+ hours found, or you don't pay.",
    },
    {
        slug: 'reply-to-google-reviews',
        topic: 'Customer communication',
        tool: 'Claude',
        title: 'Reply to every Google review without the blank-box stare',
        description: 'Three prompts — the 5-star, the fair complaint, and the unfair one — written for shops, studios, clinics, and cafés.',
        readTime: '4 min',
        intro: "Reviews sit unanswered because the reply feels like it needs the right words. In Metro Vancouver that box is often the first thing a new customer reads on Maps. It does not need a marketing team. It needs a prompt you can reuse in 30 seconds.",
        steps: [
            {
                n: '01',
                eyebrow: 'copy this',
                heading: 'The easy one — a good review',
                body: 'Paste the review after this. Specific beats corporate every time:',
                copy: "Write a short, genuine reply to this 5-star Google review for my [café / studio / clinic / shop] in [neighbourhood]. Thank them by name if given, mention something specific from their review, no generic 'thanks for your support.' Keep it under 60 words. Review: [paste review]",
            },
            {
                n: '02',
                eyebrow: 'copy this',
                heading: 'The fair complaint',
                body: "Wait time, a wrong order, a booking mix-up — this is the reply future customers actually read. Acknowledge the specific thing. Do not over-apologize, and do not make a promise you will not keep:",
                copy: "Write a reply to this Google review where the customer has a fair complaint. Acknowledge the specific issue without being defensive, briefly say what we are doing differently, and invite them to contact me directly (email or the number on our profile) to make it right. Keep it under 80 words. We are a small [type of business] in Metro Vancouver, not a chain. Review: [paste review]",
            },
            {
                n: '03',
                eyebrow: 'copy this',
                heading: 'The unfair one',
                body: "Wrong location, someone else's order, a review that is really about parking. Stay calm. Future customers are reading this too:",
                copy: "Write a calm, factual reply to this Google review. I believe [briefly state what's inaccurate]. Don't argue or get defensive — state the facts once, stay professional, and offer to discuss it directly. This reply will be public. Keep it measured and under 70 words. Review: [paste review]",
            },
            {
                n: '04',
                eyebrow: 'make it a habit',
                heading: 'Batch it once a month',
                body: "Once a month, open Google Business Profile, pull unanswered reviews, and run them through Claude in one sitting. Ten reviews is about ten minutes this way instead of never happening. Save the three prompts in a note named 'reviews' so you are not hunting for this page next time.",
            },
        ],
        bridge: "This fixes one leak. On a discovery call I usually find two or three more like it — quote follow-ups, booking reminders, the Monday numbers nobody compiled. The assessment finds all of them at once, and if it cannot find 5+ hours a week, you don't pay.",
    },
    {
        slug: 'write-a-quote-in-3-minutes',
        topic: 'Quotes & proposals',
        tool: 'Claude',
        title: 'Write a quote or proposal a client will actually read',
        description: 'For service businesses, custom orders, and memberships — turn messy notes into something you can send tonight.',
        readTime: '4 min',
        intro: "The gap between \"I know what to charge\" and \"I wrote it up properly\" is where quotes die at 9pm. Same problem if you sell custom orders, packages, or a studio membership and the follow-up email never goes out. This closes that gap.",
        steps: [
            {
                n: '01',
                eyebrow: 'before you start',
                heading: 'Have the rough notes ready',
                body: "You do not need a template. Jot the job or package, what's included, the price or range, timeline, and anything that is not included (rush fees, delivery, extra sessions). Messy bullets from your phone are enough.",
            },
            {
                n: '02',
                eyebrow: 'copy this',
                heading: 'The quote / proposal prompt',
                body: 'Paste your notes after this:',
                copy: "Turn these notes into a short quote/proposal I can paste into an email. I run a [service / studio / custom-order] business in Metro Vancouver. Keep it warm but businesslike, no jargon, easy to scan on a phone. Make the price obvious. Add a line about what is NOT included so there is no confusion later. End with one clear next step (reply, book, or pay the deposit). Notes: [paste]",
            },
            {
                n: '03',
                eyebrow: 'copy this',
                heading: 'The follow-up when it goes quiet',
                body: "For quotes sitting more than 3 days — a nudge, not a chase. In a small market, the same people talk:",
                copy: "Write a short, friendly follow-up email to a client who has not responded to a quote I sent 4 days ago for [job / package]. No pressure, just checking if they have questions. Mention the quote is valid until [date]. Keep it under 80 words, no guilt.",
            },
            {
                n: '04',
                eyebrow: 'save it',
                heading: 'Reuse your own voice, not a generic one',
                body: 'Once you like a quote Claude writes, stay in the same chat and say: "Save this structure as my quote template — use this layout every time I give you notes." Next time, paste new notes and ask for the same format. If you set up a Claude Project (see the setup guide), drop that instruction there so every new quote starts from your voice.',
            },
        ],
        bridge: "Quoting faster helps you close. It does not fix what happens after — scheduling, invoice chasing, the numbers living in five tabs. The assessment maps all of that in one week and tells you which 3–7 tools are actually worth your time.",
    },
    {
        slug: 'month-of-reminder-texts',
        topic: 'Customer communication',
        tool: 'Claude',
        title: 'Draft a month of booking reminders in one sitting',
        description: 'For studios, clinics, and any business where a no-show costs a slot — batch the texts once, stop rewriting them every afternoon.',
        readTime: '4 min',
        intro: "If you run classes, appointments, or tastings, you are probably typing some version of the same reminder every day. A no-show in a 4-person class or a 45-minute clinic slot is expensive. Batch the writing once.",
        steps: [
            {
                n: '01',
                eyebrow: 'gather this',
                heading: 'List the 3–6 reminders you actually send',
                body: "Typical set: class reminder, 24-hour appointment reminder, day-of, waitlist ping, 'we missed you' after a no-show. Write the list down. Do not invent extra ones you will not use.",
            },
            {
                n: '02',
                eyebrow: 'copy this',
                heading: 'The batch-draft prompt',
                body: 'Run this once per reminder type:',
                copy: "Write 3 short SMS templates for [reminder type — e.g. \"24-hour physio appointment reminder\" / \"day-before yoga class\" / \"café tasting reservation\"]. Placeholders: [name], [date], [time], [location if needed]. Tone: friendly, brief, easy to read on a phone. One version for 24 hours ahead and one for the day-of. No emoji overload. I am a small business in Metro Vancouver, not a chain.",
            },
            {
                n: '03',
                eyebrow: 'copy this',
                heading: 'The no-show / reschedule follow-up',
                body: "When someone misses a slot, you want them back without making it weird:",
                copy: "Write a short, no-blame SMS for a client who missed their [class / appointment / reservation] today. Offer 2 easy next steps to rebook. Keep it under 3 sentences. Do not guilt them and do not offer a discount unless I say so.",
            },
            {
                n: '04',
                eyebrow: 'save the set',
                heading: 'Put them where you already text from',
                body: "Save the finals as text-replacement shortcuts on your phone, or as canned responses in Jane, Mindbody, OpenTable, or whatever you already use. Fill in the brackets and send. If you are still copying from a Notes app into three different inboxes, that sprawl is exactly what an assessment is for — sometimes the fix is templates, sometimes it is connecting the tools you already pay for.",
            },
        ],
        bridge: "Templates fix the writing. They do not fix a calendar, a POS, and an inbox that do not talk to each other. If that is your week, the assessment maps it and tells you what to consolidate — 5+ hours a week found, or a full refund.",
    },
];

export const getGuideBySlug = (slug) => GUIDES.find((g) => g.slug === slug);

export const GUIDE_TOOLS = [...new Set(GUIDES.map((g) => g.tool))];
