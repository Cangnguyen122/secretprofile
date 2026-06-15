import { AnimatePresence, motion } from "framer-motion";
import { LockOpen, MousePointerClick, ShieldCheck } from "lucide-react";
import { useRef, useState } from "react";
import { birthdayConfig } from "../../data/birthdayConfig";
import { GlitchText } from "../ui/GlitchText";

const maxDodges = 4;

type RunawayButtonRevealSectionProps = {
  onUnlocked: () => void;
};

export function RunawayButtonRevealSection({ onUnlocked }: RunawayButtonRevealSectionProps) {
  const playgroundRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [dodges, setDodges] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [unlocked, setUnlocked] = useState(false);

  const canDodge = dodges < maxDodges;
  const buttonText = canDodge ? "Mở hồ sơ tuyệt mật" : "Rồi bấm đi, cho xem thật nè.";
  const activeSticker = dodges > 0 ? birthdayConfig.runawayStickers[dodges - 1] : null;

  function dodgeButton() {
    if (!canDodge || !playgroundRef.current) return;

    const rect = playgroundRef.current.getBoundingClientRect();
    const buttonRect = buttonRef.current?.getBoundingClientRect();
    const buttonWidth = buttonRect?.width ?? 340;
    const buttonHeight = buttonRect?.height ?? 64;
    const safePadding = 28;
    const maxX = Math.max(0, rect.width / 2 - buttonWidth / 2 - safePadding);
    const maxY = Math.max(0, rect.height / 2 - buttonHeight / 2 - safePadding);
    const nextIndex = dodges + 1;
    const angle = -0.7 + nextIndex * 1.85;
    const radiusX = Math.min(maxX, 86 + nextIndex * 58);
    const radiusY = Math.min(maxY, 52 + nextIndex * 38);

    setPosition({
      x: Math.cos(angle) * radiusX,
      y: Math.sin(angle) * radiusY,
    });
    setDodges(nextIndex);
  }

  function handleClick() {
    if (canDodge) {
      dodgeButton();
      return;
    }

    setPosition({ x: 0, y: 0 });
    setUnlocked(true);
    onUnlocked();

    window.setTimeout(() => {
      document.getElementById("emotional-reveal")?.scrollIntoView({ behavior: "smooth" });
    }, 1100);
  }

  return (
    <section
      id="runaway"
      className="relative flex min-h-screen flex-col overflow-hidden bg-[#101624] px-4 py-6 text-white sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(236,72,153,0.22),transparent_32%),radial-gradient(circle_at_82%_8%,rgba(56,189,248,0.18),transparent_30%),linear-gradient(145deg,#101624,#182233)]" />
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col">
        <header className="grid gap-4 pt-4 text-center sm:pt-8">
          {/* <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-fuchsia-300/25 bg-fuchsia-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-fuchsia-100 sm:text-sm">
            <MousePointerClick size={16} /> Kiểm tra kiên nhẫn
          </p> */}
          <h2 className="mx-auto max-w-4xl font-display text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Bạn có chắc muốn mở hồ sơ sinh nhật tuyệt mật không?
          </h2>
        </header>

        <div
          ref={playgroundRef}
          className="relative mt-6 min-h-[62vh] flex-1 overflow-hidden rounded-[34px] border border-white/12 bg-slate-950/34 shadow-2xl ring-1 ring-white/8 sm:mt-8"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <span className="pointer-events-none absolute left-4 top-4 h-11 w-11 rounded-tl-3xl border-l border-t border-cyan-100/35" />
          <span className="pointer-events-none absolute right-4 top-4 h-11 w-11 rounded-tr-3xl border-r border-t border-cyan-100/35" />
          <span className="pointer-events-none absolute bottom-4 left-4 h-11 w-11 rounded-bl-3xl border-b border-l border-cyan-100/35" />
          <span className="pointer-events-none absolute bottom-4 right-4 h-11 w-11 rounded-br-3xl border-b border-r border-cyan-100/35" />

          <div className="absolute inset-0 grid place-items-center px-6 py-8">
            <motion.button
              ref={buttonRef}
              type="button"
              className="inline-flex min-h-14 w-[min(72vw,330px)] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-300 via-rose-300 to-fuchsia-400 px-6 py-4 text-center font-black text-slate-950 shadow-glow transition focus:outline-none focus:ring-4 focus:ring-amber-200"
              animate={position}
              transition={{ type: "spring", stiffness: 260, damping: 22, mass: 0.76 }}
              onClick={handleClick}
            >
              <LockOpen size={19} />
              {buttonText}
            </motion.button>
          </div>
        </div>

        <div className="pointer-events-none relative z-10 mx-auto mt-4 flex min-h-[104px] w-full max-w-4xl items-center justify-center">
          <AnimatePresence mode="wait">
            {dodges > 0 && !unlocked && activeSticker && (
              <motion.div
                key={dodges}
                className="flex w-full max-w-3xl items-center gap-3 rounded-[28px] border border-white/14 bg-slate-950/72 p-3 pr-5 text-left shadow-2xl backdrop-blur-md sm:gap-5 sm:p-4 sm:pr-6"
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
              >
                <motion.img
                  key={activeSticker.src}
                  src={activeSticker.src}
                  alt={activeSticker.alt}
                  className="h-20 w-20 shrink-0 select-none object-contain drop-shadow-2xl sm:h-24 sm:w-24"
                  draggable={false}
                  initial={{ rotate: -10, scale: 0.72 }}
                  animate={{ rotate: 4, scale: 1 }}
                  transition={{ type: "spring", stiffness: 360, damping: 18 }}
                />
                <div className="min-w-0">
                  <span className="inline-flex rounded-full bg-amber-300 px-3 py-1 text-sm font-black text-slate-950">
                    {dodges}/{maxDodges}
                  </span>
                  <p className="mt-2 text-base font-black leading-7 text-amber-100 sm:text-lg">
                    {birthdayConfig.runawayMessages[dodges - 1]}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {unlocked && (
          <motion.div
            className="absolute inset-0 z-20 grid place-items-center bg-slate-950/94 p-5 text-center backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="max-w-2xl">
              <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-emerald-300 text-slate-950 shadow-neon">
                <ShieldCheck size={30} />
              </div>
              <p className="font-display text-4xl font-black text-emerald-200 sm:text-6xl">
                <GlitchText>TRUY CẬP THÀNH CÔNG</GlitchText>
              </p>
              <p className="mt-5 text-lg font-semibold leading-8 text-slate-200">
                Bạn vừa vượt qua bài kiểm tra kiên nhẫn. Hồ sơ chính thức được mở.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
