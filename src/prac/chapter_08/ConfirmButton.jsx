import { useState } from "react";

function ConfirmButton(props) {
  const [isConfirm, setIsConfirm] = useState(false);

  const handleConfirm = () => setIsConfirm(true);

  return (
    <div>
      <button onClick={handleConfirm} disabled={isConfirm}>
        {isConfirm ? "확인됨" : "확인하기"}
      </button>
    </div>
  );
}

export default ConfirmButton;
