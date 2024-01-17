import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Navigate,
  Link,
  Outlet,
} from "react-router-dom";
import "./my.scss";
import axios from "axios";
import MyPageComponent from "./MyPageComponent";
import MyUpdateComponent from "./MyUpdateComponent";

export default function MyComponent({openJoinModal}) {
  React.useEffect(() => {
    if (sessionStorage.getItem("loginId") === null) {
      navigate("/login", { replace: true });
    }
  });
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    user_name: "",
    user_email: "",
    user_hp: "",
  });


  useEffect(() => {
    let myData = new URLSearchParams();
    myData.append("user_id", sessionStorage.getItem("loginId"));

    axios({
      url: "http://janeseo0530.cafe24.com/JSP/kream_getUserNameEmail.jsp",
      method: "POST",
      data: {},
      params: myData,
    })
      .then((res) => {
        console.log(res.data);
        setUserData({
          ...userData,
          user_name: res.data.userName,
          user_email: res.data.userEmail,
          user_hp: res.data.userHp,
        });
      })
      .catch((e) => {});
  }, []);

  return (
    <>
      <div id="myPage">
        <div className="container">
          <div className="gap">
            <div className="content">
              <div className="col1">
                <div className="nav">
                  <div className="title">
                    <h3>
                      <Link to="/my">마이 페이지</Link>
                    </h3>
                  </div>
                  <ul>
                    <li>
                      <h4>쇼핑 정보</h4>
                      <ul>
                        <li>
                          <Link>구매 내역</Link>
                        </li>
                        <li>
                          <Link>판매 내역</Link>
                        </li>
                        <li>
                          <Link>보관 판매</Link>
                        </li>
                        <li>
                          <Link>관심 상품</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h4>내 정보</h4>
                      <ul>
                        <li>
                          <Link>로그인 정보</Link>
                        </li>
                        <li>
                          <Link>프로필 관리</Link>
                        </li>
                        <li>
                          <Link>주소록</Link>
                        </li>
                        <li>
                          <Link>결제 정보</Link>
                        </li>
                        <li>
                          <Link>판매 정산 계좌</Link>
                        </li>
                        <li>
                          <Link>현금영수증 정보</Link>
                        </li>
                        <li>
                          <Link>포인트</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <Routes>
                <Route
                  index
                  element={
                    <MyPageComponent
                      user_name={userData.user_name}
                      user_email={userData.user_email}
                    />
                  }
                />
                <Route
                  path="mypage"
                  element={
                    <MyPageComponent
                      user_name={userData.user_name}
                      user_email={userData.user_email}
                    />
                  }
                />
                <Route
                  path="myUpdate"
                  element={
                    <MyUpdateComponent
                      user_name={userData.user_name}
                      user_email={userData.user_email}
                      user_hp={userData.user_hp}
                      openJoinModal={openJoinModal}
                    />
                  }
                />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
