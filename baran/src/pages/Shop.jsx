import React from "react";
import './Shop.css'
import card from './../images/Sale card.svg'
import categ from './../images/Catergory card.svg'

function Shop() {
  return (
    <>
      <section className="popular-sales"> 
        <h2 className="heading">Popular Sales</h2> 
            <div className="view-more-container"> 
              <button className="view-more">View More</button> 
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/365c896af0c331c3bac4d78633897473db8dc6de805a186777e0d9ce2e74017e?apiKey=145a614dc8264552af1ec45aa2fef7a9&" className="arrow-icon" alt="" /> 
            </div> 
      </section> 
      <div className="popular">
        <div className="cards">
        <img
            loading="lazy"
            src={card}
            className="canopoly"
            alt="cat"
          />
          <img
            loading="lazy"
            src={card}
            className="canopoly"
            alt="cat"
          />
          <img
            loading="lazy"
            src={card}
            className="canopoly"
            alt="cat"
          />
          <img
            loading="lazy"
            src={card}
            className="canopoly"
            alt="cat"
          />
        </div>
      </div>
      <header className="header">
          <h1 className="title">Categories</h1>
      </header>
      <div className="popularbek">
        <div className="cardsbek">
        <img
            loading="lazy"
            src={categ}
            className="canopolybek"
            alt="eg"
          />
          <img
            loading="lazy"
            src={categ}
            className="canopolybek"
            alt="eg"
          />
          <img
            loading="lazy"
            src={categ}
            className="canopolybek"
            alt="eg"
          />
          <img
            loading="lazy"
            src={categ}
            className="canopolybek"
            alt="eg"
          />
        </div>
      </div>
      </>
  )
}
export default Shop;