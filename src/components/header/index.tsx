import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";


import "./style.css";

function Header() {
    const [isSearchInputOpen, setIsSearchInputOpen] = useState(false);
  
    function openSearchInput() {
      setIsSearchInputOpen(!isSearchInputOpen);
    }
  
    return (
      <main className="main">
        <header className="header">
          <img src="logo.png" alt="" />
          <nav className="navbar">
            <a href="#home">home</a>
            <a href="#features">features</a>
            <a href="#products">products</a>
            <a href="#categories">home</a>
          </nav>
  
          <div className="icons">
            <button id="menu-btn">
              <GiHamburgerMenu />
            </button>
            <button id="perfil">
              <IoPersonOutline />
            </button>
            <button id="search-btn" onClick={openSearchInput}>
              <BsSearch />
            </button>
            
            
          </div>
        </header>
  
        {isSearchInputOpen && (
              <form action="" className="search-form">
                <input
                  type="search"
                  id="search-box"
                  placeholder="procure aqui..."
                />
                <label className="fas fa-search">
                  {" "}
                  <BsSearch />
                </label>
              </form>
            )} 
      </main>
      
    );
  }
  
  export default Header