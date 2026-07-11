# Cách public website TNE v6

## Khuyến nghị chính: GitHub Pages

Trang hiện đang chạy tại https://tne-qub-huce.github.io/tne/ nên cách đơn giản nhất là thay nội dung trong repo hiện có:

1. Mở repo GitHub đang phục vụ trang `tne`.
2. Xoá (hoặc lưu lại vào nhánh/thư mục `v5-archive`) các file cũ.
3. Upload toàn bộ nội dung thư mục này lên thư mục gốc của repo: `index.html`, `404.html`, `robots.txt`, `sitemap.xml`, `.nojekyll` và thư mục `assets/`.
4. GitHub Pages sẽ tự build lại trong khoảng một phút. Mở thử trên cửa sổ ẩn danh và trên điện thoại.

Nếu tạo repo mới: Settings → Pages → Deploy from a branch → chọn `main`, thư mục `/(root)` → Save. Nhớ cập nhật URL trong `sitemap.xml` và `robots.txt` nếu địa chỉ khác.

## Phương án nhanh: Netlify Drop

Kéo cả thư mục này vào https://app.netlify.com/drop để có URL public trong vài phút. Phù hợp để xem trước và lấy ý kiến trước khi đẩy lên GitHub Pages.

## Những chỗ hay cần sửa

- **Form đăng ký**: tìm và thay chuỗi `https://dangkyai.netlify.app/` trong `index.html` (xuất hiện ở nút hero, mục cập nhật, panel đăng ký, event side, modules CTA, FAQ, nút nổi và footer).
- **Địa điểm sự kiện**: khi có quyết định chính thức, cập nhật tại mục `#tap-huan` (event-side) và FAQ, đồng thời cân nhắc thêm vào schema.org.
- **Ảnh đội ngũ**: thay file trong `assets/img/team/` nhưng giữ nguyên tên file để không phải sửa đường dẫn; nên giữ tỉ lệ dọc 4:5.
- **Cập nhật mới**: thêm/bớt thẻ trong mục `#cap-nhat` (ba thẻ update-card, có thể thêm thẻ mới cùng cấu trúc).

## Checklist trước khi public

- [ ] Kiểm tra link form đăng ký hoạt động và đúng lượt hiện hành.
- [ ] Xác nhận địa điểm cụ thể và bổ sung khi có quyết định chính thức.
- [ ] Xác nhận điều kiện hỗ trợ lưu trú trước khi đăng thông báo chi tiết.
- [ ] Kiểm tra quyền sử dụng logo trước khi thêm logo QUB, HUCE, IICM hoặc British Council.
- [ ] Không đưa ngân sách, hợp đồng, hoá đơn, dữ liệu cá nhân hoặc ghi chú họp nội bộ lên trang.
- [ ] Mở thử trên điện thoại và cửa sổ ẩn danh trước khi chia sẻ.
