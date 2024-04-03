import React from "react";
import MainNavigation from "./MainNavigation";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Root = () => {
  return (
    <div>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
