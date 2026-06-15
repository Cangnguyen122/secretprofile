import { motion } from "framer-motion";
import { Activity, AlertTriangle, ArrowRight, Fingerprint } from "lucide-react";
import { birthdayConfig } from "../../data/birthdayConfig";
import { SectionWrapper } from "../ui/SectionWrapper";

type SecretScanSectionProps = {
  onContinue: () => void;
};

export function SecretScanSection({ onContinue }: SecretScanSectionProps) {
  return (
    <SectionWrapper
      id="secret-scan"
      className="min-h-screen bg-slate-950 text-white"
      contentClassName="relative min-h-screen flex items-center"
    >
      <div className="absolute inset-x-4 top-12 h-40 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="relative grid w-full gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.24em] text-cyan-200">
            <Activity size={16} /> Phóng sự bước 02
          </p>
          <h2 className="mt-5 font-display text-3xl font-black leading-tight sm:text-5xl">
            Hệ thống đang quét mức độ đáng nghi của hai nhân vật chính.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
            Kết quả chỉ mang tính cà khịa, nhưng dữ liệu cho thấy vụ này không hề
            đơn giản.
          </p>

          <div className="mt-8 rounded-[26px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur">
            <div className="mb-3 flex items-center gap-3 text-emerald-200">
              <Fingerprint size={22} />
              <span className="text-sm font-black uppercase tracking-[0.24em]">
                Evidence status
              </span>
            </div>
            <p className="text-base font-semibold leading-7 text-slate-300">
              Đã xác nhận ngày sinh 17/06 và 19/06. Đã phát hiện dấu hiệu thân
              thiết vượt ngưỡng. Cần thêm một bài kiểm tra cuối cùng trước khi mở
              hồ sơ.
            </p>
          </div>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl sm:p-7">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-rose-300">
                Compatibility report
              </p>
              <h3 className="mt-1 text-2xl font-black">Báo cáo đáng nghi</h3>
            </div>
            <AlertTriangle className="text-amber-300" />
          </div>

          <div className="space-y-5">
            {birthdayConfig.scanStats.map((stat, index) => (
              <div key={stat.label}>
                <div className="mb-2 flex items-end justify-between gap-4">
                  <span className="font-semibold text-slate-100">{stat.label}</span>
                  <span className="text-right text-sm font-black text-emerald-200">
                    {stat.value}
                  </span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-slate-900/80">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-300 via-cyan-300 to-fuchsia-400"
                    initial={{ width: 0 }}
                    animate={{ width: `${stat.percent}%` }}
                    transition={{ delay: index * 0.08, duration: 0.85, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 rounded-2xl border border-red-300/25 bg-red-500/10 p-4 text-sm font-semibold leading-7 text-red-100">
            LỖI HỆ THỐNG: Hai đối tượng quá hợp, không thể xử lý bằng thuật toán
            thông thường.
          </div>

          <button
            type="button"
            className="mt-6 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-200 via-emerald-200 to-fuchsia-200 px-5 py-4 font-black text-slate-950 shadow-xl transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-cyan-100"
            onClick={onContinue}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onContinue();
              }
            }}
          >
            Chuyển sang bài kiểm tra cuối <ArrowRight size={19} />
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}
