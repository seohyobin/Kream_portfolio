import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.scss";
import axios from "axios";

export default function LogInComponent({openJoinModal,fnSetIsLogin}) {
  const [login, setLogin] = useState({
    user_id: "",
    user_pw: "",
  });
  useEffect(()=>{
    if(sessionStorage.getItem("loginId")!==null){
      navigate("/my", { replace: true })
    }})
  const navigate = useNavigate();
  const onChangeUserId = (e) => {
    const { value } = e.target;
    if(value.length>5){
      setLogin({
        ...login,
        user_id: value,
      });
    } else {
      setLogin({
        ...login,
        user_id: "",
      });
    }

  };
  const onChangeUserPw = (e) => {
    const { value } = e.target;
    if(value.length>5){
      setLogin({
        ...login,
        user_pw: value,
      });
    } else {
      setLogin({
        ...login,
        user_pw: "",
      });
    }
  };

  const onClickLogin = (e) => {
    e.preventDefault();

    if(login.user_id===""){
      openJoinModal("아이디를 입력해주세요.")
    } else if(login.user_pw===""){
      openJoinModal("비밀번호를 입력해주세요.")
    }

    let loginData = new URLSearchParams();
    loginData.append("user_id", login.user_id);
    loginData.append("user_pw", login.user_pw);
    axios({
      url: "http://janeseo0530.cafe24.com/JSP/kream_user_login.jsp",
      method: "POST",
      data: {},
      params: loginData,
    })
      .then((res) => {
        if(res.data===1){
          openJoinModal("로그인 되었습니다.");
          sessionStorage.setItem("loginId", login.user_id);
          fnSetIsLogin();
          navigate("/");


        } else if(res.data===0){
          openJoinModal("비밀번호가 틀렸습니다.")
        } else if(res.data===-1){
          openJoinModal("없는 아이디입니다.")
        } else {
          openJoinModal("잘못된 접근입니다. 다시 확인해주세요.")
        }
      })
      .catch((e) => {});
  };

  return (
    <section id="login">
      <div className="container">
        <div className="gap">
          <div className="title hide">로그인페이지</div>
          <div className="content">
            <form action="">
              <ul>
                <li>
                  <h2>
                    <img src="./img/login-title.png" alt="" />
                  </h2>
                </li>
                <li>
                  <label htmlFor="userId">이메일주소</label>
                  <input
                    type="text"
                    name="user_id"
                    id="userId"
                    placeholder="예) kream@kream.co.kr"
                    autoComplete="off"
                    onChange={onChangeUserId}
                    maxLength={16}
                  />
                </li>
                <li>
                  <label htmlFor="userPw">비밀번호</label>
                  <input
                    type="password"
                    name="user_pw"
                    id="userPw"
                    autoComplete="off"
                    onChange={onChangeUserPw}
                    maxLength={16}
                  />
                </li>
                <li>
                  <button type="submit" onClick={onClickLogin} className={`login-btn ${login.user_id!=="" && login.user_pw!==""? " on":""}`}>
                    로그인
                  </button>
                </li>
                <li>
                  <Link to="/join">이메일 가입</Link>
                  <Link to="/findEmail">이메일 찾기</Link>
                  <Link to="/findPw">비밀번호 찾기</Link>
                </li>
                <li>
                  <button>
                    <img src="./img/logo-naver.svg" alt="" />
                    네이버로 로그인
                  </button>
                </li>
                <li>
                  <button>
                    <img src="./img/logo-apple.svg" alt="" />
                    Apple로 로그인
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
