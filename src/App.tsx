const capabilities = [
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
