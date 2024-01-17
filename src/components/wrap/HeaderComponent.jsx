import React, { useState } from "react";
import { useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import HomeHeaderComponent from "./HomeHeaderComponent";

export default function HeaderComponent() {

  const onClickLogOut = (e)=>{
    e.preventDefault();
    sessionStorage.removeItem("loginId");
    navigate("/");
  }
  const navigate = useNavigate();

  const location = useLocation();

  return (
      <header id="header">
        <div className="container">
          <div className="gap">
            <div className="content">
              <div className="row1">
                <div className="container">
                  <ul>
                    <li>
                      <Link to="/service" className="row1-link">
                        고객센터
                      </Link>
                    </li>
                    <li>
                      <Link to="/interest" className="row1-link">
                        관심상품
                      </Link>
                    </li>
                    <li>
                      <Link to="/alarm" className="row1-link">
                        알림
                      </Link>
                    </li>
                    {sessionStorage.getItem("loginId")!==null ? (
                      <li>
                        <Link to="/home" className="row1-link"
                        onClick={onClickLogOut}>
                          로그아웃
                        </Link>
                      </li>
                    ) : (
                      <li>
                        <Link to="/login" className="row1-link">
                          로그인
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              <div className="row2">
                <div className="container">
                  <div className="logo-box">
                    <Link to="/home">
                      <img src="./img/logo.svg" alt="" />
                    </Link>
                  </div>
                  <div className="nav-box">
                    <ul>
                      <li>
                        <Link to="/home">HOME</Link>
                      </li>
                      <li>
                        <Link to="/style">STYLE</Link>
                      </li>
                      <li>
                        <Link to="/shop">SHOP</Link>
                      </li>
                      <li>
                        <Link to="/my">MY</Link>
                      </li>
                      <li>
                        <Link to="/search">
                          <img src="./img/search.svg" alt="" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {location.pathname==="/home"? <HomeHeaderComponent/>: ""}
              {location.pathname==="/main"? <HomeHeaderComponent/>: ""}
              {location.pathname==="/rank"? <HomeHeaderComponent/>: ""}
              {location.pathname==="/man"? <HomeHeaderComponent/>: ""}
              {location.pathname==="/woman"? <HomeHeaderComponent/>: ""}
              {location.pathname==="/brand"? <HomeHeaderComponent/>: ""}
              {location.pathname==="/"? <HomeHeaderComponent/>: ""}
            </div>
          </div>
        </div>
      </header>
  );
}
