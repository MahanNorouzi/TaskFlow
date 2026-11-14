import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import Header from "./Header";

function AppLayout() {
  return (
    <>
      <div>
        <Sidebar />
        <div>
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
