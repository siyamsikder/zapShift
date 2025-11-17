import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Pages/Home/Home/Shared/Footer/Navbar/Navbar";
import Footer from "../Pages/Home/Home/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <header>
        <Navbar/>
     </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default MainLayout;
