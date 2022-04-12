import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { MatchAUserSession } from "../../services/userService";

function ProtectedLoginRoutes() {
  const [isLoading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    async function fetchUser() {
      await MatchAUserSession().then((res) => {
      if (res.user === null) {
        setIsLoggedIn(false);
        setLoading(false);
      } else {
        setIsLoggedIn(true);
        setLoading(false);
      }
    });
  }
  fetchUser();
  }, []);

  if (isLoading) {
    return <>Loading...</>;
  } else {
    if (!isLoggedIn) {
      return <Outlet />;
    } else {
      return <Navigate to="/auth/dashboard" />;
    }
  }
}

export default ProtectedLoginRoutes;
