# Travel Pulse – Website Du Lịch

Live demo: [https://travel-web-bice-five.vercel.app/](https://travel-web-bice-five.vercel.app/)

> Một website du lịch giao diện hiện đại, tối ưu cho thiết bị di động, xây dựng bằng **HTML/CSS/JavaScript thuần** và triển khai trên **Vercel**.
---
## ✨ Tính năng chính

* **Giao diện responsive** (mobile-first), dùng Flexbox/Grid.
* **Thanh điều hướng** rõ ràng, scroll hiệu ứng mượt.
* **Trang đăng nhập/đăng ký (UI mẫu)**, có nút `Login`, OTP verify (UI), reset password (UI).
* **Trang bài viết/blog**: meta thông tin, phân trang (pagination UI), bố cục đọc dễ dàng.
* **Khu vực đánh giá/nhận xét** (reviews section) và **logo đối tác** (featured logos).
* **Thư viện ảnh/hero banner** độ phân giải cao, cắt sẵn cho nhiều kích thước.
* **Tối ưu cơ bản cho SEO**: thẻ tiêu đề, mô tả, alt ảnh, cấu trúc semantic.
* **Tập trung hiệu năng**: ảnh nén, lazy hints (tuỳ chỉnh), CSS gọn.

> Lưu ý: Dự án hiện thiên về giao diện (frontend tĩnh). Các form đăng nhập/OTP chỉ minh hoạ UI, chưa nối API.

---

## 🧱 Kiến trúc & Công nghệ

* **Ngôn ngữ**: HTML5, CSS3, JavaScript (ES6+)
* **Phông chữ**: Urbanist (Google Fonts)
* **Triển khai**: Vercel (build tĩnh – chỉ cần `index.html`)
* **Chuẩn mã**: BEM (gợi ý), Prettier (tuỳ chọn)

---

## ▶️ Chạy cục bộ

1. **Clone** dự án (hoặc tải ZIP):

   ```bash
   git clone <repo-url>
   cd travel-web
   ```
2. **Mở trực tiếp** `index.html` bằng trình duyệt, **hoặc** dùng VSCode **Live Server**:

   * Cài extension *Live Server*
   * Click `Go Live` và truy cập địa chỉ hiển thị

> Vì là site tĩnh, không cần `npm install` hay backend.

---

## 🚀 Triển khai lên Vercel

1. Đăng nhập **vercel.com** và **Import** repository GitHub.
2. Project loại **Static Site** (không build step).
3. **Root** là thư mục gốc dự án; **Output** là chính thư mục đó.
4. `Deploy` và gán domain tuỳ ý.

> Mỗi lần `git push` lên nhánh chính sẽ tự động redeploy.
---
## 📬 Liên hệ

* Tác giả/nhóm: *Travel Pulse*
* Live: [https://travel-web-bice-five.vercel.app/](https://travel-web-bice-five.vercel.app/)

> Nếu bạn đang đọc file này trên GitHub, hãy ghé **Live Demo** để trải nghiệm đầy đủ giao diện.
