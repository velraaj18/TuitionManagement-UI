import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <div className="mb-4">
        <Navbar />
      </div>

      <Outlet />
    </div>
  );
};

export default MainLayout;
