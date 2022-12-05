import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <div>
        <Header />
      </div>
      <div style={{ minHeight: "100vh" }}>{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
