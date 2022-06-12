import React from "react";
import { Outlet } from "react-router-dom";

import MadeBy from "../components/MadeBy";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout: React.FC = () => (
  <>
    <MadeBy />
    <Header />
    <main className="container">
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout;
