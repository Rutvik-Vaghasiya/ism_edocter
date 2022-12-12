import { Outlet } from "react-router-dom";
import { LoginPage } from "../Pages/LoginPage";

const useAuth = () => {
  const id = localStorage.getItem("id");
  return id ? true : false;
};

const ProtectedRoutes = () => {
  const auth = useAuth();
  return auth ? <Outlet /> : <LoginPage />;
};

export default ProtectedRoutes;
