# Cách public website TNE

## Khuyến nghị chính: GitHub Pages

Phù hợp nhất khi trang này được dùng như **single source of truth** công khai: miễn phí cho repository public, có lịch sử phiên bản, dễ phân quyền cập nhật và có thể gắn tên miền riêng.

### Đưa trang lên mạng

1. Đăng nhập GitHub và tạo repository public, ví dụ: `tne-women-construction`.
2. Giải nén gói website này.
3. Trong repository, chọn **Add file → Upload files**; tải toàn bộ nội dung bên trong thư mục `tne-showcase` lên. File `index.html` phải nằm ở thư mục gốc.
4. Mở **Settings → Pages**.
5. Tại **Build and deployment**, chọn **Deploy from a branch**.
6. Chọn branch `main`, thư mục `/(root)`, rồi **Save**.
7. Trang sẽ có địa chỉ dạng: `https://TEN-TAI-KHOAN.github.io/tne-women-construction/`.

### Public access tốt nhất

Đề nghị xin một subdomain chính thức, ví dụ `tne.huce.edu.vn`, rồi cấu hình làm custom domain trong GitHub Pages. Khi có domain:

1. Settings → Pages → Custom domain.
2. Nhập tên miền được cấp.
3. Cấu hình DNS theo hướng dẫn GitHub.
4. Bật **Enforce HTTPS** khi tùy chọn xuất hiện.

### Cập nhật nội dung

- Sửa trực tiếp `index.html` trên GitHub hoặc tải bản file mới lên.
- Thay infographic trong `assets/img/` nhưng giữ nguyên tên file để không phải sửa đường dẫn.
- Mọi thay đổi đều có lịch sử; có thể quay lại phiên bản trước.

## Phương án public cực nhanh: Netlify Drop

Khi cần link trong vài phút và chưa muốn tạo repository:

1. Giải nén gói website.
2. Mở Netlify Drop.
3. Kéo cả thư mục `tne-showcase` vào vùng upload.
4. Netlify tạo ngay một URL public dạng `*.netlify.app`.

Nhược điểm: cập nhật thủ công bằng cách kéo lại thư mục; lịch sử nguồn không rõ bằng GitHub.

## Checklist trước khi public

- [ ] Xác nhận địa điểm cụ thể và bổ sung khi có quyết định chính thức.
- [ ] Bổ sung link đăng ký khi form được duyệt.
- [ ] Xác nhận điều kiện hỗ trợ lưu trú trước khi đăng thông báo chi tiết.
- [ ] Kiểm tra quyền sử dụng logo trước khi thêm logo QUB, HUCE, IICM hoặc British Council.
- [ ] Không đưa ngân sách, hợp đồng, hóa đơn, dữ liệu cá nhân hoặc ghi chú họp nội bộ lên trang.
- [ ] Mở thử trên điện thoại và cửa sổ ẩn danh trước khi chia sẻ.

## Nội dung mới trong bản v2

Bản này bổ sung mục **Đội ngũ dự án và tập huấn**, gồm:

- TS Tara Brooks — Trưởng dự án phía QUB.
- TS Faris Elghaish — Giảng viên tập huấn phía QUB.
- TS Nguyễn Bảo Ngọc — Điều phối dự án phía Việt Nam.

Mỗi thẻ nhân sự có liên kết đến hồ sơ chính thức. Danh sách nguồn được lưu trong `SOURCES.md` để thuận tiện kiểm tra và cập nhật.

## Biểu mẫu góp ý nội dung tập huấn

Website đang sử dụng đường dẫn công khai:

- `https://ntlink.co/nAI`
- Đường dẫn rút gọn chuyển tới web app Google Apps Script do nhóm dự án quản lý.

Lời mời góp ý được đặt ở bốn vị trí: nút chính trên phần mở đầu, module đồng thiết kế ngay sau phần mở đầu, lời nhắc sau bốn nội dung chuyên môn và nút nổi trên màn hình. Biểu mẫu này được ghi rõ là form góp ý nội dung, không phải form đăng ký tham dự.

Khi cần đổi form, tìm và thay toàn bộ chuỗi `https://ntlink.co/nAI` trong `index.html`.
