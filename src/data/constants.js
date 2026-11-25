export const technologies = [
  {
    name: 'Javascript',
    yearStarted: 2019
  },
  {
    name: 'Python',
    yearStarted: 2022
  },
  {
    name: 'Vue',
    yearStarted: 2019
  },
  {
    name: 'React',
    yearStarted: 2022
  },
  {
    name: 'NextJS',
    yearStarted: 2022
  },
  {
    name: 'NodeJS',
    yearStarted: 2019
  },
  {
    name: 'FastAPI',
    yearStarted: 2022
  },
]

// Each project gets a page at /projects/<slug>. These write-up fields are optional;
// the page hides any section that is missing or empty:
//   problem, approach, learned: strings (blank lines split paragraphs)
//   tradeoffs: [{ decision, why, cost }]
//   relatedPosts: [{ title, url }]
export const projects = [
  {
    name: 'Account Manager',
    year: 2026,
    pitch: 'Builds income and expense records from the emails in your inbox.',
    projectRepo: 'https://github.com/OluwadaraDaily/account-manager',
    image: 'account-manager.png',
    demoVideo:
      'https://youtu.be/BmVjcJxScLs',
    techStack: ['Node.js', 'Typescript', 'React', 'SQLite'],
    slug: 'account-manager',
    problem:
      'Banks send an email alert for every transaction, but there is no easy way to turn those alerts into a record of income and expenses.',
    approach:
      'The app connects to Gmail with Google OAuth, finds bank alert emails, and parses each one into a transaction. You review the results, group them, and export them as CSV or XLSX. A React frontend talks to an Express backend, and both share TypeScript types for the API.',
    tradeoffs: [
      {
        decision: 'One hand-written parser per bank instead of an AI model',
        why: 'A parser gives the same answer every time, costs nothing per email, and has its own tests.',
        cost: 'Each new bank needs a new parser. Only Access Bank and Union Bank are supported today.'
      },
      {
        decision: 'Store the parsed transactions, never the raw emails',
        why: 'Bank emails hold personal details. Keeping only the fields the app needs limits what a leak could expose, and Google tokens are encrypted with AES-256-GCM.',
        cost: 'The original email isn\'t kept, so fixing a record a parser misread means importing it from Gmail again.'
      }
    ]
  },
  {
    name: 'Sermon Prep Tool',
    year: 2026,
    pitch: 'Helps preachers and teachers prepare sermons faster.',
    projectLink: 'https://sermonprep.oluwadaradaily.com/',
    projectRepo: 'https://github.com/OluwadaraDaily/sermon-prep',
    image: 'sermon-prep.png',
    demoVideo:
      'https://youtu.be/O7-Ptne99FQ',
    techStack: ['React', 'Typescript'],
    slug: 'sermon-prep',
    problem:
      'Sermon notes are full of Bible references, often abbreviated and written in different ways. Looking up each passage by hand and collecting them in one place is slow.',
    approach:
      'You paste your notes and the app finds every reference, including abbreviated book names, and normalizes it. It shows the passage text, suggests related passages from OpenBible cross-references, and exports the list as a PDF. All of this runs in the browser.',
    tradeoffs: [
      {
        decision: 'Bundle the Bible text with the app instead of calling a Bible API',
        why: 'Notes never leave the browser, the app works offline, and there are no API keys or rate limits.',
        cost: 'The verse data is about 4 MB, and there is only one translation, the public-domain World English Bible.'
      },
      {
        decision: 'Find references with a parser, not AI',
        why: 'A wrong reference changes the Scripture a preacher reads, so the result has to be predictable. A parser also costs nothing to run.',
        cost: 'An unusual way of writing a reference can slip past the parser where an AI model might catch it.'
      }
    ]
  },
  {
    name: 'Asset Processing Pipeline',
    year: 2025,
    pitch: 'Processes uploaded images, videos and other assets.',
    projectLink: 'https://asset-processing-pipeline-latest.onrender.com',
    projectRepo: 'https://github.com/OluwadaraDaily/asset-processing-pipeline',
    image: 'asset-processing-pipeline.png',
    demoVideo:
      'https://www.linkedin.com/posts/oluwadara-oloye_as-a-continuation-from-my-previous-post-activity-7409678919550779392-DE20?utm_source=share&utm_medium=member_desktop&rcm=ACoAACbQcbwBywqlBXG2ORfkgxsnpWUpLwzNrr4',
    techStack: ['Laravel', 'PHP', 'Vue', 'Docker', 'PostgreSQL'],
    slug: 'asset-processing-pipeline',
    problem:
      'Resizing a large image during the upload request makes the upload slow and can time it out.',
    approach:
      'The app saves the upload first, then a Laravel queue job resizes the image with Intervention Image. When the job finishes or fails, the server broadcasts an event through Laravel Reverb and the Vue frontend shows the new status.',
    tradeoffs: [
      {
        decision: 'Resize in a queue job instead of during the upload request',
        why: 'The upload returns right away, and a failed resize retries up to three times without the user uploading again.',
        cost: 'There is more to run: a queue worker, a WebSocket server, and job states the UI has to show.'
      },
      {
        decision: 'Run everything in one Docker container',
        why: 'Supervisor starts nginx, PHP-FPM, the queue worker and Reverb together, so the app deploys as one Render service.',
        cost: 'The parts can\'t scale separately. A batch of large resizes competes with web requests for the same CPU and memory.'
      }
    ]
  },
  {
    name: 'Call Me Reminder',
    year: 2026,
    pitch: 'Reminds you to make the calls you planned.',
    projectLink: 'https://cmr-fe.oluwadaradaily.com/',
    projectRepo: 'https://github.com/OluwadaraDaily/call-me-reminder',
    image: 'call-me-reminder.png',
    demoVideo: 'https://www.loom.com/share/8d1f2580f4ab46849ac82f9ded1bd6e4',
    techStack: ['FastAPI', 'React', 'NextJS', 'SQLite', 'PostgreSQL'],
    slug: 'call-me-reminder',
    problem:
      'A notification is easy to swipe away. A phone call is harder to ignore.',
    approach:
      'You schedule a reminder with a message and a phone number in a Next.js dashboard. A FastAPI backend checks for due reminders and uses Vapi Voice AI to call you and read the message.',
    tradeoffs: [
      {
        decision: 'Poll the database every 60 seconds instead of scheduling a job per reminder',
        why: 'The database is the only source of truth, so reminders survive a restart. Each reminder is claimed with an atomic update, so two workers can\'t call the same person twice.',
        cost: 'A call can come up to a minute off the set time, and the database is queried every minute even when nothing is due.'
      },
      {
        decision: 'Use Vapi for calls instead of building on a telephony API directly',
        why: 'Vapi handles the voice and the phone call in one API, so the backend only sends the message and the number.',
        cost: 'Every call costs money per minute, and the app depends on one vendor.'
      }
    ]
  },
  {
    name: 'My Finance App',
    year: 2025,
    pitch: 'Tracks your personal finances.',
    projectLink: 'https://my-finance-ui.vercel.app/dashboard',
    projectRepo: 'https://github.com/OluwadaraDaily/my-finance-ui',
    image: 'my-finance-app.png',
    demoVideo: 'https://www.youtube.com/watch?v=RLaNpG0Y0-k',
    techStack: ['FastAPI', 'React', 'NextJS', 'TailwindCSS'],
    slug: 'my-finance-app',
    problem:
      'Tracking money usually means switching between a banking app, a spreadsheet and notes. My Finance puts transactions, budgets, recurring bills and savings pots on one dashboard.',
    approach:
      'A Next.js frontend talks to a separate FastAPI backend through one shared Axios client. The backend stores data in MySQL and manages the schema with Alembic migrations.',
    tradeoffs: [
      {
        decision: 'Keep the UI and the API in separate repos and deployments',
        why: 'The API has its own tests and migrations, and another client could use it later.',
        cost: 'Two deployments to keep in step, plus tokens and CORS across two origins.'
      },
      {
        decision: 'Keep the access token in a cookie that JavaScript can read',
        why: 'The Axios client reads it and sends it as a Bearer token to the API on another host.',
        cost: 'A cross-site scripting bug could steal the access token. The longer-lived refresh token is httpOnly to limit the damage.'
      }
    ]
  },
  {
    name: 'Audiophile',
    year: 2024,
    pitch: 'Online store for audio equipment.',
    projectLink: 'https://audiophiled.netlify.app/',
    projectRepo: 'https://github.com/OluwadaraDaily/audiophile-ui',
    image: 'audiophile.png',
    techStack: ['Vue', 'Pinia', 'Composition API', 'Node', 'Knex', 'Express'],
    slug: 'audiophile',
    problem:
      'Audiophile is an online store for headphones, speakers and earphones. It needed product pages, a cart and a checkout flow that work on phones and desktops.',
    approach:
      'The Vue 3 frontend uses Pinia for the cart, billing and shipping state, and Vue Router for pages. A separate Express API uses Knex migrations and MySQL and runs in Docker.',
    tradeoffs: [
      {
        decision: 'Keep the cart in localStorage',
        why: 'Shoppers can add items without an account, and the cart survives a page reload.',
        cost: 'The cart stays on one browser. The API has cart tables, but the UI doesn\'t use them.'
      },
      {
        decision: 'Ship the product data with the frontend',
        why: 'Pages load without waiting on an API call, and the store keeps working if the API is down.',
        cost: 'Changing a price or adding a product means deploying the frontend again.'
      }
    ]
  }
]