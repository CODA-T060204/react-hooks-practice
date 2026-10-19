# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# React Hooks Practice

Demo: https://github.com/CODA-T060204/react-hooks-practice.git

## Plan

| Tên         | CN (Function)      | Nội dung             | Link                                                  | Est | Thực tế | Trạng thái |
| ----------- | ------------------ | -------------------- | ----------------------------------------------------- | --- | ------- | ---------- |
| useState    | Lưu state đơn giản | Đăng nhập, Đăng xuất | [UseStateDemo](src/components/UseStateDemo.jsx)       | 1h  |         | Xong       |
| useReducer  | State phức tạp     | reducer + dispatch   | [UseReducerDemo](src/components/UseReducerDemo.jsx)   | 2h  |         | Xong       |
| useEffect   | Tác vụ phụ         | Đổi tiêu đề, gọi API | [UseEffectDemo](src/components/UseEffectDemo.jsx)     | 2h  |         | Chưa làm   |
| useRef      | Truy cập DOM       | Focus input          | [UseRefDemo](src/components/UseRefDemo.jsx)           | 1h  |         | Chưa làm   |
| useContext  | Chia sẻ dữ liệu    | Đổi theme            | [UseContextDemo](src/components/UseContextDemo.jsx)   | 2h  |         | Chưa làm   |
| useMemo     | Ghi nhớ kết quả    | Tính toán nặng       | [UseMemoDemo](src/components/UseMemoDemo.jsx)         | 1h  |         | Chưa làm   |
| useCallback | Ghi nhớ hàm        | Dùng với memo        | [UseCallbackDemo](src/components/UseCallbackDemo.jsx) | 1h  |         | Chưa làm   |

## Cách chạy local

npm install
npm run dev

## Bước tiếp theo

Áp dụng các hook vào UI HTML đã cắt, chuyển thành ứng dụng React.
