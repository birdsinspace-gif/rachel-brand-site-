const capabilities = [
  {
    title: 'Brand Positioning',
    description:
      'Define what makes a brand distinct, relevant, and credible in the market.'
  },
  {
    title: 'Customer Insights',
    description:
      'Translate research into sharp decisions about messaging, experience, and growth.'
  },
  {
    title: 'Messaging Strategy',
    description:
      'Build clear, authentic language that helps businesses sound like themselves, with purpose.'
  },
  {
    title: 'Workshop Facilitation',
    description:
      'Lead focused working sessions that align teams and move strategy from discussion to action.'
  }
];

const industries = [
  'Nonprofits',
  'Professional Services',
  'Healthcare',
  'Technology',
  'Manufacturing',
  'Consumer Goods',
  'Housing',
  'Retail'
];

const principles = [
  'Strategy should be clear enough to use, not just admire.',
  'Brand decisions should balance intuition, evidence, and business reality.',
  'The strongest brands align what they say with how they actually operate.'
];

const posts = [
  {
    title: 'When should data shape brand decisions?',
    body:
      'Use intuition to define who you are. Use data to sharpen how you connect. The goal is not picking one side, it is knowing which decisions require proof and which require conviction.'
  },
  {
    title: 'Is your brand on cruise control?',
    body:
      'Growth can hide drift. The best brands pause, reassess, and realign before momentum turns into confusion for teams and customers alike.'
  }
];

const processSteps = [
  {
    number: '01',
    title: 'Clarify the challenge',
    body: 'Define the strategic question, the business context, and what success needs to look like.'
  },
  {
    number: '02',
    title: 'Uncover insight',
    body: 'Use customer, category, and internal insight to reveal what matters most.'
  },
  {
    number: '03',
    title: 'Shape the strategy',
    body: 'Translate insight into clear positioning, messaging, and practical strategic guidance.'
  },
  {
    number: '04',
    title: 'Activate with confidence',
    body: 'Equip leadership and teams with strategy they can actually use in the real world.'
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <section className="relative overflow-hidden border-b border-stone-200 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(120,113,108,0.10),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(120,113,108,0.08),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:py-24">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-stone-500">
              Rachel Christopher, LLC
            </p>

            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-stone-900 md:text-6xl">
              Brand strategy that creates clarity, focus, and forward motion.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600 md:text-xl">
              Rachel Christopher helps organizations define their brand with precision, uncover actionable customer insight, and translate strategy into practical decisions that teams can actually use.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-2xl bg-stone-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5"
              >
                Book a Strategy Conversation
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-800 transition hover:border-stone-400 hover:bg-stone-100"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
                <p className="text-3xl font-semibold">15+</p>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  Years across strategy, research, and marketing leadership
                </p>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
                <p className="text-3xl font-semibold">B2B + B2C</p>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  Experience spanning complex service brands and consumer-facing organizations
                </p>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
                <p className="text-3xl font-semibold">Practical</p>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  Built for brands that need strategy to guide action, not sit on a shelf
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md lg:max-w-none">
            <div className="rounded-[2rem] border border-stone-200 bg-white p-4 shadow-[0_20px_60px_rgba(28,25,23,0.08)]">
              <div className="overflow-hidden rounded-[1.5rem] bg-stone-100">
                <img
                  src="/rachel-headshot.jpg"
                  alt="Rachel Christopher"
                  className="h-[540px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">About</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Analytical rigor, creative thinking, and strategy grounded in reality.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-stone-600">
            <p>
              Rachel is a freelance brand strategist who partners with businesses and organizations to clarify their position, sharpen their voice, and create customer-focused strategy that leads to real business outcomes.
            </p>
            <p>
              Her work spans brand positioning, consumer and category research, messaging strategy, brand architecture, and workshop facilitation. She works directly with clients and alongside agencies as an extension of the team, bringing senior-level strategic support without the overhead of a full-time hire.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">
              Core Services
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Strategic support for brands that need sharper direction.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {capabilities.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-8 shadow-sm"
              >
                <h3 className="text-2xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-stone-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-8 lg:grid-cols-3">
          {principles.map((principle) => (
            <div key={principle} className="rounded-[1.75rem] border border-stone-200 bg-white p-8 shadow-sm">
              <p className="text-lg leading-8 text-stone-700">{principle}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-stone-200 bg-stone-900 text-stone-100">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-400">
              Industry Experience
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Broad category experience, tailored strategic thinking.
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-2xl border border-stone-700 bg-stone-800 px-4 py-5 text-center text-sm font-medium text-stone-100"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">
              How She Works
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Collaborative, efficient, and built for momentum.
            </h2>
            <p className="mt-6 text-lg leading-8 text-stone-600">
              Rachel brings structure to complex brand questions, helping teams move from ambiguity to direction with confidence.
            </p>
          </div>
          <div className="space-y-5">
            {processSteps.map((step) => (
              <div key={step.number} className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-stone-900 px-3 py-2 text-sm font-semibold text-white">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="mt-2 text-base leading-7 text-stone-600">{step.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">
              Perspective
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Thoughtful brand leadership, communicated with clarity.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {posts.map((post) => (
              <div key={post.title} className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-8 shadow-sm">
                <h3 className="text-2xl font-semibold tracking-tight">{post.title}</h3>
                <p className="mt-4 text-base leading-7 text-stone-600">{post.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="rounded-[2rem] border border-stone-200 bg-stone-900 px-8 py-12 text-stone-100 shadow-[0_20px_60px_rgba(28,25,23,0.12)] md:px-12 md:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-400">Contact</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Need a strategic partner who can help your brand move with more clarity?
            </h2>
            <p className="mt-6 text-lg leading-8 text-stone-300">
              Rachel works with organizations that want practical brand strategy, thoughtful insight, and a clearer path forward.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:hello@rachelchristopher.com"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-stone-900 transition hover:-translate-y-0.5"
              >
                hello@rachelchristopher.com
              </a>
              <a
                href="https://www.linkedin.com/in/rachelchristopher"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-stone-600 px-6 py-3 text-sm font-medium text-white transition hover:border-stone-400 hover:bg-stone-800"
              >
                View LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
