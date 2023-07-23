import React from "react";

function Book_prac(props) {
  return (
    <div>
      <h1>이 책의 이름은 {props.name} 입니다</h1>
      <h1>이 책의 가격은 {props.price}원 입니다</h1>
    </div>
  );
}

export default Book_prac;
