import IsLogin from "./IsLogin";

const styles = {
  wrapper: {
    padding: 16,
    display: "flex",
    flexDirection: "row",
    borderBottom: "1px solid grey",
  },
  greeting: {
    marginRight: 8,
  },
};

function Toolbar(props) {
  const { isLogin, handleLogin } = props;

  return (
    <div style={styles.wrapper}>
      {isLogin && <span style={styles.greeting}>환영합니다!</span>}

      {isLogin ? (
        <button onClick={handleLogin}>로그아웃</button>
      ) : (
        <button onClick={handleLogin}>로그인</button>
      )}
    </div>
  );
}

export default Toolbar;
