import React, { useState } from "react";
import "./my_update.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function MyUpdateComponent({ user_name, user_email, user_hp, openJoinModal }) {

  const navigate = useNavigate();
  const [changeUserData, setChangeUserData] = useState({
    user_name: "",
    isNameError: false,
    isNameMsg: "",
    user_email: "",
    isEmailError: false,
    isEmailMsg: "",
    user_hp: "",
    isHpError: false,
    isHpMsg: "",
    user_pw: "",
    isPw1Error: false,
    isPw1Msg: "",
  });

  const onChangeUserName = (e) => {
    const { value } = e.target;
    let isNameError = false;
    let isNameMsg = "";
    const regExp = /[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]/g;

    e.target.value = value.replace(regExp, "");
    if (value === "") {
      isNameError = true;
      isNameMsg = "이름을 입력해 주세요.";
    } else {
      isNameError = false;
      isNameMsg = "";
    }
    setChangeUserData({
      ...changeUserData,
      isNameError: isNameError,
      isNameMsg: isNameMsg,
      user_name: value,
    });
  };
  const onChangeUserEmail = (e) => {
    const { value } = e.target;
    let isEmailError = false;
    let isEmailMsg = "";
    const regExp =
      /^[a-z0-9가-힣ㄱ-ㅎㅏ-ㅣ`~!#$%^&*\-_=+{}|'/?]+(\.)?[a-z0-9가-힣ㄱ-ㅎㅏ-ㅣ`~!#$%^&*\-_=+{}|'/?]*@[a-z0-9가-힣ㄱ-ㅎㅏ-ㅣ`~!#$%^&*\-_=+{}|'/\.?]+\.[a-z]{2,3}$/gi;

    if (value === "") {
      isEmailError = true;
      isEmailMsg = "이메일을 입력해 주세요.";
      setChangeUserData({
        ...changeUserData,
        user_email: "",
        isEmailError: isEmailError,
        isEmailMsg: isEmailMsg,
      });
    } else if (regExp.test(value) === false) {
      isEmailError = true;
      isEmailMsg = "이메일 형식으로 입력해 주세요.";
      setChangeUserData({
        ...changeUserData,
        user_email: "",
        isEmailError: isEmailError,
        isEmailMsg: isEmailMsg,
      });
    } else {
      axios({
        url: "http://janeseo0530.cafe24.com/JSP/kream_getUserEmails.jsp",
        method: "GET",
      }).then((res) => {
        const result = res.data.map((item) => item === e.target.value);
        console.log(res);
        if (result.includes(true)) {
          isEmailError = true;
          isEmailMsg = "중복된 이메일입니다.";
          setChangeUserData({
            ...changeUserData,
            user_email: "",
            isEmailError: isEmailError,
            isEmailMsg: isEmailMsg,
          });
        } else {
          isEmailError = false;
          isEmailMsg = "";
          setChangeUserData({
            ...changeUserData,
            user_email: value,
            isEmailError: isEmailError,
            isEmailMsg: isEmailMsg,
          });
        }
      });
    }
  };
  const onChangeUserHp = (e) => {
    const { value } = e.target;
    const regExp1 = /[^0-9]/g;
    const regExp2 = /^01[0-9]{1}[0-9]{3,4}[0-9]{4}$/;
    let isHpError = false;
    let isHpMsg = "";

    // 숫자가 아니면 삭제
    e.target.value = value.replace(regExp1, "");

    if (value === "") {
      isHpError = true;
      isHpMsg = "휴대폰 번호를 입력해 주세요.";
      setChangeUserData({
        ...changeUserData,
        user_hp: "",
        isHpError: isHpError,
        isHpMsg: isHpMsg,
      });
    } else if (regExp2.test(value) === false) {
      isHpError = true;
      isHpMsg = "잘못된 휴대폰 번호 입니다.";
      setChangeUserData({
        ...changeUserData,
        user_hp: "",
        isHpError: isHpError,
        isHpMsg: isHpMsg,
      });
    } else {
      isHpError = false;
      isHpMsg = "";
      setChangeUserData({
        ...changeUserData,
        user_hp: value,
        isHpError: isHpError,
        isHpMsg: isHpMsg,
      });
    }
  };
  const onChangeUserPw1 = (e) => {
    const { value } = e.target;
    let isPw1Error = false;
    let isPw1Msg = "";

    const regExp1 = /^(.){10,16}$/g;
    const regExp2 =
      /([A-Za-z]+[0-9]+)+|([0-9]+[A-Za-z]+)+|([A-Za-z]+[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]+)+|([`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]+[A-Za-z]+)+|([0-9]+[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]+)+|([`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]+[0-9]+)+/g; // true 정상
    const regExp3 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g;
    const regExp4 = /\s/g;
    const regExp5 = /(\d)\1\1/g;

    if (regExp1.test(value) === false) {
      isPw1Error = true;
      isPw1Msg = "최소 10자 이상 입력";
      setChangeUserData({
        ...changeUserData,
        user_pw: "",
        isPw1Error: isPw1Error,
        isPw1Msg: isPw1Msg,
      });
    } else if (regExp3.test(value) === true) {
      isPw1Error = true;
      isPw1Msg = "한글 사용 불가";
      setChangeUserData({
        ...changeUserData,
        user_pw: "",
        isPw1Error: isPw1Error,
        isPw1Msg: isPw1Msg,
      });
    } else if (regExp2.test(value) === false || regExp4.test(value) === true) {
      isPw1Error = true;
      isPw1Msg = "영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합";
      setChangeUserData({
        ...changeUserData,
        user_pw: "",
        isPw1Error: isPw1Error,
        isPw1Msg: isPw1Msg,
      });
    } else if (regExp5.test(value) === true) {
      isPw1Error = true;
      isPw1Msg = "동일한 숫자 3개 이상 연속 사용 불가";
      setChangeUserData({
        ...changeUserData,
        user_pw: "",
        isPw1Error: isPw1Error,
        isPw1Msg: isPw1Msg,
      });
    } else {
      isPw1Error = false;
      isPw1Msg = "";
      setChangeUserData({
        ...changeUserData,
        user_pw: value,
        isPw1Error: isPw1Error,
        isPw1Msg: isPw1Msg,
      });
    }
  };
  const onClickSignUp = (e) => {
    e.preventDefault();
  
    if (changeUserData.user_pw === "") {
      openJoinModal("비밀번호를 확인해주세요."); 
    } else if (changeUserData.user_name === "") {
      openJoinModal("이름을 확인해주세요.");
    } else if (changeUserData.user_email === "") {
      openJoinModal("이메일을 확인해주세요.");
    } else if (changeUserData.user_hp === "") {
      openJoinModal("휴대폰 번호를 확인해주세요.");
    } else {
      // 모두 통과되면
      // 전송
      // 휴대폰 표현형식
      // 시작 숫자3자리  (그룹1)  $1
      // 중간 숫자3~4자리(그룹2)  $2
      // 끝   숫자4자리  (그룹3)  $3
      const regExpHp = /^(\d{3})(\d{3,4})(\d{4})$/g; //010-7942-5305   010-348-6441

      //동의한 항목 배열에서 문자열로 구성


      //생성된 추천인 코드가 중복되는지 디비에서 검색

          let formData = new URLSearchParams();
          let user_id = sessionStorage.getItem("loginId");
          formData.append("user_id", user_id);
          formData.append("user_pw", changeUserData.user_pw);
          formData.append("user_name", changeUserData.user_name);
          formData.append("user_email", changeUserData.user_email);
          formData.append("user_hp", changeUserData.user_hp.replace(regExpHp, "$1-$2-$3"));
          
          axios({
            url: "http://janeseo0530.cafe24.com/JSP/kream_setUserPwNameEmailHp.jsp",
            method: "POST",
            data: {},
            params: formData,
          })
          .then((res)=>{
            console.log(res.data);
            if(res.data===1){
              openJoinModal("회원정보 변경 완료했습니다.");
              navigate("/my")
            } else {
              openJoinModal("회원정보 변경 실패했습니다.");
            }
          })
          .catch((err)=>{
            console.log(err);
          })
        }
    } //else end 회원정보 데이터 전송
  return (
    <div id="myUpdate">
      <div className="container">
        <div className="gap">
          <div className="title">
            <h3>프로필 관리</h3>
          </div>
          <div className="content">
            <ul>
              <li>
                <div className="img-box">
                  <img src="/img/blank_profile.png" alt="" />
                </div>
                <div className="text-box">
                  <div className="name-box">
                    <span>{user_name}</span>
                  </div>
                  <div className="btn-box">
                    <button>이미지 변경</button>
                    <button>삭제</button>
                  </div>
                </div>
              </li>
              <li>
                <form action="">
                  <ul>
                    <li>
                      <h4>프로필 정보</h4>
                    </li>
                    <li>
                      <label htmlFor="userName">프로필 이름</label>
                      <input
                        type="text"
                        name="user_name"
                        id="userName"
                        placeholder={user_name}
                        autoComplete="off"
                        onChange={onChangeUserName}
                      />
                      <p
                        className={`error-msg${
                          changeUserData.isNameError ? " on" : ""
                        }`}
                      >
                        {changeUserData.isNameMsg}
                      </p>
                    </li>
                    <li>
                      <label htmlFor="userName">프로필 이메일</label>
                      <input
                        type="text"
                        name="user_name"
                        id="userName"
                        placeholder={user_email}
                        autoComplete="off"
                        onChange={onChangeUserEmail}
                      />
                      <p
                        className={`error-msg${
                          changeUserData.isEmailError ? " on" : ""
                        }`}
                      >
                        {changeUserData.isEmailMsg}
                      </p>
                    </li>
                    <li>
                      <label htmlFor="userName">휴대폰</label>
                      <input
                        type="text"
                        name="user_name"
                        id="userName"
                        placeholder={user_hp}
                        autoComplete="off"
                        onChange={onChangeUserHp}
                      />
                      <p
                        className={`error-msg${
                          changeUserData.isHpError ? " on" : ""
                        }`}
                      >
                        {changeUserData.isHpMsg}
                      </p>
                    </li>
                    <li>
                      <label htmlFor="userName">비밀번호</label>
                      <input
                        type="password"
                        name="user_name"
                        id="userName"
                        placeholder=""
                        onChange={onChangeUserPw1}
                      />
                      <p
                        className={`error-msg${
                          changeUserData.isPw1Error ? " on" : ""
                        }`}
                      >
                        {changeUserData.isPw1Msg}
                      </p>
                    </li>
                  </ul>
                  <button onClick={onClickSignUp} type="submit">변경</button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
