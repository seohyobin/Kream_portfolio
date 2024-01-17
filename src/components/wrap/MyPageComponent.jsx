import React from 'react';
import { Link } from 'react-router-dom';

export default function MyPageComponent({user_name,user_email}){
  return (
    <div className="col2">
    <ul>
      <li>
        <div className="my-profile">
          <div className="col1">
            <img src="./img/blank_profile.png" alt="" />
          </div>
          <div className="col2">
            <h4>{user_name}</h4>
            <span>{user_email}</span>
            <div className="btn-box">
              <button><Link to="myUpdate">프로필 관리</Link></button>
              <button>내스타일</button>
            </div>
          </div>
          <div className="col3">
            <div className="first-box">
              <h5>일반 회원</h5>
              <span>회원등급</span>
            </div>
            <div className="second-box">
              <h5>0p</h5>
              <span>포인트</span>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div className="storage-list">
          <h4>보관 판매 내역</h4>
          <div className="list">
            <div className="col1">
              <h6>발송요청</h6>
              <span>0</span>
            </div>
            <div className="col2">
              <h6>판매대기</h6>
              <span>0</span>
            </div>
            <div className="col3">
              <h6>판매 중</h6>
              <span>0</span>
            </div>
            <div className="col4">
              <h6>정산완료</h6>
              <span>0</span>
            </div>
          </div>
          <div className="do-storage">
            <div className="img-box">
              <img src="./img/ico-inventory-express.svg" alt="" />
            </div>
            <div className="text-box">
              <h5>보관 신청하기</h5>
              <span>한 번에 신청하고 한 번에 발송하세요.</span>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div className="buy-list">
          <h4>구매 내역</h4>
          <div className="list">
            <div className="col1">
              <h6>전체</h6>
              <span>0</span>
            </div>
            <div className="col2">
              <h6>입찰 중</h6>
              <span>0</span>
            </div>
            <div className="col3">
              <h6>진행 중</h6>
              <span>0</span>
            </div>
            <div className="col4">
              <h6>종료</h6>
              <span>0</span>
            </div>
          </div>
          <div className="past">
            <span>거래내역이 없습니다.</span>
          </div>
        </div>
      </li>
      <li>
        <div className="sell-list">
          <h4>판매 내역</h4>
          <div className="list">
            <div className="col1">
              <h6>전체</h6>
              <span>0</span>
            </div>
            <div className="col2">
              <h6>입찰 중</h6>
              <span>0</span>
            </div>
            <div className="col3">
              <h6>진행 중</h6>
              <span>0</span>
            </div>
            <div className="col4">
              <h6>종료</h6>
              <span>0</span>
            </div>
          </div>
          <div className="past">
            <span>거래내역이 없습니다.</span>
          </div>
        </div>
      </li>
      <li>
        <div className="interest-list">
          <h4>관심 상품</h4>
          <div className="product-container">
            <div className="product">
              <div className="img-box">
                <img src="./img/product_01.jpg" alt="" />
              </div>
              <h6>Asics</h6>
              <p>Asics Gel-Lyte XXX Modern Tokyo</p>
              <span>340,000원</span>
              <i>즉시 구매가</i>
            </div>
            <div className="product">
              <div className="img-box">
                <img src="./img/product_01.jpg" alt="" />
              </div>
              <h6>Asics</h6>
              <p>Asics Gel-Lyte XXX Modern Tokyo</p>
              <span>340,000원</span>
              <i>즉시 구매가</i>
            </div>
            <div className="product">
              <div className="img-box">
                <img src="./img/product_01.jpg" alt="" />
              </div>
              <h6>Asics</h6>
              <p>Asics Gel-Lyte XXX Modern Tokyo</p>
              <span>340,000원</span>
              <i>즉시 구매가</i>
            </div>
            <div className="product">
              <div className="img-box">
                <img src="./img/product_01.jpg" alt="" />
              </div>
              <h6>Asics</h6>
              <p>Asics Gel-Lyte XXX Modern Tokyo</p>
              <span>340,000원</span>
              <i>즉시 구매가</i>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
  );
};

