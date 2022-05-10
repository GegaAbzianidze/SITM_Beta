import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/index";
import Home from "../Pages";
import Artworks from "../Pages/Artworks";
import Stats from "../Pages/Stats";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Sidebar from "../Sidebar";
import SignIn from "../Pages/SignIn";
import "./bg.css";
import BookShelf from "../Pages/BookShelf";
import WritersPage from "../Pages/WritersPage";

const NavImport = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle} />

        <Navbar toggle={toggle} />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/artworks" element={<Artworks />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/bookshelf" element={<BookShelf />} />
          <Route path="/writer" element={<WritersPage />} />
        </Routes>
      </Router>

      <div className="bg-shape"></div>
      <div className="bg-shape2"></div>
    </>
  );
};

export default NavImport;
