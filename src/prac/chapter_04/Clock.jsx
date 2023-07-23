import { useState } from "react";

function Clock() {
  const [currentTime, setCurrentTime] = useState(true);

  setInterval(() => {
    setCurrentTime(() => setCurrentTime(() => !currentTime));
  });

  return (
    <div>
      <h1>안녕, 리액트!</h1>
      <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;
