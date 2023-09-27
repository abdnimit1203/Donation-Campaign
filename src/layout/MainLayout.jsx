import { useEffect } from "react";
import Navbar from "./../components/Header/Navbar";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const loc = useLocation();
//   console.log(loc);
  useEffect(() => {
    if (loc.pathname === "/") {
      document.title = `Donation Campaign | Home`;
    } else {
      document.title = `Donation Campaign | ${
        loc.pathname.replace("/", "").charAt(0).toUpperCase() +
        loc.pathname.slice(2)
      }`;
    }
    if (loc.state) {
      document.title = `${loc.state}`;
    }
  }, [loc]);
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
