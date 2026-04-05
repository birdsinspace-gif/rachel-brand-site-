export default function App() {
            </div>

          </div>
        </div>
      </section>


      {/* ABOUT (HEADSHOT HERE, NOT HERO) */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[300px_1fr] items-center">

          <img
            src="/rachel-headshot.jpg"
            className="rounded-2xl w-full"
            alt="Rachel Christopher"
          />

          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              About Rachel
            </h2>

            <p className="mt-6 text-stone-600 leading-8">
              Rachel is a brand strategist with experience across B2B and B2C organizations, from nonprofits to technology and professional services. Her work focuses on bringing clarity to complex brand questions and translating strategy into practical direction.
            </p>

            <p className="mt-4 text-stone-600 leading-8">
              She works directly with clients and alongside agencies, acting as an extension of the team. The goal is not more strategy, but better decisions.
            </p>
          </div>

        </div>
      </section>


      {/* CONTACT */}
      <section id="contact" className="bg-stone-900 text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">

          <h2 className="text-4xl font-semibold">
            Start with a conversation
          </h2>

          <p className="mt-6 text-stone-300">
            If you need clearer positioning, sharper messaging, or a more aligned brand, Rachel can help.
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
