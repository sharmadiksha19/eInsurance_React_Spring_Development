import MainLogo from "../../images/logo2.jpg";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function AdminHeader() {
  const navigate = useNavigate();

  function logout() {
    navigate("/home");
  }
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

export default AdminHeader;
