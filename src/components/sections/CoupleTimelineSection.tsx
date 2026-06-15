import { CalendarHeart } from "lucide-react";
import { motion } from "framer-motion";
import { birthdayConfig } from "../../data/birthdayConfig";
import { SectionWrapper } from "../ui/SectionWrapper";

export function CoupleTimelineSection() {
  return (
    <SectionWrapper id="timeline" className="bg-[#fffaf0] text-slate-950">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-amber-200 px-4 py-2 text-sm font-black uppercase tracking-[0.22em] text-amber-950">
            <CalendarHeart size={16} /> Timeline
          </p>
          <h2 className="mt-5 font-display text-3xl font-black leading-tight sm:text-5xl">
            Dòng thời gian của hai nhân vật chính
          </h2>
        </div>

        <div className="relative grid gap-5 lg:grid-cols-4">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-rose-300 via-amber-300 to-cyan-300 lg:left-0 lg:right-0 lg:top-10 lg:mx-auto lg:block lg:h-px lg:w-[78%]" />
          {birthdayConfig.timelineItems.map((item, index) => (
            <motion.article
              key={item.date}
              className="relative rounded-[26px] border border-slate-900/8 bg-white p-5 shadow-xl shadow-amber-900/5"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
            >
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-rose-300 to-amber-300 text-lg font-black text-slate-950 shadow-lg">
                {index + 1}
              </div>
              <h3 className="font-display text-2xl font-black">{item.date}</h3>
              <p className="mt-3 leading-7 text-slate-700">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
