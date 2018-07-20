import React from "react";
import { UserTextContainer } from "./style";

export default ({ info }) => {
  const { username, uuid, email, created_at, last_login } = info;
  return (
    <UserTextContainer>
      <p>username: {username}</p>
      <p>uuid: {uuid}</p>
      <p>email: {email}</p>
      <p>created_at: {created_at}</p>
      <p>last_login: {last_login}</p>
    </UserTextContainer>
  );
};
