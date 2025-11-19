import React from "react";
import { Outlet } from "react-router";
import Footer from "../Pages/Home/Shared/Footer/Footer";
import Navbar from "../Pages/Home/Shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
