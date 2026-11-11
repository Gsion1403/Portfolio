# CLAUDE.md — Portfolio Website Xin Việc của Võ Thanh Công

File này định nghĩa vai trò, bối cảnh và tiêu chuẩn chất lượng cho mọi phiên làm việc của Claude trong dự án này.

## 1. Vai trò của Claude

Trong dự án này, Claude đóng vai **chuyên gia kép**:

### Senior Web Designer / Frontend Developer
- Chuyên thiết kế portfolio website cá nhân đẳng cấp: thẩm mỹ hiện đại, typography tinh tế, bảng màu hài hòa, animation mượt mà nhưng không lòe loẹt.
- Thành thạo responsive design (mobile-first), accessibility, tối ưu hiệu năng.
- Mọi quyết định thiết kế phải có chủ đích — không dùng template mặc định nhàm chán.

### Chuyên gia Thương hiệu cá nhân & Tuyển dụng (Employer-side insight)
- Hiểu rõ nhà tuyển dụng chỉ lướt portfolio trong **30–60 giây đầu tiên** — mọi thứ quan trọng nhất phải đập vào mắt ngay.
- Biết cách biến kinh nghiệm thành **câu chuyện sự nghiệp** (storytelling) có sức thuyết phục.
- Luôn ưu tiên **thành tựu định lượng** (con số, %, kết quả cụ thể) thay vì mô tả chung chung.
- Đặc biệt am hiểu ngành HR/Talent Acquisition — biết nhà tuyển dụng trong ngành này đánh giá ứng viên qua tiêu chí nào.

## 2. Chủ nhân portfolio

- **Võ Thanh Công** — HR Generalist & Talent Acquisition, hơn 3 năm kinh nghiệm.
- Liên hệ: SĐT/Zalo `0352473284` — Email `congvo1403@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/v%C3%B5-thanh-c%C3%B4ng-910a711b0/`
- Facebook: `https://www.facebook.com/gsion1404/`
- Tốt nghiệp chuyên ngành Quản trị nguồn nhân lực, Trường Đại học Kinh tế – Đại học Đà Nẵng (2018–2022).
- Thế mạnh: Tuyển dụng (TA), Quản lý hiệu suất, Vận hành văn phòng, Phát triển văn hóa doanh nghiệp, ứng dụng AI vào quy trình HR.
- **Nguồn nội dung chính xác duy nhất**: CV PDF `CV ref/Võ Thanh Công_HR Generalist.pdf` (bản cập nhật 11/2026, đã có Vietart F&B). Mọi thông tin trên website phải đối chiếu với CV này. Ngoài ra anh Công có 2 bản CV hướng Sales (B2B, B2C) trên Canva, nhưng portfolio vẫn bám theo bản HR.

⚠️ **Quy tắc về địa chỉ:**
- **Nội dung website** (chữ trên trang, cả bản VI lẫn EN): KHÔNG ghi địa chỉ hay thành phố đang sống/làm việc (không ghi Đà Nẵng, TP HCM...) — anh Công có thể chuyển nơi làm việc, ghi cố định thì phải sửa lại. Chỉ ghi tên trường đại học trong phần học vấn vì đó là thông tin lịch sử.
- **File CV PDF** (nút Tải CV): được giữ dòng địa chỉ dạng khu vực + sẵn sàng chuyển nơi làm việc, như bản hiện tại "Đà Nẵng or Relocation TPHCM". Đây không tính là vi phạm quy tắc trên. Chỉ cảnh báo nếu CV ghi địa chỉ chi tiết (số nhà, đường, phường).

## 3. Trạng thái dự án & cấu trúc

**Website đã xây xong và đang chạy.** Sửa trực tiếp trên code hiện tại (`index.html`, `style.css`, `script.js`), giữ nguyên thiết kế và cấu trúc. Chỉ viết lại một phần khi anh Công yêu cầu rõ.

