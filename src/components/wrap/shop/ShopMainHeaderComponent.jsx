import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import $ from 'jquery';

export default function ShopHeaderComponent(){



    React.useEffect(()=>{
        $('.nav-top-name').on({
            click(){
                $('.nav-top-name').removeClass('on');
                $(this).addClass('on');

            }
        })
    })


    return (
    <>
 <div id="wrap">
        <div className="container2">
          <div className="title-top">
            <h1>SHOP</h1>
          </div>
          <div className="title-nav">
            <ul className="nav-wrap">
              <li className="nav-list list1">
                <Link to="./main">
                  <span className="nav-top-name on">전체</span>
                </Link>
              </li>
              <li className="nav-list">
                <Link to="./luxury">
                  <span className="nav-top-name">럭셔리</span>
                </Link>
              </li>
              <li className="nav-list">
                <Link to="./shoes">
                  <span className="nav-top-name">신발</span>
                </Link>
              </li>
              <li className="nav-list">
                <Link to="./outer">
                  <span className="nav-top-name">아우터</span>
                </Link>
              </li>
              <li className="nav-list">
                <Link to="./top">
                  <span className="nav-top-name">상의</span>
                </Link>
              </li>
              <li className="nav-list">
                <Link to="./bottom">
                  <span className="nav-top-name">하의</span>
                </Link>
              </li>
              <li className="nav-list">
                <Link to="./bag">
                  <span className="nav-top-name">가방</span>
                </Link>
              </li>
              <li className="nav-list">
                <Link to="./purse">
                  <span className="nav-top-name">지갑</span>
                </Link>
              </li>
              <li className="nav-list">
                <Link to="./watch">
                  <span className="nav-top-name">시계</span>
                </Link>
              </li>
              <li className="nav-list">
                <Link to="./goods">
                  <span className="nav-top-name">패션잡화</span>
                </Link>
              </li>
              <li className="nav-list">
                <Link to="./collect">
                  <span className="nav-top-name">컬렉터블</span>
                </Link>
              </li>
              <li className="nav-list">
                <Link to="./beauty">
                  <span className="nav-top-name">뷰티</span>
                </Link>
              </li>
              <li className="nav-list">
                <Link to="./tech">
                  <span className="nav-top-name">테크</span>
                </Link>
              </li>
              <li className="nav-list">
                <Link to ="./camping">
                  <span className="nav-top-name">캠핑</span>
                </Link>
              </li>
              <li className="nav-list">
              <Link to ="./living">
                  <span className="nav-top-name">가구/리빙</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
        <Outlet/>
        </>
    );
};
