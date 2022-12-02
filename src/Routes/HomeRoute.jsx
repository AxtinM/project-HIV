import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function HomeRoute() {
  // useEffect(() => {
  //   navigate("home");
  // }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default HomeRoute;
