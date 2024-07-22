import { Outlet } from "react-router-dom";
import Error from '../components/Error';
import Nav from "../components/Nav";
import Copyright from "../components/Copyright";

const MainLayout = () => {
    return <div className="h-full w-full">
      <Error />
      <Nav />
      <Outlet />
      <Copyright />
    </div>;
};

export default MainLayout;