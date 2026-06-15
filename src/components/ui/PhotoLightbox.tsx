import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import type { PhotoItem } from "../../data/birthdayConfig";

type PhotoLightboxProps = {
  photo: PhotoItem | null;
  categoryLabel?: string;
  onClose: () => void;
};

export function PhotoLightbox({ photo, categoryLabel, onClose }: PhotoLightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!photo) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    window.setTimeout(() => closeButtonRef.current?.focus(), 0);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [photo, onClose]);

  return (
    <AnimatePresence>
      {photo && (
        <motion.div
          className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Xem ảnh kỷ niệm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-4xl overflow-hidden rounded-[28px] border border-white/15 bg-white shadow-2xl"
            initial={{ scale: 0.96, y: 18 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: 18 }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              className="absolute right-3 top-3 z-10 grid h-11 w-11 place-items-center rounded-full bg-slate-950/70 text-white shadow-lg transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-white"
              onClick={onClose}
              aria-label="Đóng ảnh"
            >
              <X size={22} />
            </button>

            {photo.src ? (
              <img
                src={photo.src}
                alt={photo.alt}
                className="max-h-[72vh] w-full bg-slate-100 object-contain"
              />
            ) : (
              <div className="grid min-h-[48vh] place-items-center bg-[radial-gradient(circle_at_top_left,#fde68a,#f9a8d4_42%,#93c5fd)] p-8 text-center">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.32em] text-slate-900/60">
                    PHOTO_ITEMS
                  </p>
                  <p className="mt-3 text-3xl font-black text-slate-950">
                    Chỗ này chờ ảnh thật
                  </p>
                </div>
              </div>
            )}

            <div className="space-y-2 p-5 text-slate-900 sm:p-6">
              {categoryLabel && (
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-rose-500">
                  {categoryLabel}
                </p>
              )}
              <p className="text-lg font-semibold leading-relaxed">{photo.caption}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
