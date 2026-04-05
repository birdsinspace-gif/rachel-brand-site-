import { motion } from "framer-motion";

export default function App() {
  const leverageAreas = [
    {
      title: "Clarify position",
      body: "Define a clear, differentiated position your team can actually use."
    },
    {
      title: "Sharpen messaging",
      body: "Create language that is clear, credible, and aligned with how the business truly operates."
    },
    {
      title: "Uncover insight",
      body: "Translate customer and category insight into strategic direction, not just observations."
    },
    {
      title: "Align teams",
      body: "Give leadership and internal teams a shared understanding of what the brand stands for."
    }
  ];

  const triggerPoints = [
    "Growth has outpaced clarity.",
    "Messaging no longer reflects the business.",
    "Teams are not aligned on what the brand stands for.",
    "You need sharper positioning before making bigger bets."
  ];

  const principles = [
    "Strategy should be clear enough to use, not just admire.",
    "Intuition defines who you are. Data sharpens how you connect.",
    "The strongest brands align what they say with how they actually operate."
  ];

  const processSteps = [
    {
      number: "01",
      title: "Clarify the challenge",
      body: "Define the strategic question, the business context, and what success needs to look like."
    },
    {
      number: "02",
      title: "Uncover insight",
      body: "Identify what matters most across customers, category, and internal perspective."
    },
    {
      number: "03",
      title: "Shape the strategy",
      body: "Translate insight into clear positioning, messaging, and direction."
    },
    {
      number: "04",
      title: "Activate",
      body: "Equip teams with strategy they can actually apply in the real world."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F6F2] text-[#1C1917]">
      <section className="border-b border-[#E7E0D6] overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-32">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium uppercase tracking-[0.28em] text-[#6B645C]"
          >
            Rachel Christopher
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl"
          >
            Brand strategy for organizations that have outgrown their current story.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-[#57534E] md:text-xl"
          >
            Rachel Christopher helps leadership teams clarify their position, align internally, and move forward with confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="rounded-2xl bg-[#3F4F3F] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#354335]"
            >
              Book a Strategy Conversation
            </a>
            <a
              href="#about"
              className="rounded-2xl border border-[#D9D1C5] px-8 py-4 text-sm font-medium text-[#1C1917] transition hover:bg-[#F1ECE4]"
            >
              About Rachel
            </a>
          </motion.div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
        className="bg-[#F1ECE4]"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#6B645C]">
              When to bring Rachel in
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Strategy becomes most valuable when momentum starts outrunning clarity.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {triggerPoints.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-[1.5rem] border border-[#DED5C8] bg-[#F8F6F2] px-6 py-6"
              >
                <p className="text-base leading-7 text-[#3F3A35]">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="border-y border-[#E7E0D6] bg-[#FCFBF8]"
      >
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#6B645C]">
              Where strategy creates leverage
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Clear thinking, translated into useful direction.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {leverageAreas.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="rounded-[1.75rem] border border-[#E3DBCF] bg-white p-8 shadow-[0_8px_30px_rgba(28,25,23,0.04)]"
              >
                <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-[#57534E]">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-6xl px-6 py-24 md:px-10"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#6B645C]">
            How she thinks
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            A practical view of brand.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {principles.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="rounded-[1.75rem] border border-[#E3DBCF] bg-white p-8 shadow-[0_8px_30px_rgba(28,25,23,0.04)]"
            >
              <p className="text-lg leading-8 text-[#3F3A35]">{item}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="border-y border-[#E7E0D6] bg-white"
      >
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#6B645C]">
                Process
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Structured enough to create clarity, flexible enough to fit the work.
              </h2>
            </div>

            <div className="space-y-5">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.28 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="rounded-[1.75rem] border border-[#E3DBCF] bg-[#FCFBF8] p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-[#3F4F3F] px-3 py-2 text-sm font-semibold text-white">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <p className="mt-2 text-base leading-7 text-[#57534E]">{step.body}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="about"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-6xl px-6 py-24 md:px-10"
      >
        <div className="grid items-center gap-12 md:grid-cols-[320px_1fr] md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/rachel-headshot.jpg"
              alt="Rachel Christopher"
              className="w-full rounded-[1.75rem] border border-[#E3DBCF] object-cover shadow-[0_12px_40px_rgba(28,25,23,0.06)]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#6B645C]">
              About Rachel
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Senior strategic thinking, applied in a practical way.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#57534E]">
              Rachel is a brand strategist with 15+ years of experience across B2B and B2C organizations. Her work focuses on helping leadership teams make clearer, more confident decisions about how they show up in the market.
            </p>

            <p className="mt-4 text-lg leading-8 text-[#57534E]">
              She works directly with clients and alongside agencies, bringing both analytical rigor and practical application. The goal is not more strategy, but better decisions.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#E3DBCF] bg-white p-5">
                <p className="text-2xl font-semibold">15+</p>
                <p className="mt-2 text-sm leading-6 text-[#57534E]">Years in strategy and marketing</p>
              </div>
              <div className="rounded-2xl border border-[#E3DBCF] bg-white p-5">
                <p className="text-2xl font-semibold">B2B + B2C</p>
                <p className="mt-2 text-sm leading-6 text-[#57534E]">Experience across varied categories</p>
              </div>
              <div className="rounded-2xl border border-[#E3DBCF] bg-white p-5">
                <p className="text-2xl font-semibold">Collaborative</p>
                <p className="mt-2 text-sm leading-6 text-[#57534E]">Works as an extension of the team</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="bg-[#1F2A1F] text-white"
      >
        <div className="mx-auto max-w-5xl px-6 py-24 text-center md:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#B7C2B2]">
            Contact
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Start with a conversation.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#D7DED3]">
            If you need clearer positioning, sharper messaging, or a more aligned brand, Rachel can help.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:hello@rachelchristopher.com"
              className="rounded-2xl bg-white px-8 py-4 text-sm font-medium text-[#1C1917] transition hover:bg-[#F1ECE4]"
            >
              hello@rachelchristopher.com
            </a>
            <a
              href="https://www.linkedin.com/in/rachelchristopher"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-[#5C6D5C] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2A362A]"
            >
              View LinkedIn
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
