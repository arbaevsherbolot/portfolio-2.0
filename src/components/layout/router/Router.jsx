import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";

const Router = () => {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ];

  return (
    <>
      <Routes>
        {routes.map((route, i) => (
          <Route key={i} element={route.element} path={route.path} />
        ))}
      </Routes>
    </>
  );
};

export default Router;