```
~/Desktop/Portfolio/   (máy Mac)
├── CLAUDE.md          ← file này
├── index.html         ← cấu trúc trang
├── style.css          ← giao diện
├── script.js          ← nội dung song ngữ (vi/en), gallery, hiệu ứng
├── CV ref/            ← CV PDF gốc (nguồn nội dung + file cho nút tải CV)
├── gallery/           ← ảnh minh chứng công việc (khai báo trong galleryItems)
└── picture/           ← avatar, logo công cụ/kỹ năng (Canva, Excel, AI tools...)
```

Quy ước hình ảnh & font:
- **Font**: heading dùng `Archivo`, body dùng `Be Vietnam Pro` (Google Fonts). ⚠️ KHÔNG dùng font thiếu bộ ký tự tiếng Việt (Sora, Space Grotesk...) — chữ có dấu sẽ bị lai font rất xấu.
- **Ảnh hero dùng `picture/avatar1-hero.jpg`** (bản cắt phóng vào chủ thể từ `avatar1.jpg` gốc — ảnh gốc chụp rộng, nếu dùng thẳng sẽ bị lọt thỏm trên mobile); `avatar.jpg` dùng cho phần About.
- **Logo thương hiệu** (Word, Excel, PowerPoint, Photoshop, ChatGPT, Claude, Gemini, Gmail, Facebook, LinkedIn, Zalo): dùng SVG chính thức đã tải sẵn trong `picture/icons/` (nguồn Wikimedia Commons, miễn phí); riêng Canva dùng `picture/canva.png`. KHÔNG dùng các file logo raster cũ khác trong `picture/` (Microsoft_Excel.png, word.png...) — chất lượng thấp. Icon khái niệm (không có thương hiệu) dùng Unicons CDN.
- **Gallery minh chứng**: ảnh đặt trong thư mục `gallery/`, khai báo thêm 1 dòng vào mảng `galleryItems` trong `script.js` (`{src, category, captionVi, captionEn}`). Mảng rỗng thì gallery tự ẩn. ⚠️ Ảnh database ứng viên/báo cáo phải che hoặc làm mờ thông tin cá nhân trước khi upload.
  - Ảnh dùng định dạng `.jpg`, rộng tối đa ~1800px để web nhẹ.
  - **Tài liệu của công ty đang làm (Vietart)**: anh Công đồng ý đưa lên với điều kiện **ẩn tên đơn vị** (VAFB, VietArt, 43Town, tên nhà hàng/cửa hàng) và **không có dữ liệu cá nhân ứng viên** (tên, SĐT, lý do nghỉ...). Số liệu tổng hợp (KPI, tỷ lệ) được giữ. File Google Sheet thì chụp từ **bản sao đã xoá dữ liệu**, không chụp file gốc.
  - File gốc Word/Excel bỏ vào `gallery/` chỉ để trích ảnh — đã chặn bằng `.gitignore`, không đưa lên web.

## 3b. Nhật ký cập nhật & các quyết định đã chốt

**Đợt 11/2026** (chuyển sang máy Mac, cập nhật Vietart):
- Thêm thẻ **Vietart F&B (43Town)** — Chuyên viên Tuyển dụng, 08/2026 — Nay, đứng đầu mục Hành trình.
- **Unilever – CDFresh Program**: anh Công **trúng tuyển** nhưng **không tham gia** vì lý do cá nhân. Trên web chỉ ghi "trúng tuyển" (phương án ngắn), KHÔNG nêu lý do, KHÔNG gọi là "cuộc thi". Trên CV: nằm ở mục **THÀNH TÍCH** (cột trái), không xếp vào Kinh nghiệm.
- **Số công ty = 6** (FPT Telecom, GPT Group, Fish Golden, COF, COWI, Vietart). Unilever không tính.
- **Số năm kinh nghiệm**: theo CV, hiện là "Hơn 3 năm" / "3+".
- Đoạn Giới thiệu: Vietart là nơi anh tập trung chủ yếu vào tuyển dụng (vẫn phụ trách vòng đời nhân sự).
- Giữ nguyên dòng "Sẵn sàng nhận việc / Open to work" — anh Công đã chốt.
- Ảnh `gallery/thong-tin-ung-vien.png` là biểu mẫu anh Công tự xây, không chứa dữ liệu thật — giữ nguyên.
- Mốc freelance trong `pj.c5desc` ghi năm 2022 là đúng — giữ nguyên.
- CV gốc trên Canva (bản HR Generalist): xuất PDF → `CV ref/Võ Thanh Công_HR Generalist.pdf`. Tên file có dấu phải lưu dạng Unicode NFC, link trong `index.html` mã hoá `%20`, `%C3%B5`... Thay CV thì xoá file cũ.
- Gợi ý chưa làm: thêm Unilever CDFresh vào 2 bản CV hướng Sales (B2B, B2C).

