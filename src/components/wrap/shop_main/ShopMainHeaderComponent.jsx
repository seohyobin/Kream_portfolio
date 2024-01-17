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
        <div id='wrap'>
            <div className="container2">
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
                        <Link to ="/main"><img src="./images/shop_main_all/logo.svg" alt="" /></Link>
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
                        <li className="nav-list list1"><Link to="/main"><span className='nav-top-name on'>전체</span></Link></li>
                        <li className="nav-list"><Link to="/luxury"><span className='nav-top-name'>럭셔리</span></Link></li>
                        <li className="nav-list"><Link to="/shoes"><span className='nav-top-name'>신발</span></Link></li>
                        <li className="nav-list"><Link to ="/outer"><span className='nav-top-name'>아우터</span></Link></li>
                        <li className="nav-list"><Link to ="/top"><span className='nav-top-name'>상의</span></Link></li>
                        <li className="nav-list"><Link to="/bottom"><span className='nav-top-name'>하의</span></Link></li>
                        <li className="nav-list"><Link to ='/bag'><span className='nav-top-name'>가방</span></Link></li>
                        <li className="nav-list"><Link to ='/purse'><span className='nav-top-name'>지갑</span></Link></li>
                        <li className="nav-list"><Link to = '/watch'><span className='nav-top-name'>시계</span></Link></li>
                        <li className="nav-list"><Link to ='/goods'><span className='nav-top-name'>패션잡화</span></Link></li>
                        <li className="nav-list"><Link to = '/collect'><span className='nav-top-name'>컬렉터블</span></Link></li>
                        <li className="nav-list"><Link to = '/beauty'><span className='nav-top-name'>뷰티</span></Link></li>
                        <li className="nav-list"><Link to = '/tech'><span className='nav-top-name'>테크</span></Link></li>
                        <li className="nav-list"><a href="!#"><span className='nav-top-name'>캠핑</span></a></li>
                        <li className="nav-list"><a href="!#"><span className='nav-top-name'>가구/리빙</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <Outlet/>
        </>
    );
};
