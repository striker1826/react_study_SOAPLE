import React from "react";
import Comment from "./comment";

const commentsData = [
  {
    id: 1,
    name: "김민섭",
    comment: "리액트 공부중이에요!",
  },
  { id: 2, name: "이인제", comment: "인프런에 강의 있어요!" },
  {
    id: 3,
    name: "김광현",
    comment: "한국시리즈 우승!",
  },
];

function CommentList(props) {
  return (
    <div>
      <Comment commentsData={commentsData} />
    </div>
  );
}

export default CommentList;
