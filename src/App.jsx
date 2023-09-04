import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Error from "./components/Error";
import MainHeader from "./components/MainHeader";

export default function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<MainHeader />}>
            <Route index element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Login" element={<Login />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}