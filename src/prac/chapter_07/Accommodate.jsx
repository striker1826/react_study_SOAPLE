import React, { useState, useEffect } from "react";
import UseCounter from "./useCounter";

function Accommodate(props) {
  const { count, increaseCount, decreaseCount } = UseCounter(0);
  const [isFull, setIsFull] = useState(false);

  useEffect(() => {
    console.log("=====useEffect=====");
    setIsFull(count >= 10);
  }, [count]);

  return (
    <div style={{ padding: 16 }}>
      <p>총 {count}명 수용했습니다.</p>

      <button onClick={increaseCount} disabled={isFull}>
        입장
      </button>
      <button onClick={decreaseCount}>퇴장</button>

      {isFull && <p style={{ color: "red" }}>정원이 가득찼습니다.</p>}
    </div>
  );
}

export default Accommodate;
