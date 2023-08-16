import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useAuthUser } from "react-auth-kit";
import Home from "../../pages/home/Home.page";
import Blog from "../../pages/blog/Blog.page";
import Login from "../../pages/auth/login/Login";
import Register from "../../pages/auth/register/Register";
import Profile from "../../pages/profile/Profile.page";
import Error from "../../pages/error/Error.page";

const Router = ({ data }) => {
  const auth = useAuthUser();

  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: auth() ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: auth() ? <Navigate to="/" /> : <Register />,
    },
    {
      path: "/blog",
      element: auth() ? <Blog data={data} /> : <Navigate to="/login" />,
    },
    {
      path: "/profile",
      element: auth() ? <Profile data={data} /> : <Navigate to="/login" />,
    },
    {
      path: "*",
      element: <Error />,
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
