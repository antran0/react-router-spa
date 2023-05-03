import React from "react";
import { Outlet } from "react-router";
import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      {/* The Outlet component is a marker for where child routes should be rendered to. */}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
