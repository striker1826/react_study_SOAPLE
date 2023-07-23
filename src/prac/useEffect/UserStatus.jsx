import React, { useState, useEffect } from "react";

function UserStatus(props) {
  const [isOneline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
    return () => {
      ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
    };
  });

  if (isOneline === null) {
    return "대기 중 ...";
  }
  return isOneline ? "온라인" : "오프라인";
}
