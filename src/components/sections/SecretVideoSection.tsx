import { Lock, PlayCircle, ShieldCheck, XCircle } from "lucide-react";
import { useState } from "react";
import { SectionWrapper } from "../ui/SectionWrapper";

type SecretVideoResponse = {
  url?: string;
  error?: string;
};

export function SecretVideoSection() {
  const [code, setCode] = useState("");
  const [secretUrl, setSecretUrl] = useState("");
  const [error, setError] = useState("");
  const [isChecking, setIsChecking] = useState(false);

  async function unlockSecretVideo() {
    const trimmedCode = code.trim();

    if (!trimmedCode) {
      setError("Nhập mật mã đã rồi mới mở hồ sơ nha.");
      return;
    }

    setIsChecking(true);
    setError("");

    try {
      const response = await fetch("/api/secret-video", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: trimmedCode }),
      });

      const data = (await response.json()) as SecretVideoResponse;

      if (!response.ok || !data.url) {
        setError(data.error || "Sai mật mã rồi, hồ sơ vẫn đang được niêm phong.");
        setSecretUrl("");
        return;
      }

      setSecretUrl(data.url);
      setError("");
    } catch {
      setError("Không mở được hồ sơ bí mật. Thử lại một lần nữa nha.");
      setSecretUrl("");
    } finally {
      setIsChecking(false);
    }
  }

  return (
    <SectionWrapper id="secret-video" className="bg-[#100b1f] text-white">
      <div className="relative mx-auto max-w-5xl text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-rose-200/20 bg-rose-200/10 px-4 py-2 text-sm font-black uppercase tracking-[0.24em] text-rose-100">
          <Lock size={16} />
          Secret archive
        </p>

        <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl font-black leading-tight sm:text-5xl">
          Hồ sơ bí mật chỉ dành riêng cho hai bạn
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-rose-100/78">
          Muốn mở đoạn video cuối cùng thì phải nhập đúng mật mã. Không đúng là hồ sơ tự niêm phong lại đó nha.
        </p>

        <div className="mx-auto mt-8 max-w-xl rounded-[30px] border border-white/12 bg-white/8 p-5 shadow-2xl shadow-rose-500/10 backdrop-blur sm:p-7">
          {!secretUrl ? (
            <>
              <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-rose-500/20 text-rose-100">
                <ShieldCheck size={30} />
              </div>

              <label className="block text-left text-sm font-black uppercase tracking-[0.2em] text-rose-100/80">
                Nhập mật mã
              </label>

              <input
                type="password"
                value={code}
                onChange={(event) => setCode(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    void unlockSecretVideo();
                  }
                }}
                placeholder="Ví dụ: ngày sinh hoặc mật mã riêng"
                className="mt-3 w-full rounded-2xl border border-white/14 bg-white px-4 py-4 text-center text-xl font-black text-slate-950 outline-none transition focus:ring-4 focus:ring-rose-300/40"
              />

              {error && (
                <p className="mt-4 inline-flex items-center justify-center gap-2 rounded-2xl bg-red-500/12 px-4 py-3 text-sm font-bold text-red-100">
                  <XCircle size={18} />
                  {error}
                </p>
              )}

              <button
                type="button"
                className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-rose-500 px-5 font-black text-white shadow-xl shadow-rose-500/20 transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-rose-200 disabled:cursor-not-allowed disabled:opacity-60"
                onClick={() => void unlockSecretVideo()}
                disabled={isChecking}
              >
                <PlayCircle size={20} />
                {isChecking ? "Đang kiểm tra..." : "Mở video bí mật"}
              </button>
            </>
          ) : (
            <>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-emerald-400/16 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-emerald-100">
                <ShieldCheck size={16} />
                Đã mở khóa
              </p>

              <div className="overflow-hidden rounded-[24px] border border-white/12 bg-black shadow-[0_0_80px_rgba(244,63,94,0.24)]">
                <div className="aspect-video">
                  <iframe
                    className="h-full w-full"
                    src={secretUrl}
                    title="Video bí mật"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              <p className="mt-5 text-lg font-bold text-rose-100">
                Đây là phần chỉ dành cho hai bạn thôi đó.
              </p>
            </>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}