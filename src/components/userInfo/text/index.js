import React from "react";
import PropTypes from "prop-types";
import { UserTextContainer } from "./style";

const Text = ({ info }) => {
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

Text.propTypes = {
  info: PropTypes.objectOf(PropTypes.string)
};

export default Text;
