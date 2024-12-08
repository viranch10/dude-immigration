import React, {useState} from "react";
import classNames from "classnames"

const Navigation = () => {
    const [openNav, setOpenNav] = useState(false)
    const openMobileNav = () => {
        console.log("hreeeeeeeeeeeee");
        if (!openNav) {
            setOpenNav(true)
        } else { 
            setOpenNav(false)
        }
    }
    return (
        <div className="navigation">
                      <div className="fixed-top">
    <nav className="navbar main-nav">
        
      <a href="./index.html" className="logo">
        <div className="logo-img">
          <img src="/images/logo-black-removebg-preview (1).png" alt="logo" className="img" />
        </div>
      </a>
      <div className="mobile-only hamburger"  onClick={openMobileNav} >
      <img className="ham-btn"src="/images/menu.png" />
      <img className="close-btn" src="/images/close.png" />

    </div>
      <ul className="navbar-nav only-desktop">
        <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
            Our Services
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="javascript:void(0);">Student Visa</a>
            <a className="dropdown-item" href="javascript:void(0);">Business Visa</a>
            <a className="dropdown-item" href="javascript:void(0);">Visiting Visa</a>
            <a className="dropdown-item" href="javascript:void(0);">Work Permit</a>
            <a className="dropdown-item" href="javascript:void(0);">Permanent Resident</a>
          </div>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/blog">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/help">Help</a>
        </li>
            <button className="consultation-btn"><h4>Book A Consultation</h4></button>
      </ul>
    </nav>
    <ul className={classNames(
        "mobile-nav",
        openNav ? "display-nav" : "hide-nav"
      )}>
        <div className="mobile-links">
        <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
            Our Services
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="javascript:void(0);">Student Visa</a>
            <a className="dropdown-item" href="javascript:void(0);">Business Visa</a>
            <a className="dropdown-item" href="javascript:void(0);">Visiting Visa</a>
            <a className="dropdown-item" href="javascript:void(0);">Work Permit</a>
            <a className="dropdown-item" href="javascript:void(0);">Permanent Resident</a>
          </div>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/blog">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/help">Help</a>
        </li>
            <button className="consultation-btn"><h4>Book A Consultation</h4></button>
          </div>
      </ul>
  </div>
  <style jsx>{`
        .display-nav {
        display: block;
        position: absolute;
        background: #FFFCED;
        width: -webkit-fill-available;
    }

    .hide-nav {
        display: none;
    }

    .mobile-nav .dropdown-menu {
        position: relative !important;
        box-shadow: none !important;
    }
  
  `}</style>
        </div>
    )
}

export default Navigation