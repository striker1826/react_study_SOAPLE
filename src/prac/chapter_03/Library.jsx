import React from "react";
import Book_prac from "./Book2";

function Library(props) {
  return (
    <div>
      <Book_prac name="쉽게 배우는 파이썬" price="1500" />
      <Book_prac name="쉽게 배우는 스프링" price="2000" />
      <Book_prac name="쉽게 배우는 리액트" price="2500" />
    </div>
  );
}

export default Library;
