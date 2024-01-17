import React from "react";
import "./footer.scss";


export default function FooterComponent() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="gap">
          <div className="content">
            <div className="row1">
              <div className="left-box">
                <div className="left-txt">
                  <h2>이용안내</h2>
                  <ul>
                    <li>
                      <a href="!#">검수기준</a>
                    </li>
                    <li>
                      <a href="!#">이용정책</a>
                    </li>
                    <li>
                      <a href="!#">패널티 정책</a>
                    </li>
                    <li>
                      <a href="!#">커뮤니티 가이드라인</a>
                    </li>
                  </ul>
                </div>
                <div className="right-txt">
                  <h2>고객지원</h2>
                  <ul>
                    <li>
                      <a href="!#">공지사항</a>
                    </li>
                    <li>
                      <a href="!#">서비스 소개</a>
                    </li>
                    <li>
                      <a href="!#">쇼룸 안내</a>
                    </li>
                    <li>
                      <a href="!#">판매자 방문접수</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right-box">
                <ul>
                  <li>
                    <h2>고객센터</h2>
                    <a href="!#">1588-7813</a>
                  </li>
                  <li>
                    <h3>운영시간 평일 11:00 - 18:00 (토∙일, 공휴일 휴무)</h3>
                  </li>
                  <li>
                    <h3>점심시간 평일 13:00 - 14:00</h3>
                  </li>
                  <li>
                    <h4>1:1 문의하기는 앱에서만 가능합니다.</h4>
                  </li>
                  <div className="button">자주 묻는 질문</div>
                </ul>
              </div>
            </div>
            <div className="row2">
              <div className="left-txt2">
                <ul>
                  <li>
                    <a href="!#">회사소개</a>
                  </li>
                  <li>
                    <a href="!#">인재채용</a>
                  </li>
                  <li>
                    <a href="!#">제휴제안</a>
                  </li>
                  <li>
                    <a href="!#">이용약관</a>
                  </li>
                  <li>
                    <a href="!#" className="alone">
                      개인정보처리방침
                    </a>
                  </li>
                </ul>
                <p>
                  크림 주식회사 · 대표 김창욱<span className="blank"></span>
                  사업자등록번호 : 570-88-01618{" "}
                  <a href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=5708801618">
                    사업자정보확인<span className="blank"></span>
                  </a>{" "}
                  통신판매업 : 제 2021-성남분당C-0093호
                  <span className="blank"></span>
                  사업장소재지 : 경기도 성남시 분당구 분당내곡로 131 판교테크원
                  타워1,<span className="blank"></span>8층 호스팅 서비스 :
                  네이버 클라우드 ㈜
                </p>
              </div>
              <div className="right-txt2">
                <a href="!#">
                  <img src="./images/footer/icon_instargram.svg" alt="" />
                </a>
                <a href="!#">
                  <img src="./images/footer/icon_facebook.svg" alt="" />
                </a>
                <a href="!#">
                  <img src="./images/footer/icon_talk.svg" alt="" />
                </a>
              </div>
            </div>
            <div className="row3">
              <h3>신한은행 채무지급보증 안내</h3>
              <h4>
                {" "}
                당사는 고객님의 현금 결제 금액에 대해 신한은행과 채무지급보증
                계약을 체결하여 안전거래를 보장하고 있습니다.{" "}
                <a href="!#">서비스가입 사실 확인</a>
              </h4>
            </div>
            <div className="row4">
              <div className="left-txt4">
                <p className="txt">
                  크림(주)는 통신판매 중개자로서 통신판매의 당사자가 아닙니다.
                  본 상품은 개별판매자가 등록한 상품으로 상품, 상품정보, 거래에
                  관한 의무와 책임은 각 판매자에게 있습니다. 단, 이용약관 및
                  정책, 기타 거래 체결 과정에서 고지하는 내용 등에 따라 검수하고
                  보증하는 내용에 대한 책임은 크림(주)에 있습니다.
                </p>
              </div>
              <div className="right-txt4">
                <p className="copyright">©KREAMCorp.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
