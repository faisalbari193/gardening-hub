import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import { useTheme } from "../Provider/ThemeContext";


const MainLayout = () => {
  const { theme } = useTheme();
  return (
    <>
      <div className={`App ${theme}`}>
        <Navbar />
        <div>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
