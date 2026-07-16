import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto p-4">
        <Outlet/>
      </main>
    </>
  );
};

export default Layout;