import React, { Fragment } from "react";
import Content from "../../components/pizzaList/";
import Header from "../Header";
import Footer from "../Footer/";

export default () => {
  return (
    <Fragment>
      <Header />
      <Content />
      <Footer />
    </Fragment>
  );
};
