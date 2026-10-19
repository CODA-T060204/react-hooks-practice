//Step 1: import useReducer
import { useReducer } from "react";

//step 2: Khởi tạo giá trị ban đầu
const initState = false;

//Step 3: khai báo action
const LOGIN = "login";
const LOGOUT = "logout";

//Step 4: khai báo function reducer ( sẽ làm gì với từng action)
function reducerLogin(state, action) {
  switch (action) {
    case LOGIN:
      return true;
    case LOGOUT:
      return false;
    default:
      throw new Error("Action không hợp lệ");
  }
}

export default function LoginUseReducer() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedIn, dispatch] = useReducer(reducerLogin, initState);
  // Step 5: [giá trị hiện tại, dispatch: hàm gửi action lên reducer]
  // = (hàm reducer, lọc và xử lý action gửi lên, Giá trị khởi tạo ban đầu)
  return (
    <div>
      <h2>{isLoggedIn ? "Chào mừng xxx" : "Bạn chưa đăng nhập"}</h2>
      {/* Step 6: Dùng dispatch để gửi action */}
      <button onClick={() => dispatch(LOGIN)}>Đăng nhập</button>
      <button onClick={() => dispatch(LOGOUT)}>Đăng xuất</button>
    </div>
  );
}
