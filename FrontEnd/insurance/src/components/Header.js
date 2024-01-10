import MainLogo from "../images/logo2.jpg";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate, useLocation } from "react-router-dom";
import { setUser, releaseUser } from "../redux/LoginSlice";
import { Button } from "antd";
import { setPackage, releasePackage } from "../redux/ChosenSlice";
import { set, release } from "../redux/PackageSlice";
import { setQuote, releaseQuote } from "../redux/QuotationSlice";
import { useNavigate } from "react-router-dom";

function Header() {
  const location = useLocation();
  const isCustomerPage = location.pathname.startsWith("/customer");
  const isHomePage = location.pathname === "/home";
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logout() {
    dispatch(releaseUser());
    dispatch(releasePackage());
    dispatch(release());
    dispatch(releaseQuote());
    user = "";
    navigate("/home");
  }

  // useEffect(() => {}, []);

  if (user.user === "") {
    return (
      <header id="header" class="fixed-top">
        <div class="container d-flex align-items-center justify-content-between">
          <h1 class="logo">
            <div class="container">
              <img src={MainLogo} width="50" height="50" />
              &nbsp;
              <Link to="/home">Insurance</Link>
              {/* <a class="navbar-brand" href="#"> */}
              {/* <img src={MainLogo} width="80" height="80"/> */}
              {/* </a> */}
            </div>
            {/* <a href="index.html">E-Insuarnace</a> */}
          </h1>

          <nav id="navbar" class="navbar">
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <u>
                  <a class="nav-link scrollto" href="#about">
                    About
                  </a>
                </u>
              </li>
              {/* <li><a class="nav-link scrollto" href="#services">Services</a></li> */}
              {/* <li><a class="nav-link scrollto o" href="#portfolio">Portfolio</a></li> */}
              {/* <li><a class="nav-link scrollto" href="#team">Team</a></li> */}
              {/* <li><a class="nav-link scrollto" href="#pricing">Pricing</a></li> */}
              <li class="dropdown">
                <a href="#">Search by Insurance</a>
                <ul>
                  <li>
                    <Link to="/health">Health Insurance</Link>
                  </li>
                  <li class="dropdown">
                    <Link to="/vehicle">Vehicle Insurance</Link>
                    <i class="bi bi-chevron-right"></i>

                    <li>
                      <Link to="/rent">Renters Insurance</Link>
                    </li>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/">
                  <a class="nav-link scrollto" href="#contact">
                    Contact
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/quotes">Get quotes</Link>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    );
  } else if (user.user.role === "CUSTOMER") {
    return (
      <header id="header" class="fixed-top">
        <div class="container d-flex align-items-center justify-content-between">
          <h1 class="logo">
            <div class="container">
              <img src={MainLogo} width="50" height="50" />
              &nbsp;
              <Link to="/customer">Insurance</Link>
            </div>
            {/* <a href="index.html">E-Insuarnace</a> */}
          </h1>

          <nav id="navbar" class="navbar">
            <ul>
              <li>
                <Link to="/customer">Home</Link>
              </li>
              <li class="dropdown">
                <a href="#">Search by Insurance</a>
                <ul>
                  <li>
                    <Link to="/health">Health Insurance</Link>
                  </li>
                  <li class="dropdown">
                    <Link to="/vehicle">Vehicle Insurance</Link>
                    <i class="bi bi-chevron-right"></i>
                    <li>
                      <Link to="/rent">Renters Insurance</Link>
                    </li>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/quotes">Get quotes</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/policy">Policy</Link>
              </li>
              <li>
                <Link onClick={logout}>Logout</Link>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    );
  } else {
    return (
      <header id="header" class="fixed-top">
        <div class="container d-flex align-items-center justify-content-between">
          <h1 class="logo">
            <div class="container">
              <img src={MainLogo} width="50" height="50" />
              &nbsp;
              <Link to="/">Insurance</Link>
            </div>
          </h1>

          <nav id="navbar" class="navbar">
            <ul>
              <li>
                {/* <Link to="/">Home</Link> */}
                Welcome {user.user.username}
              </li>
              <li>
                <Link to="/home" onClick={logout}>
                  Logout
                </Link>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