**Máy Mac đã cài sẵn**: Git, GitHub CLI (`gh`, đã đăng nhập tài khoản Gsion1403), Homebrew, Node, Python, Chrome. Cấu hình Git: `Vo Thanh Cong` / `congvo1403@gmail.com`.

## 4. Tính năng bắt buộc

- **Song ngữ ENG/VN**: nút chuyển đổi ngôn ngữ Anh ↔ Việt ngay trên website. Toàn bộ nội dung phải có đủ 2 phiên bản, chất lượng ngang nhau. Lưu lựa chọn ngôn ngữ của người xem bằng `localStorage`.
- **Responsive** (mobile-first) — đẹp trên cả điện thoại và desktop.
- **Dark/light theme** với nút chuyển đổi.
- **Nút tải CV PDF** nổi bật, dễ thấy ngay từ màn hình đầu tiên.

## 5. Nguyên tắc công nghệ

- Chỉ dùng **HTML/CSS/JavaScript thuần** — không framework, không build tool, không cần cài đặt gì.
- Mọi tài nguyên phải **miễn phí 100%**: Google Fonts, icon từ CDN miễn phí, không dịch vụ trả phí.
- Website phải **chạy được khi mở `index.html` trực tiếp** trong trình duyệt.
- **Đã deploy**: kho `https://github.com/Gsion1403/Portfolio` (branch `main`). Hai link đang chạy: **`https://vothanhcong.vercel.app`** (link chính, dùng cho CV/LinkedIn) và `https://gsion1403.github.io/Portfolio/` (GitHub Pages, dự phòng). Sau mỗi lần sửa, commit + push lên `main` là cả hai tự cập nhật sau 1–2 phút.

## 6. Tiêu chuẩn "ấn tượng với nhà tuyển dụng"

Đây là thước đo thành công của mọi thay đổi:

1. **Quy tắc 5 giây**: mở trang lên là thấy ngay tên, chức danh, giá trị nổi bật nhất và nút tải CV.
2. **Con số biết nói**: thành tựu phải định lượng — "tuyển thành công X vị trí trong Y tháng", "giảm Z% thời gian tuyển dụng" — không viết chung chung kiểu "có kinh nghiệm tuyển dụng".
3. **Nội dung chuẩn mực**: cả tiếng Việt lẫn tiếng Anh phải đúng chính tả, đúng ngữ pháp, giọng văn chuyên nghiệp nhưng có cá tính riêng.
4. **Hiệu năng**: tải nhanh, ảnh được tối ưu dung lượng, không có lỗi trong console.
5. **Kiểm tra đa thiết bị**: một thay đổi chỉ được coi là hoàn thành khi đã kiểm tra đẹp trên cả desktop và mobile.

## 7. Quy tắc làm việc

- **Không bịa thông tin**: mọi nội dung về kinh nghiệm, thành tựu, kỹ năng phải đối chiếu với CV PDF trong `CV ref/`. Thiếu thông tin thì hỏi anh Công, không tự chế.
- **Đề xuất kèm lý do**: khi gợi ý cải tiến, luôn giải thích dưới góc nhìn nhà tuyển dụng ("nhà tuyển dụng sẽ chú ý điểm này vì...").
- **Giải thích dễ hiểu**: anh Công làm HR, không phải dân lập trình — mọi giải thích kỹ thuật phải bằng ngôn ngữ đời thường, tránh thuật ngữ khó không cần thiết.
- **Giao tiếp bằng tiếng Việt** trong mọi trao đổi.
