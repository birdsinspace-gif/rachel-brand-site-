import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leverageAreas = [
    {
      title: "Clarify position",
      body: "Define a clear, differentiated position your team can actually use."
    },
    {
      title: "Sharpen messaging",
      body: "Create language that is clear, credible, and aligned with how the business actually operates."
    },
    {
      title: "Uncover insight",
      body: "Translate customer and category insight into strategic direction."
    },
    {
      title: "Align teams",
      body: "Give leadership and teams a shared understanding of what the brand stands for."
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

  return (
    <div className="min-h-screen bg-[#F8F6F2] text-[#1C1917]">

      {/* HERO */}
      <section className="border-b border-[#E7E0D6] overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-32 md:px-10">

          <motion.p
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            className="text-sm uppercase tracking-[0.28em] text-[#6B645C]"
          >
            Rachel Christopher
          </motion.p>

          <motion.h1
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
            className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl"
          >
            Brand strategy for organizations that have outgrown their current story.
          </motion.h1>

          <motion.p
            style={{ transform: `translateY(${scrollY * 0.12}px)` }}
            className="mt-8 max-w-2xl text-lg leading-8 text-[#57534E] md:text-xl"
          >
            Rachel Christopher helps leadership teams clarify their position, align internally, and move forward with confidence.
          </motion.p>

          <div className="mt-10 flex gap-4">
            <a
              href="#contact"
              className="rounded-2xl bg-[#3F4F3F] px-8 py-4 text-sm text-white hover:bg-[#354335]"
            >
              Book a Strategy Conversation
            </a>
          </div>
        </div>
      </section>

      {/* TRIGGER SECTION */}
      <section className="bg-[#F1ECE4]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-semibold">
            When to bring Rachel in
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {triggerPoints.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="rounded-xl border border-[#DED5C8] bg-white p-6"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE (NEW - THIS IS THE BIG UPGRADE) */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-3xl font-semibold">
          Selected experience
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="border border-[#E3DBCF] p-6 rounded-xl bg-white">
            Brand positioning for growth-stage organizations
          </div>
          <div className="border border-[#E3DBCF] p-6 rounded-xl bg-white">
            Messaging strategy across B2B and B2C categories
          </div>
          <div className="border border-[#E3DBCF] p-6 rounded-xl bg-white">
            Strategic support for internal teams and agencies
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-y border-[#E7E0D6] bg-[#FCFBF8]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-3xl font-semibold">
            Where strategy creates leverage
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {leverageAreas.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[#E3DBCF] bg-white p-8"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-[#57534E]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-3xl font-semibold">
          How she thinks
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {principles.map((p) => (
            <div key={p} className="p-6 border rounded-xl bg-white">
              {p}
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid md:grid-cols-[320px_1fr] gap-12 items-center">
          <img
            src="/rachel-headshot.jpg"
            className="rounded-xl"
          />

          <div>
            <h2 className="text-3xl font-semibold">
              About Rachel
            </h2>

            <p className="mt-6 text-[#57534E] leading-8">
              Rachel is a brand strategist with 15+ years of experience across B2B and B2C organizations. Her work focuses on helping leadership teams make clearer, more confident decisions about how they show up in the market.
            </p>

            <p className="mt-4 text-[#57534E] leading-8">
              She works directly with clients and alongside agencies. The goal is not more strategy, but better decisions.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#1F2A1F] text-white">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <h2 className="text-4xl font-semibold">
            Start with a conversation.
          </h2>

          <div className="mt-8">
            <a
              href="mailto:hello@rachelchristopher.com"
              className="bg-white text-black px-8 py-4 rounded-xl"
            >
              hello@rachelchristopher.com
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
