import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";


import "./style.css";

function Header() {
    const [isSearchInputOpen, setIsSearchInputOpen] = useState(false);
  
    function openSearchInput() {
      setIsSearchInputOpen(!isSearchInputOpen);
      
    }

    const [isCartInputOpen, setIsCartInputOpen] = useState(false);
  
    function openCartInput() {
      setIsCartInputOpen(!isCartInputOpen);
      
    }


    const [isMenuInputOpen, setIsMenuInputOpen] = useState(false);
  
    function openMenuInput() {
      setIsMenuInputOpen(!isMenuInputOpen);
      
    }

    
  
    return (

     

      <main className="main">
        <header className="header">
          <a href="">Logo</a>

          {isMenuInputOpen && (
               <nav className="navbar">
               <a href="#home">home</a>
               <a href="#features">features</a>
               <a href="#products">products</a>
               <a href="#categories">home</a>
             </nav>
               )} 
                <nav className="navbar">
               <a href="#home">home</a>
               <a href="#features">Categorias</a>
               <a href="#products">Produtos</a>
               <a href="#categories">Sobre nos</a>
             </nav>
              
          
          
          <div className="icons">
            <button id="menu-btn" onClick={openMenuInput}>
              <GiHamburgerMenu />
            </button>
            <button className="cart-btn" onClick={openCartInput}>
                <BsCart2 />
            </button>
            <button id="perfil-btn">
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



            {isCartInputOpen && (
               <div className="shopping-cart">
               <div className="Box">
                   <i className="fas fa-trash"></i>
                   <div className="content">
                     <h3>Laranja</h3>
                     <span className="price">R$5.00</span>
                     <span className="quantity">qtd: 1</span>
                   </div>
               </div>
               <div className="total">total : R$5.00</div>
               <a href="#" className="btn">finalizar</a>
             </div>
            )} 







            
      </main>
      
    );
  }
  
  export default Header