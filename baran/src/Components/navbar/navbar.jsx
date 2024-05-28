import * as React from "react";
import heart from './../../images/icons/arcticons--heart.svg'
import cart from './../../images/icons/mdi-light--cart.svg'
import './navbar.css'
import { NavLink } from "react-router-dom";
import { ABOUT_ROUTE, BASKET_ROUTE, CATEGORIES_ROUTE, CONTACTS_ROUTE, PARTNER_ROUTE, SHOP_ROUTE, NOT_ROUTE } from "../../utils/consts";

function Navbar() {
  return (
    <header className="headerbeku">
      <div className="header-wrapperbeku">
        <div className="logo-containerbeku">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/37d8ec3b744038d88585bb8543bc8ea1b3d9e4fcac032e7ef712384ca66d48dc?apiKey=145a614dc8264552af1ec45aa2fef7a9&"
            className="logobeku"
            alt="Logobeku"
          />
          <NavLink span className="site-namebeku" to ={SHOP_ROUTE}>SmartShop</NavLink>
        </div>
        <form className="search-formbeku">
          <input
            id="searchInput"
            type="text"
            className="search-inputbeku"
            placeholder="Search Product..."
            aria-label="Search Product"
          />
          <button type="submit" className="search-buttonbeku">
            Search
          </button>
        </form>
        <div className="user-actionsbeku">
          <img
            loading="lazy"
            src={heart}
            className="user-iconbeku"
            alt="User"
          />
          <NavLink className="cart-containerbeku" to={BASKET_ROUTE}>
            <img
              loading="lazy"
              src={cart}
              className="cart-iconbeku"
              alt="Cart"
            />
            <span className="cart-countbeku">15</span>
          </NavLink>
          <NavLink className="not-container" to={NOT_ROUTE}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d1f8ca0f1468c80a20cda12236fe44625115dd889193f5daf60d0c1b9a93136?apiKey=145a614dc8264552af1ec45aa2fef7a9&"
            className="notification-iconbeku"
            alt="Notifications"
          />
          </NavLink>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footerbeku">
      <div className="footer-wrapperbeku">
        <nav className="nav-linksbeku">
          <NavLink href="#categories" className="nav-linkbeku" to={CATEGORIES_ROUTE}>
            Categories
          </NavLink>
          <NavLink href="about.jsx" className="nav-linkbeku" to={ABOUT_ROUTE}>
            About
          </NavLink>
          <NavLink href="#contacts" className="nav-linkbeku" to={CONTACTS_ROUTE}>
            Contacts
          </NavLink>
        </nav>
        <div className="become-partnerbeku">
          <NavLink href="#partner" className="partner-linkbeku" to={PARTNER_ROUTE}>
            Become a Partner
          </NavLink>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/93e32f5e385847444c5cf4e6cf14f2fc7b9b448bb50d839d387bc9b03ccf4bd1?apiKey=145a614dc8264552af1ec45aa2fef7a9&"
            className="partner-iconbeku"
            loading="lazy"
            alt="Partner"
          />
        </div>
      </div>
    </footer>
  );
}

export default function Components() {
  return (
    <>
      <Navbar />
      <main>
        <Footer />
      </main>
    </>
  );
}