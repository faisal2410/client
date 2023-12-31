/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth.jsx";
import Loading from "./Loading.jsx";

const PrivateRoute = () => {
  // context
  const [auth] = useAuth();
  // state
  const [ok, setOk] = useState(false);


  useEffect(() => {
    if (auth?.token) {
      setOk(true);
    } else {
      setOk(false);
    }
  }, [auth?.token]);

  return ok ? <Outlet /> : <Loading />;
};

export default PrivateRoute;
