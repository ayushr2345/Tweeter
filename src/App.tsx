import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { Routes, Route, useOutletContext, Outlet } from "react-router-dom";
import Login from "./components/Forms/Login";
import Signup from "./components/Forms/Signup";
import About from "./components/Constants/About";
import Contact from "./components/Constants/Contact";
import Dashboard from "./components/Authorized/Dashboard";
import ProtectedRoutes from "./components/Authorized/ProtectedRoutes";
import ProtectedLoginRoutes from "./components/Authorized/ProtectedLoginRoute";
import ProtectedSignupRoutes from "./components/Authorized/ProtectedSignupRoute";
import IUser from "./interfaces/User.interface";
import Blog from "./components/Authorized/Blog";
import ProtectedBlogRoute from "./components/Authorized/ProtectedBlogRoute";
import Profile from "./components/Authorized/Profile";
import ProtectedProfileRoute from "./components/Authorized/ProtectedProfileRoute";
import ProtectedHomeRoute from "./components/Authorized/ProtectedHomeRoute";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* Protected Route for Home */}
        <Route path="/Tweeter/" element={<ProtectedHomeRoute />}>
          <Route path="" element={<Home />} />
        </Route>
        <Route path="/Tweeter/about/" element={<About />} />
        <Route path="/Tweeter/contact/" element={<Contact />} />

        {/* Protected Routes for Login */}
        <Route path="/Tweeter/login/" element={<ProtectedLoginRoutes />}>
          <Route path="" element={<Login />} />
        </Route>

        {/* Protected Routes for Signup */}
        <Route path="/Tweeter/signup/" element={<ProtectedSignupRoutes />}>
          <Route path="" element={<Signup />} />
        </Route>

        {/* Protected Routes for dashboard */}
        <Route path="/Tweeter/auth/dashboard/" element={<ProtectedRoutes />}>
          <Route path="" element={<Dashboard />} />
        </Route>
        {/* Protected Routes for dashboard ends */}

        {/* Protected route for Blog */}
        <Route path={"/Tweeter/auth/blog/:id/"} element={<ProtectedBlogRoute />}>
          <Route path="" element={<Blog />} />
        </Route>

        {/* Protected route for Profile */}
        <Route path={"/Tweeter/auth/profile/"} element={<ProtectedProfileRoute />}>
          <Route path="" element={<Profile />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
