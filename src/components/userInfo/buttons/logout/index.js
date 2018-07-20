import React from "react";
import { Link } from "react-router-dom";
import { LogOut } from "./style";

export default () => {
  return (
    <LogOut>
      <Link to="/login">LOG OUT</Link>
    </LogOut>
  );
};
