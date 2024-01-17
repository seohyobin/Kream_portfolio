import React from 'react';

export default function ShopHeaderComponent(){
    return (
        <div id='wrap'>
            <div className="container">
                <div className="top-header">
                    <div className="inner-box">
                        <ul className="inner">
                            <li className='inner-list'><a href="!#"> 고객센터 </a></li>
                            <li className='inner-list'><a href="!#"> 관심상품  </a></li>
                            <li className='inner-list'><a href="!#">  알림  </a></li>
                            <li className='inner-list'><a href="!#">  로그인 </a></li>
                        </ul>
                    </div>
                </div>
                <div className="main-inner">
                    <h1>
                        <a href="!#"><img src="./images/shop_main_all/logo.svg" alt="" /></a>
                    </h1>
                    <div className="right-box">
                        <div className="right-content">
                            <ul className="content-wrap">
                                <li className="content-list"><a href="!#"> HOME </a></li>
                                <li className="content-list"><a href="!#"> STYLE </a></li>
                                <li className="content-list"><a href="!#"> SHOP </a></li>
                                <li className="content-list"><a href="!#"> MY </a></li>
                                <li className="content-list"><a href="!#"><img src="./images/shop_main_all/icon-search-black.svg" alt="" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="title-top">
                    <h1>SHOP</h1>
                </div>
                <div className="title-nav">
                    <ul className="nav-wrap">
                        <li className="nav-list list1"><a href="!#"><span className='nav-top-name'> 전체 </span></a></li>
                        <li className="nav-list"><a href="!#"><span className='nav-top-name'> 럭셔리 </span></a></li>
                        <li className="nav-list"><a href="!#"><span className='nav-top-name'> 신발 </span></a></li>
                        <li className="nav-list"><a href="!#"><span className='nav-top-name'>아우터</span></a></li>
                        <li className="nav-list"><a href="!#"><span className='nav-top-name'>상의</span></a></li>
                        <li className="nav-list"><a href="!#"><span className='nav-top-name'>하의</span></a></li>
                        <li className="nav-list"><a href="!#"><span className='nav-top-name'>가방</span></a></li>
                        <li className="nav-list"><a href="!#"><span className='nav-top-name'>지갑</span></a></li>
                        <li className="nav-list"><a href="!#"><span className='nav-top-name'>시계</span></a></li>
                        <li className="nav-list"><a href="!#"><span className='nav-top-name'>패션잡화</span></a></li>
                        <li className="nav-list"><a href="!#"><span className='nav-top-name'>컬렉터블</span></a></li>
                        <li className="nav-list"><a href="!#"><span className='nav-top-name'>뷰티</span></a></li>
                        <li className="nav-list"><a href="!#"><span className='nav-top-name'>테크</span></a></li>
                        <li className="nav-list"><a href="!#"><span className='nav-top-name'>캠핑</span></a></li>
                        <li className="nav-list"><a href="!#"><span className='nav-top-name'>가구/리빙</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
