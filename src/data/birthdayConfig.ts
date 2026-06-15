export type PhotoCategory = "cute" | "couple" | "funny" | "memory";

export type PhotoItem = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: PhotoCategory;
};

export const birthdayConfig = {
  conceptName: "Hồ Sơ Tuyệt Mật",
  personA: {
    name: "QUỲNH NY",
    nickname: "PERSON_A_NICKNAME",
    birthday: "17/06",
  },
  personB: {
    name: "TRUNG NGUYÊN",
    nickname: "PERSON_B_NICKNAME",
    birthday: "19/06",
  },
  videoWishesUrl: "VIDEO_WISHES_URL",
  introMusicSrc: "/assets/nhac-kich-tinh-hoi-hop.mp3",
  videoPosterSrc: "/assets/video-poster.svg",
  emotionalCollageSrc: "/assets/emotional-collage.svg",
  introMessages: [
    "ĐANG QUÉT DỮ LIỆU...",
    "Phát hiện 2 đối tượng sinh nhật trong tháng 6.",
    "Ngày sinh: 17/06 và 19/06.",
    "Mối quan hệ: Đáng nghi.",
    "Mức độ thân thiết: Vượt ngưỡng cho phép.",
    "Mức độ phát cơm chó: Nguy hiểm.",
  ],
  scanStats: [
    { label: "Độ đáng yêu", value: "97%", percent: 97 },
    { label: "Độ hay cà khịa", value: "100%", percent: 100 },
    { label: "Độ phát cơm chó", value: "999%", percent: 100 },
    { label: "Độ cần bị chúc mừng", value: "KHẨN CẤP", percent: 92 },
    { label: "Độ xứng đôi", value: "Hệ thống không dám phủ nhận", percent: 100 },
  ],
  runawayMessages: [
    "Ủa? Bấm hụt hả?",
    "Chậm quá nha.",
    "Muốn xem bí mật thì phải có kỹ năng.",
    "Thôi được rồi, không hành nữa.",
  ],
  runawayStickers: [
    { src: "/assets/meme-sticker-01.svg", alt: "Meme sticker 1", label: "BAM HUT ROI" },
    { src: "/assets/Tuan-sticker.png", alt: "Meme sticker 2", label: "CHAM QUA NHA" },
    { src: "/assets/Ny-sticker.png", alt: "Meme sticker 3", label: "CAN KY NANG" },
    { src: "/assets/meme-sticker-04.svg", alt: "Meme sticker 4", label: "THA LAN NAY" },
  ],
  emotionalLines: [
    "Nhưng mà đùa vậy đủ rồi.",
    "Vì 17/06 và 19/06 không chỉ là hai ngày sinh nhật.",
    "Đó là hai ngày tụi mình có thêm hai con người rất đáng quý trong đời.",
    "Và vì hai bạn là một cặp hơi ồn ào, hơi đáng ghét, hơi hay phát cơm chó...",
    "nên tụi mình quyết định gom hết lời chúc, hình ảnh và yêu thương vào đây.",
  ],
  timelineItems: [
    { date: "17/06", text: "Một nhân vật chính ra đời." },
    { date: "19/06", text: "Nhân vật chính còn lại xuất hiện." },
    {
      date: "Sau đó",
      text: "Hai người gặp nhau và bắt đầu làm phiền thế giới bằng sự đáng yêu.",
    },
    {
      date: "Hôm nay",
      text: "Tụi mình chính thức mở hồ sơ này để chúc mừng cả hai.",
    },
  ],
  galleryCategories: {
    cute: "Ảnh tử tế hiếm hoi",
    couple: "Bằng chứng phát cơm chó",
    funny: "Ảnh dìm nhưng vẫn yêu",
    memory: "Những khoảnh khắc đáng nhớ",
  } satisfies Record<PhotoCategory, string>,
  photoItems: [
    {
      id: "photo-01",
      src: "/assets/gallery-cute.svg",
      alt: "Khoảnh khắc dễ thương của hai nhân vật chính",
      caption: "Tấm này nhìn cũng ra dáng nhân vật chính đó.",
      category: "cute",
    },
    {
      id: "photo-02",
      src: "/assets/gallery-couple.svg",
      alt: "Khoảnh khắc ngọt ngào của cặp đôi",
      caption: "Không ai hỏi nhưng vẫn ngọt.",
      category: "couple",
    },
    {
      id: "photo-03",
      src: "/assets/gallery-funny.svg",
      alt: "Ảnh vui nhộn đáng yêu",
      caption: "Tụi mình đã rất nhân đạo khi không đăng thêm 50 tấm nữa.",
      category: "funny",
    },
    {
      id: "photo-04",
      src: "/assets/gallery-memory.svg",
      alt: "Kỷ niệm đáng nhớ cùng bạn bè",
      caption:
        "Có những khoảnh khắc nhìn lại mới thấy: tụi mình đã cùng nhau đi qua nhiều điều ghê.",
      category: "memory",
    },
    {
      id: "photo-05",
      src: "/assets/gallery-party.svg",
      alt: "Một ngày vui của hai bạn",
      caption: "Bằng chứng cho thấy đáng yêu là một thói quen.",
      category: "cute",
    },
    {
      id: "photo-06",
      src: "/assets/gallery-snapshot.svg",
      alt: "Kỷ niệm cặp đôi trong tháng sáu",
      caption: "Cặp đôi chính thức bị đưa vào diện cần chúc phúc.",
      category: "couple",
    },
  ] satisfies PhotoItem[],
  finalMessage:
    "Chúc hai bạn tuổi mới thật nhiều niềm vui, nhiều sức khỏe, nhiều may mắn, nhiều tiền, nhiều ảnh đẹp, ít drama, ít giận dỗi, và yêu nhau nhiều hơn hôm qua.",
  finalLine:
    "Cảm ơn vì đã là hai người bạn đáng quý, và cũng là một cặp đôi khiến tụi mình vừa muốn chúc phúc vừa muốn cà khịa mỗi ngày.",
};
