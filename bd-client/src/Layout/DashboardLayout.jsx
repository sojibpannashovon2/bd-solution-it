import { Outlet } from "react-router-dom";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import Header from "../components/Shared/Header";
import Navbar from "../components/Shared/Navbar";
import Container from "../components/Shared/Container";

const DashboardLayout = () => {
  return (
    <>
      <Header />
      {/* <Navbar /> */}

      <Container>
        <div className="relative min-h-screen md:flex">
          <Sidebar />
          <div className="flex-1  md:ml-64">
            <div className="p-5">
              <Outlet />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default DashboardLayout;
