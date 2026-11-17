import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import Header from "./Header";

function AppLayout() {
  return (
    <>
      <div className="md:flex">
        <Sidebar />
        <div className="flex-1 min-w-0">
          <Header />
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default AppLayout;
