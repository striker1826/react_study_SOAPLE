import { useState } from "react";
import Toolbar from "./Toolbar";

function IsLogin(props) {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => setIsLogin((isLogin) => !isLogin);

  return (
    <div>
      <Toolbar isLogin={isLogin} handleLogin={handleLogin} />
      <div style={{ padding: 16 }}>소플과 함께하는 리액트 공부!</div>
    </div>
  );
}

export default IsLogin;
