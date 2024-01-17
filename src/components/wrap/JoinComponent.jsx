import React, { useEffect, useRef, useState } from "react";
import "./join.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";



export default function JoinComponent({
  openAddrModal,
  user_addr,
  openFootModal,
  user_foot_size,
  openJoinModal
}) {
  const navigate = useNavigate();
  //회원가입 스테이트
  const [user, setUser] = useState({
    user_id: "",
    isIdError: false,
    isIdMsg: "",
    user_pw: "",
    isPw1Error: false,
    isPw1Msg: "",
    isPw2Error: false,
    isPw2Msg: "",
    user_name: "",
    isNameError: false,
    isNameMsg: "",
    user_email: "",
    isEmailError: false,
    isEmailMsg: "",
    user_hp: "",
    isHpError: false,
    isHpMsg: "",
    user_addr1: "",
    isUser_addr1: false,
    user_addr2: "",
    user_chocheon: "",
    user_foot_size: "선택하세요",
    user_service: [
      "[필수] 만 14세 이상이며 모두 동의합니다.",
      "이용약관 동의",
      "개인정보 수집 및 이용 동의",
      "[선택] 광고성 정보 수신에 모두 동의합니다.",
      "앱 푸시",
      "문자 메세지",
      "이메일",
    ],
    user_accepted: [],
  });


  //주소1 props 스테이트에 저장
  useEffect(() => {
    setUser({
      ...user,
      user_addr1: user_addr,
    });
  }, [user_addr]);
  //주소1 스테이트에 있으면 재검색 보이는 이벤트
  useEffect(() => {
    if (user.user_addr1 !== "") {
      setUser({
        ...user,
        isUser_addr1: true,
      });
    }
  }, [user.user_addr1]);
  //신발 사이즈 프랍스 스테이트 저장
  useEffect(() => {
    setUser({
      ...user,
      user_foot_size: user_foot_size,
    });
  }, [user_foot_size]);

  //인풋요소들 온체인지시에 벨류 스테이트 할당 메서드
  const onChange = (e) => {
    const { value, name } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  // 1. 아이디 입력상자 온체인지 이벤트
  const onChangeUserId = (e) => {
    const { value, name } = e.target;
    const regExp1 = /[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]/g;
    const regExp2 = /^(.){6,16}$/g;
    const regExp3 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g;
    const regExp4 = /[A-Za-z]+[0-9]*/g;
    const regExp5 = /\s/g;

    let isIdError = false;
    let isIdMsg = "";

    if (
      regExp1.test(value) === true ||
      regExp2.test(value) === false ||
      regExp3.test(value) === true ||
      regExp4.test(value) === false ||
      regExp5.test(value) === true
    ) 
    {
      isIdError = true;
      isIdMsg = "6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합";

      setUser({
        ...user,
        user_id: "",
        isIdError: isIdError,
        isIdMsg: isIdMsg,
      });
    } 
    else {
      // if (result.includes(true)) {
      //   isIdError = true;
      //   isIdMsg = "중복된 아이디입니다.";
      //   setUser({
      //     ...user,
      //     user_id: "",
      //     isIdError: isIdError,
      //     isIdMsg: isIdMsg,
      //   });
      // } 
    
        isIdError = false;
        isIdMsg = "";
        setUser({
          ...user,
          user_id: value,
          isIdError: isIdError,
          isIdMsg: isIdMsg,
        });
      }



      // axios({
      //   url: "http://janeseo0530.cafe24.com/JSP/kream_getUserIds.jsp",
      //   method: "GET",
      // }).then((res) => {
      //   const result = res.data.map((item) => item === e.target.value);
      //   if (result.includes(true)) {
      //     isIdError = true;
      //     isIdMsg = "중복된 아이디입니다.";
      //     setUser({
      //       ...user,
      //       user_id: "",
      //       isIdError: isIdError,
      //       isIdMsg: isIdMsg,
      //     });
      //   } else {
      //     isIdError = false;
      //     isIdMsg = "";
      //     setUser({
      //       ...user,
      //       user_id: value,
      //       isIdError: isIdError,
      //       isIdMsg: isIdMsg,
      //     });
      //   }
      // });
    
  };

  // 2. 비밀번호 입력상자 온체인지 이벤트
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
      setUser({
        ...user,
        user_pw: "",
        isPw1Error: isPw1Error,
        isPw1Msg: isPw1Msg,
      });
    } else if (regExp3.test(value) === true) {
      isPw1Error = true;
      isPw1Msg = "한글 사용 불가";
      setUser({
        ...user,
        user_pw: "",
        isPw1Error: isPw1Error,
        isPw1Msg: isPw1Msg,
      });
    } else if (regExp2.test(value) === false || regExp4.test(value) === true) {
      isPw1Error = true;
      isPw1Msg = "영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합";
      setUser({
        ...user,
        user_pw: "",
        isPw1Error: isPw1Error,
        isPw1Msg: isPw1Msg,
      });
    } else if (regExp5.test(value) === true) {
      isPw1Error = true;
      isPw1Msg = "동일한 숫자 3개 이상 연속 사용 불가";
      setUser({
        ...user,
        user_pw: "",
        isPw1Error: isPw1Error,
        isPw1Msg: isPw1Msg,
      });
    } else {
      isPw1Error = false;
      isPw1Msg = "";
      setUser({
        ...user,
        isPw1Error: isPw1Error,
        isPw1Msg: isPw1Msg,
      });
    }
  };
  // 3. 비밀번호확인 입력상자 온체인지 이벤트
  const onChangeUserPw2 = (e) => {
    const { value } = e.target;
    const user_pw1 = document.getElementById("userPw").value;
    console.log(user_pw1);
    let isPw2Error = false;
    let isPw2Msg = "";
    if (value === "") {
      isPw2Error = true;
      isPw2Msg = "비밀번호를 한번 더 입력해 주세요.";
      setUser({
        ...user,
        isPw2Error: isPw2Error,
        isPw2Msg: isPw2Msg,
      });
    } else if (value !== user_pw1) {
      isPw2Error = true;
      isPw2Msg = "동일한 비밀번호를 입력";
      setUser({
        ...user,
        isPw2Error: isPw2Error,
        isPw2Msg: isPw2Msg,
      });
    } else {
      isPw2Error = false;
      isPw2Msg = "";
      setUser({
        ...user,
        user_pw: user_pw1,
        isPw2Error: isPw2Error,
        isPw2Msg: isPw2Msg,
      });
    }
  };
  //4. 이름 입력상자 온체인지 이벤트

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
    setUser({
      ...user,
      isNameError: isNameError,
      isNameMsg: isNameMsg,
      user_name: value,
    });
  };
  //5.이메일 입력상자 온체인지 이벤트
  const onChangeUserEmail = (e) => {
    const { value } = e.target;
    let isEmailError = false;
    let isEmailMsg = "";
    const regExp =
      /^[a-z0-9가-힣ㄱ-ㅎㅏ-ㅣ`~!#$%^&*\-_=+{}|'/?]+(\.)?[a-z0-9가-힣ㄱ-ㅎㅏ-ㅣ`~!#$%^&*\-_=+{}|'/?]*@[a-z0-9가-힣ㄱ-ㅎㅏ-ㅣ`~!#$%^&*\-_=+{}|'/\.?]+\.[a-z]{2,3}$/gi;

    if (value === "") {
      isEmailError = true;
      isEmailMsg = "이메일을 입력해 주세요.";
      setUser({
        ...user,
        user_email: "",
        isEmailError: isEmailError,
        isEmailMsg: isEmailMsg,
      });
    } else if (regExp.test(value) === false) {
      isEmailError = true;
      isEmailMsg = "이메일 형식으로 입력해 주세요.";
      setUser({
        ...user,
        user_email: "",
        isEmailError: isEmailError,
        isEmailMsg: isEmailMsg,
      });
    } else {

      axios({
        url: "http://janeseo0530.cafe24.com/JSP/kream_getUserEmails.jsp",
        method: "GET"
     
      }).then((res) => {
        const result = res.data.map((item) => item === e.target.value);
        console.log(res);
        if (result.includes(true)) {
          isEmailError = true;
          isEmailMsg = "중복된 이메일입니다.";
          setUser({
            ...user,
            user_email: "",
            isEmailError: isEmailError,
            isEmailMsg: isEmailMsg,
          });
        } else {
          isEmailError = false;
          isEmailMsg = "";
          setUser({
            ...user,
            user_email: value,
            isEmailError: isEmailError,
            isEmailMsg: isEmailMsg,
          });
        }
      });
    }
  };
  //6.휴대폰 입력상자 온체인지 이벤트
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
      setUser({
        ...user,
        user_hp: "",
        isHpError: isHpError,
        isHpMsg: isHpMsg,
      });
    } else if (regExp2.test(value) === false) {
      isHpError = true;
      isHpMsg = "잘못된 휴대폰 번호 입니다.";
      setUser({
        ...user,
        user_hp: "",
        isHpError: isHpError,
        isHpMsg: isHpMsg,
      });
    } else {
      isHpError = false;
      isHpMsg = "";
      setUser({
        ...user,
        user_hp: value,
        isHpError: isHpError,
        isHpMsg: isHpMsg,
      });
    }
  };
  //7. 주소 입력상자 온클릭 이벤트
  const onClickUserAddr = (e) => {
    openAddrModal();
  };
  // 8. 주소 입력상자 온 체인지 이벤트
  const onChangeUserAddr1 = (e) => {
    setUser({
      ...user,
      user_addr1: e.target.value,
    });
  };
  // 9. 상세주소 입력상자 온체인지 이벤트
  const onChangeUserAddr2 = (e) => {
    setUser({
      ...user,
      user_addr2: e.target.value,
    });
  };
  //10. 추천인 코드 온체인지 이벤트
  const onChangeUserChocheon = (e) => {
    setUser({
      ...user,
      user_chocheon: e.target.value,
    });
  };
  // 신발 사이즈 입력상자 온클릭 이벤트
  const onClickUserFootSize = (e) => {
    e.preventDefault();
    openFootModal();
  };
  //체크박스 온체인지시에 벨류 스테이트 할당 메서드
  const onChangeUserAccepted = (e) => {
    //해당 체크 박스 선택 시
    if (e.target.checked === true) {
      //필수 전체동의 선택시 3가지 경우의 수
      if (
        e.target.value === "[필수] 만 14세 이상이며 모두 동의합니다." &&
        user.user_accepted.includes("이용약관 동의") === false &&
        user.user_accepted.includes("개인정보 수집 및 이용 동의") === false
      ) {
        setUser({
          ...user,
          user_accepted: [
            ...user.user_accepted,
            "이용약관 동의",
            "개인정보 수집 및 이용 동의",
          ],
        });
      } else if (
        e.target.value === "[필수] 만 14세 이상이며 모두 동의합니다." &&
        user.user_accepted.includes("이용약관 동의") === true &&
        user.user_accepted.includes("개인정보 수집 및 이용 동의") === false
      ) {
        setUser({
          ...user,
          user_accepted: [...user.user_accepted, "개인정보 수집 및 이용 동의"],
        });
      } else if (
        e.target.value === "[필수] 만 14세 이상이며 모두 동의합니다." &&
        user.user_accepted.includes("이용약관 동의") === false &&
        user.user_accepted.includes("개인정보 수집 및 이용 동의") === true
      ) {
        setUser({
          ...user,
          user_accepted: [...user.user_accepted, "이용약관 동의"],
        });
        //필수 첫번째 선택시
      } else if (e.target.value === "이용약관 동의") {
        setUser({
          ...user,
          user_accepted: [...user.user_accepted, "이용약관 동의"],
        });
        //필수 두번째 선택시
      } else if (e.target.value === "개인정보 수집 및 이용 동의") {
        setUser({
          ...user,
          user_accepted: [...user.user_accepted, "개인정보 수집 및 이용 동의"],
        });
        //선택 전체 선택시 경우의 수
      } else if (
        e.target.value === "[선택] 광고성 정보 수신에 모두 동의합니다." &&
        user.user_accepted.includes("앱 푸시") === false &&
        user.user_accepted.includes("문자 메세지") === false &&
        user.user_accepted.includes("이메일") === false
      ) {
        setUser({
          ...user,
          user_accepted: [
            ...user.user_accepted,
            "앱 푸시",
            "문자 메세지",
            "이메일",
          ],
        });
      } else if (
        e.target.value === "[선택] 광고성 정보 수신에 모두 동의합니다." &&
        user.user_accepted.includes("앱 푸시") === true &&
        user.user_accepted.includes("문자 메세지") === false &&
        user.user_accepted.includes("이메일") === false
      ) {
        setUser({
          ...user,
          user_accepted: [...user.user_accepted, "문자 메세지", "이메일"],
        });
      } else if (
        e.target.value === "[선택] 광고성 정보 수신에 모두 동의합니다." &&
        user.user_accepted.includes("앱 푸시") === false &&
        user.user_accepted.includes("문자 메세지") === true &&
        user.user_accepted.includes("이메일") === false
      ) {
        setUser({
          ...user,
          user_accepted: [...user.user_accepted, "앱 푸시", "이메일"],
        });
      } else if (
        e.target.value === "[선택] 광고성 정보 수신에 모두 동의합니다." &&
        user.user_accepted.includes("앱 푸시") === false &&
        user.user_accepted.includes("문자 메세지") === false &&
        user.user_accepted.includes("이메일") === true
      ) {
        setUser({
          ...user,
          user_accepted: [...user.user_accepted, "앱 푸시", "문자 메세지"],
        });
      } else if (
        e.target.value === "[선택] 광고성 정보 수신에 모두 동의합니다." &&
        user.user_accepted.includes("앱 푸시") === true &&
        user.user_accepted.includes("문자 메세지") === true &&
        user.user_accepted.includes("이메일") === false
      ) {
        setUser({
          ...user,
          user_accepted: [...user.user_accepted, "이메일"],
        });
      } else if (
        e.target.value === "[선택] 광고성 정보 수신에 모두 동의합니다." &&
        user.user_accepted.includes("앱 푸시") === false &&
        user.user_accepted.includes("문자 메세지") === true &&
        user.user_accepted.includes("이메일") === true
      ) {
        setUser({
          ...user,
          user_accepted: [...user.user_accepted, "앱 푸시"],
        });
      } else if (
        e.target.value === "[선택] 광고성 정보 수신에 모두 동의합니다." &&
        user.user_accepted.includes("앱 푸시") === true &&
        user.user_accepted.includes("문자 메세지") === false &&
        user.user_accepted.includes("이메일") === true
      ) {
        setUser({
          ...user,
          user_accepted: [...user.user_accepted, "문자 메세지"],
        });
      } else if (e.target.value === "앱 푸시") {
        setUser({
          ...user,
          user_accepted: [...user.user_accepted, "앱 푸시"],
        });
      } else if (e.target.value === "문자 메세지") {
        setUser({
          ...user,
          user_accepted: [...user.user_accepted, "문자 메세지"],
        });
      } else if (e.target.value === "이메일") {
        setUser({
          ...user,
          user_accepted: [...user.user_accepted, "이메일"],
        });
      }

      //해당 체크 박스 해제 시
    } else {
      let user_accepted = [];
      if (e.target.value === "[필수] 만 14세 이상이며 모두 동의합니다.") {
        user_accepted = user.user_accepted.filter((item) => {
          return (
            item !== "이용약관 동의" && item !== "개인정보 수집 및 이용 동의"
          );
        });
        setUser({
          ...user,
          user_accepted: user_accepted,
        });
      } else if (e.target.value === "이용약관 동의") {
        user_accepted = user.user_accepted.filter(
          (item) => item !== e.target.value
        );
        setUser({
          ...user,
          user_accepted: user_accepted,
        });
      } else if (e.target.value === "개인정보 수집 및 이용 동의") {
        user_accepted = user.user_accepted.filter(
          (item) => item !== e.target.value
        );
        setUser({
          ...user,
          user_accepted: user_accepted,
        });
      } else if (
        e.target.value === "[선택] 광고성 정보 수신에 모두 동의합니다."
      ) {
        user_accepted = user.user_accepted.filter((item) => {
          return (
            item !== "앱 푸시" && item !== "문자 메세지" && item !== "이메일"
          );
        });
        setUser({
          ...user,
          user_accepted: user_accepted,
        });
      } else if (e.target.value === "앱 푸시") {
        user_accepted = user.user_accepted.filter(
          (item) => item !== e.target.value
        );
        setUser({
          ...user,
          user_accepted: user_accepted,
        });
      } else if (e.target.value === "문자 메세지") {
        user_accepted = user.user_accepted.filter(
          (item) => item !== e.target.value
        );
        setUser({
          ...user,
          user_accepted: user_accepted,
        });
      } else if (e.target.value === "이메일") {
        user_accepted = user.user_accepted.filter(
          (item) => item !== e.target.value
        );
        setUser({
          ...user,
          user_accepted: user_accepted,
        });
      }
    }
  };
  //온클릭시 하위 약관동의 보여주는 메서드
  const onClickServiceShow = (e) => {
    e.preventDefault();
    e.target.classList.toggle("on");
    e.target.parentNode.nextElementSibling.classList.toggle("on");
  };
  useEffect(()=>{
    const regExpHp = /^(\d{3})(\d{3,4})(\d{4})$/g;
    console.log(user.user_hp.replace(regExpHp, "$1-$2-$3"));

  })
  // 가입하기 버튼 클릭
  const onClickSignUp = (e) => {
    e.preventDefault();
    let cnt = 0;
    user.user_accepted.map((item, idx) => {
      if (item.includes("이용약관 동의")) {
        cnt++;
      } else if (item.includes("개인정보 수집 및 이용 동의")) {
        cnt++;
      }
    });
    if (user.user_id === "") {
      openJoinModal("아이디를 확인해주세요.");
    } else if (user.user_pw === "") {
      openJoinModal("비밀번호를 확인해주세요.");
    } else if (user.user_name === "") {
      openJoinModal("이름을 확인해주세요.");
    } else if (user.user_email === "") {
      openJoinModal("이메일을 확인해주세요.");
    } else if (user.user_hp === "") {
      openJoinModal("휴대폰 번호를 확인해주세요.");
    } else if (user.user_addr1 === "") {
      openJoinModal("주소를 확인해주세요.");
    } else if (user.user_addr2 === "") {
      openJoinModal("상세주소를 확인해주세요.");
    } else if (user.user_hp === "") {
      openJoinModal("휴대폰 번호를 확인해주세요.");
    } else if (cnt !== 2) {
      openJoinModal("필수항목 동의가 필요합니다.");
    } else {
      // 모두 통과되면
      // 전송
      // 휴대폰 표현형식
      // 시작 숫자3자리  (그룹1)  $1
      // 중간 숫자3~4자리(그룹2)  $2
      // 끝   숫자4자리  (그룹3)  $3
      const regExpHp = /^(\d{3})(\d{3,4})(\d{4})$/g; //010-7942-5305   010-348-6441

      //동의한 항목 배열에서 문자열로 구성
      let user_accepted = "";
      user.user_accepted.map((item, idx) => {
        if (idx === user.user_accepted.length - 1) {
          user_accepted += item;
        } else {
          user_accepted += item + ", ";
        }
      });

      let user_my_chocheon_code = "";

      //자신의 추천인 코드 생성
      const generateRandomString = (length) => {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let randomString = "";

        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          randomString += characters.charAt(randomIndex);
        }

        return randomString;
      };

      user_my_chocheon_code = generateRandomString(8);

      //생성된 추천인 코드가 중복되는지 디비에서 검색

      let chocheonData = new URLSearchParams();
      chocheonData.append("user_my_chocheon_code", user_my_chocheon_code);
      axios({
        url: "http://janeseo0530.cafe24.com/JSP/kream_compareMyChocheonCode.jsp",
        method: "POST",
        data: {},
        params: chocheonData
  
      })
        .then((res) => {
          if (res < 0) {
            user_my_chocheon_code = generateRandomString(8);
          }
        })
        .then(() => {
          let formData = new URLSearchParams();
          formData.append("user_id", user.user_id);
          formData.append("user_pw", user.user_pw);
          formData.append("user_name", user.user_name);
          formData.append("user_email", user.user_email);
          formData.append("user_hp", user.user_hp.replace(regExpHp, "$1-$2-$3"));
          formData.append("user_addr", `${user.user_addr1} ${user.user_addr2}`);
          formData.append("user_chocheon", user.user_chocheon);
          formData.append("user_foot_size", user.user_foot_size);
          formData.append("user_accepted", user_accepted);
          formData.append("user_my_chocheon_code", user_my_chocheon_code);
          
          axios({
            url: "http://janeseo0530.cafe24.com/JSP/kream_user_signUp.jsp",
            method: "POST",
            data: {},
            params: formData
          
          })
          .then((res)=>{
            console.log(res.data);
            openJoinModal("회원가입을 축하드립니다.");
            navigate("/login")

          })
          .catch((err)=>{
            console.log(err);
          })
        })
        .catch((err) => {
          console.log(err);
        });
    } //else end 회원정보 데이터 전송
  };

  return (
    <section id="join">
      <div className="container">
        <div className="gap">
          <div className="content">
            <div className="title">
              <h2>회원가입</h2>
            </div>
            <form name="join_form" id="joinForm" action="" method="post">
              <ul>
                <li>
                  <label
                    htmlFor="userId"
                    className={`error-msg${user.isIdError ? " on" : ""}`}
                  >
                    아이디<i>*</i>
                  </label>
                  <input
                    maxLength={16}
                    name="user_id"
                    id="userId"
                    type="text"
                    placeholder="아이디를 입력해주세요"
                    autoComplete="off"
                    onChange={onChangeUserId}
                  />
                  <p className={`error-msg${user.isIdError ? " on" : ""}`}>
                    {user.isIdMsg}
                  </p>
                </li>
                <li>
                  <label
                    htmlFor="userPw"
                    className={`error-msg${user.isPw1Error ? " on" : ""}`}
                  >
                    비밀번호<i>*</i>
                  </label>
                  <input
                    name="user_pw"
                    id="userPw"
                    type="password"
                    placeholder="영문, 숫자, 특수문자 조합 8-16자"
                    autoComplete="off"
                    onChange={onChangeUserPw1}
                  />
                  <p className={`error-msg${user.isPw1Error ? " on" : ""}`}>
                    {user.isPw1Msg}
                  </p>
                </li>
                <li>
                  <label
                    htmlFor="userPw"
                    className={`error-msg${user.isPw2Error ? " on" : ""}`}
                  >
                    비밀번호 확인<i>*</i>
                  </label>
                  <input
                    name="user_pw2"
                    id="userPw2"
                    type="password"
                    placeholder="비밀번호를 한번 더 입력해주세요."
                    autoComplete="off"
                    onChange={onChangeUserPw2}
                  />
                  <p className={`error-msg${user.isPw2Error ? " on" : ""}`}>
                    {user.isPw2Msg}
                  </p>
                </li>
                <li>
                  <label
                    htmlFor="userName"
                    className={`error-msg${user.isNameError ? " on" : ""}`}
                  >
                    이름<i>*</i>
                  </label>
                  <input
                    name="user_name"
                    id="userName"
                    type="text"
                    placeholder="이름을 입력해주세요"
                    autoComplete="off"
                    onChange={onChangeUserName}
                  />
                  <p className={`error-msg${user.isNameError ? " on" : ""}`}>
                    {user.isNameMsg}
                  </p>
                </li>
                <li>
                  <label
                    htmlFor="userEmail"
                    className={`error-msg${user.isEmailError ? " on" : ""}`}
                  >
                    이메일<i>*</i>
                  </label>
                  <input
                    name="user_email"
                    id="userEmail"
                    type="text"
                    placeholder="예)kream@kream.co.kr"
                    autoComplete="off"
                    onChange={onChangeUserEmail}
                  />
                  <p className={`error-msg${user.isEmailError ? " on" : ""}`}>
                    {user.isEmailMsg}
                  </p>
                </li>
                <li>
                  <label
                    htmlFor="userHp"
                    className={`error-msg${user.isHpError ? " on" : ""}`}
                  >
                    휴대폰<i>*</i>
                  </label>
                  <input
                    name="user_hp"
                    id="userHp"
                    type="text"
                    placeholder="숫자만 입력해주세요"
                    autoComplete="off"
                    onChange={onChangeUserHp}
                  />
                  <p className={`error-msg${user.isHpError ? " on" : ""}`}>
                    {user.isHpMsg}
                  </p>
                </li>
                <li>
                  <label htmlFor="userAddr">
                    주소<i>*</i>
                  </label>
                  <input
                    name="user_addr"
                    id="userAddr"
                    type="button"
                    value={
                      user.user_addr1 === "" ? "주소검색" : user.user_addr1
                    }
                    className={`user-addr1${user.isUser_addr1 ? " off" : ""}`}
                    onClick={onClickUserAddr}
                    readOnly={user.isUser_addr1 ? true : false}
                    onChange={onChangeUserAddr1}
                  />
                  {user.isUser_addr1 && <span>재검색</span>}
                </li>
                <li>
                  <label htmlFor="userAddr">
                    상세주소<i>*</i>
                  </label>
                  <input
                    name="user_addr"
                    className="user-addr2"
                    id="userAddr2"
                    type="text"
                    autoComplete="off"
                    onChange={onChangeUserAddr2}
                  />
                </li>
                <li>
                  <label htmlFor="userChocheon">추천인코드</label>
                  <input
                    name="user_chocheon"
                    id="userChocheon"
                    type="text"
                    placeholder="추천인 코드를 입력해주세요"
                    autoComplete="off"
                    onChange={onChangeUserChocheon}
                    maxLength={6}
                  />
                </li>
                <li className="user-foot-li">
                  <label htmlFor="userFootSize">신발 사이즈</label>
                  <input
                    type="button"
                    name="user_foot_size"
                    id="userFootSize"
                    onChange={onChange}
                    onClick={onClickUserFootSize}
                    value={user.user_foot_size}
                  />
                </li>
                <li className="user-philsoo-li">
                  <div className="row1">
                    <input
                      type="checkbox"
                      name="user_philsoo_all"
                      id="userPhilsooAll"
                      onChange={onChangeUserAccepted}
                      value={user.user_service[0]}
                      checked={
                        user.user_accepted.includes("이용약관 동의") &&
                        user.user_accepted.includes(
                          "개인정보 수집 및 이용 동의"
                        )
                      }
                    />
                    <label htmlFor="userPhilsooAll">
                      &#91;필수&#93; 만 14세 이상이며 모두 동의합니다.
                    </label>
                    <i onClick={onClickServiceShow}></i>
                  </div>
                  <div className="row2">
                    <div>
                      <input
                        type="checkbox"
                        name="user_philsoo_1"
                        id="userPhilsoo1"
                        checked={user.user_accepted.includes("이용약관 동의")}
                        onChange={onChangeUserAccepted}
                        value={user.user_service[1]}
                      />
                      <label htmlFor="userPhilsoo1">이용약관동의</label>
                      <span>내용 보기</span>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name="user_philsoo_2"
                        id="userPhilsoo2"
                        checked={user.user_accepted.includes(
                          "개인정보 수집 및 이용 동의"
                        )}
                        onChange={onChangeUserAccepted}
                        value={user.user_service[2]}
                      />
                      <label htmlFor="userPhilsoo2">
                        개인정보 수집 및 이용 동의
                      </label>
                      <span>내용 보기</span>
                    </div>
                  </div>
                </li>
                <li className="user-ad-li">
                  <div className="row1">
                    <input
                      type="checkbox"
                      name="user_ad"
                      id="userAd"
                      value={user.user_service[3]}
                      onChange={onChangeUserAccepted}
                      checked={
                        user.user_accepted.includes("앱 푸시") &&
                        user.user_accepted.includes("문자 메세지") &&
                        user.user_accepted.includes("이메일")
                      }
                    />
                    <label htmlFor="userAd">
                      &#91;선택&#93; 광고성 정보 수신에 모두 동의합니다.
                    </label>
                    <i onClick={onClickServiceShow}></i>
                  </div>
                  <div className="row2">
                    <div>
                      <input
                        type="checkbox"
                        name="user_ad_1"
                        id="userAd1"
                        value={user.user_service[4]}
                        onChange={onChangeUserAccepted}
                        checked={user.user_accepted.includes("앱 푸시")}
                      />
                      <label htmlFor="userAd1">앱 푸시</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name="user_ad_2"
                        id="userAd2"
                        value={user.user_service[5]}
                        onChange={onChangeUserAccepted}
                        checked={user.user_accepted.includes("문자 메세지")}
                      />
                      <label htmlFor="userAd2">문자 메세지</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name="user_ad_3"
                        id="userAd3"
                        value={user.user_service[6]}
                        onChange={onChangeUserAccepted}
                        checked={user.user_accepted.includes("이메일")}
                      />
                      <label htmlFor="userAd3">이메일</label>
                    </div>
                  </div>
                </li>
                <li>
                  <button
                    type="submit"
                    className={`signup-btn ${
                      user.user_id !== "" &&
                      user.user_pw !== "" &&
                      user.user_name !== "" &&
                      user.user_email !== "" &&
                      user.user_hp !== "" &&
                      user.user_addr1 !== "" &&
                      user.user_addr2 !== "" &&
                      user.user_accepted.includes("이용약관 동의") &&
                      user.user_accepted.includes("개인정보 수집 및 이용 동의")
                        ? " on"
                        : ""
                    }`}
                    onClick={onClickSignUp}
                  >
                    가입하기
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
