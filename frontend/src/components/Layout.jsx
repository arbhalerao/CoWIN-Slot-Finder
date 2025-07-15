import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PincodeSearch from "./PincodeSearch";

export default function Layout() {
  return (
    <div className="app">
      <Navbar />
      <PincodeSearch />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
