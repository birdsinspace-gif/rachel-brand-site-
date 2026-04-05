export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
          Rachel Christopher
        </p>

        <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
          Brand strategy that creates clarity, alignment, and momentum.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-600">
          Rachel partners with organizations to define their position, sharpen
          their message, and turn insight into decisions teams can actually use.
        </p>

        <div className="mt-10">
          <a
            href="#contact"
            className="rounded-2xl bg-stone-900 px-8 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5"
          >
            Book a Strategy Conversation
          </a>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-semibold tracking-tight">
            What she helps organizations do
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold">Clarify position</h3>
              <p className="mt-3 text-stone-600">
                Define what makes the brand distinct, relevant, and credible in
                the market.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Sharpen messaging</h3>
              <p className="mt-3 text-stone-600">
                Build language that is clear, authentic, and aligned with how
                the business actually operates.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Uncover insight</h3>
              <p className="mt-3 text-stone-600">
                Translate customer and category insight into practical strategic
                direction.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Align teams</h3>
              <p className="mt-3 text-stone-600">
                Create clarity that helps leadership and teams move in the same
                direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-semibold tracking-tight">
          How she thinks about brand
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="p-6">
            <p className="text-stone-700">
              Strategy should be clear enough to use, not just admire.
            </p>
          </div>
          <div className="p-6">
            <p className="text-stone-700">
              Intuition defines who you are. Data sharpens how you connect.
            </p>
          </div>
          <div className="p-6">
            <p className="text-stone-700">
              The strongest brands align what they say with how they actually
              operate.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-semibold tracking-tight">
            A structured, practical approach
          </h2>

          <div className="mt-10 space-y-6">
            <div>
              <h3 className="font-semibold">01 | Clarify the challenge</h3>
              <p className="text-stone-600">
                Define the strategic question and what success needs to look
                like.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">02 | Uncover insight</h3>
              <p className="text-stone-600">
                Identify what matters most across customers, category, and
                internal perspective.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">03 | Shape the strategy</h3>
              <p className="text-stone-600">
                Translate insight into clear positioning and direction.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">04 | Activate</h3>
              <p className="text-stone-600">
                Equip teams with strategy they can actually apply.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-[300px_1fr]">
          <img
            src="/rachel-headshot.jpg"
            className="w-full rounded-2xl"
            alt="Rachel Christopher"
          />

          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              About Rachel
            </h2>

            <p className="mt-6 leading-8 text-stone-600">
              Rachel is a brand strategist with experience across B2B and B2C
              organizations, from nonprofits to technology and professional
              services. Her work focuses on bringing clarity to complex brand
              questions and translating strategy into practical direction.
            </p>

            <p className="mt-4 leading-8 text-stone-600">
              She works directly with clients and alongside agencies, acting as
              an extension of the team. The goal is not more strategy, but
              better decisions.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-stone-900 text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h2 className="text-4xl font-semibold">
            Start with a conversation
          </h2>

          <p className="mt-6 text-stone-300">
            If you need clearer positioning, sharper messaging, or a more
            aligned brand, Rachel can help.
          </p>

          <div className="mt-10">
            <a
              href="mailto:hello@rachelchristopher.com"
              className="rounded-2xl bg-white px-8 py-4 text-sm font-medium text-stone-900"
            >
              hello@rachelchristopher.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
