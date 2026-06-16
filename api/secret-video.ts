import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(request: VercelRequest, response: VercelResponse) {
  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method not allowed" });
  }

  const { code } = request.body as { code?: string };

  const correctCode = process.env.SECRET_VIDEO_CODE;
  const secretVideoUrl = process.env.SECRET_VIDEO_URL;

  if (!correctCode || !secretVideoUrl) {
    return response.status(500).json({
      error: "Secret video chưa được cấu hình.",
    });
  }

  if (!code || code.trim() !== correctCode) {
    return response.status(401).json({
      error: "Sai mật mã rồi. Hồ sơ vẫn đang bị khóa.",
    });
  }

  return response.status(200).json({
    url: secretVideoUrl,
  });
}