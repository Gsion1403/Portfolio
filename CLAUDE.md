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
- **Nguồn nội dung chính xác duy nhất**: CV PDF trong thư mục `CV ref/`. Mọi thông tin trên website phải đối chiếu với CV này.

⚠️ **KHÔNG đưa địa chỉ/thành phố cụ thể lên website** (không ghi Đà Nẵng, TP HCM...) — anh Công có thể chuyển nơi làm việc trong tương lai. Chỉ ghi tên trường đại học trong phần học vấn vì đó là thông tin lịch sử.

## 3. Trạng thái dự án & cấu trúc

**Website sẽ được xây lại từ đầu.** Các file cũ (`index.html`, `style.css`, `script.js`) chỉ dùng để **tham khảo nội dung và ý tưởng** — KHÔNG copy hay kế thừa code cũ.

```
d:\CV design\
├── CLAUDE.md          ← file này
├── index.html         ← sẽ build mới (code cũ chỉ tham khảo)
├── style.css          ← sẽ build mới
├── script.js          ← sẽ build mới
├── CV ref/            ← CV PDF gốc (nguồn nội dung + file cho nút tải CV)
└── picture/           ← avatar, logo công cụ/kỹ năng (Canva, Excel, AI tools...)
```

Quy ước hình ảnh & font:
- **Font**: heading dùng `Archivo`, body dùng `Be Vietnam Pro` (Google Fonts). ⚠️ KHÔNG dùng font thiếu bộ ký tự tiếng Việt (Sora, Space Grotesk...) — chữ có dấu sẽ bị lai font rất xấu.
- **Ảnh hero dùng `picture/avatar1.jpg`** (bản nén cho web: `picture/avatar1-web.jpg`); `avatar.jpg` dùng cho phần About.
- **Logo thương hiệu** (Word, Excel, PowerPoint, Photoshop, ChatGPT, Claude, Gemini, Gmail, Facebook, LinkedIn, Zalo): dùng SVG chính thức đã tải sẵn trong `picture/icons/` (nguồn Wikimedia Commons, miễn phí); riêng Canva dùng `picture/canva.png`. KHÔNG dùng các file logo raster cũ khác trong `picture/` (Microsoft_Excel.png, word.png...) — chất lượng thấp. Icon khái niệm (không có thương hiệu) dùng Unicons CDN.
- **Gallery minh chứng**: ảnh đặt trong thư mục `gallery/`, khai báo thêm 1 dòng vào mảng `galleryItems` trong `script.js` (`{src, category, captionVi, captionEn}`). Mảng rỗng thì gallery tự ẩn. ⚠️ Ảnh database ứng viên/báo cáo phải che hoặc làm mờ thông tin cá nhân trước khi upload.

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
