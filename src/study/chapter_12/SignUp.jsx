import React, { useState } from "react";

function SignUp(props) {
  const [name, setName] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    alert(`이름: ${name}`);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <lavel>
        이름:
        <input type="text" value={name} onChange={handleChangeName} />
      </lavel>
      <button type="submit">제출</button>
    </form>
  );
}

export default SignUp;
