import React from 'react';
import { Link, Route, Routes } from "react-router-dom";
import MainWrapComponent from './shop_main/MainWrapComponent';
import LuxuryWrapComponent from './shop_luxury/LuxuryWrapComponent'
import ShoesWrapComponent from './shop_shoes/ShoesWrapComponent';
import OuterWrapComponent from './shop_outer/OuterWrapComponent';
import TopWrapComponent from './shop_top/TopWrapComponent';
import BottomWrapComponent from './shop_bottom/BottomWrapComponent';
import BagWrapComponent from './shop_bag/BagWrapComponent';
import PurseWrapComponent from './shop_purse/PurseWrapComponent';
import WatchWrapComponent from './shop_watch/WatchWrapComponent';
import GoodsWrapComponent from './shop_goods/GoodsWrapComponent';
import CollecWrapComponent from './shop_collec/CollecWrapComponent';
import BeautyWrapComponent from './shop_beauty/BeautyWrapComponent';
import TechWrapComponent from './shop_tech/TechWrapComponent';
import CampingWrapComponent from './shop_camping/CampingWrapComponent';
import ShopDatailComponent from './datail/shop_datail/ShopDatailComponent';
import ShopDatailComponent1 from './datail/shop_datail/ShopDatailComponent1';
import axios from 'axios';
import DetailHeaderComponent from './datail/shop_datail/DetailHeaderComponent';
import DetailHeaderComponent1 from './datail/shop_datail/DetailHeaderComponent1';
import LivingWrapComponent from './shop_living/LivingWrapComponent';
import ShopMainHeaderComponent from './shop/ShopMainHeaderComponent';
import $ from 'jquery';

export default function ShopComponent({setViewProduct,local}) {

  const [product, setProduct] = React.useState({
    allProduct: [],
  });


  React.useEffect(() => {
    axios({
      url: './data/shop_all_product.json',
      method: 'GET'
    })
      .then((res) => {
        //console.log(`res.data ${res.data}`);

        if (res.status === 200) {
          setProduct({
            ...product,
            allProduct: res.data.allProduct
          })
        }

      })
      .catch((err) => {
        console.log(`err ${err}`)
      })
  }, [])


  const [headerOn, setHeaderOn] = React.useState(true);

  const [fff, setFFF] = React.useState(true);

  const headerDisable = ()=>{
    setFFF(false);
  }

  React.useEffect(()=>{
    $('.nav-top-name').on({
        click(){
            $('.nav-top-name').removeClass('on');
            $(this).addClass('on');

        }
    })
},[])


  return (

    <>
      {fff &&

        <div id="wrap3">
          <div className="container4">
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
                  <Link to="./camping">
                    <span className="nav-top-name">캠핑</span>
                  </Link>
                </li>
                <li className="nav-list">
                  <Link to="./living">
                    <span className="nav-top-name">가구/리빙</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>}


      <Routes>
        <Route index element={<MainWrapComponent setViewProduct={setViewProduct}  />} />
        <Route path="main" element={<MainWrapComponent allProduct={product.allProduct} setViewProduct={setViewProduct}/>} />
        <Route path="luxury" element={<LuxuryWrapComponent />} />
        <Route path="shoes" element={<ShoesWrapComponent />} />
        <Route path="outer" element={<OuterWrapComponent />} />
        <Route path="top" element={<TopWrapComponent />} />
        <Route path="bottom" element={<BottomWrapComponent />} />
        <Route path="bag" element={<BagWrapComponent />} />
        <Route path="purse" element={<PurseWrapComponent />} />
        <Route path="watch" element={<WatchWrapComponent />} />
        <Route path="goods" element={<GoodsWrapComponent />} />
        <Route path="collect" element={<CollecWrapComponent />} />
        <Route path="beauty" element={<BeautyWrapComponent />} />
        <Route path="tech" element={<TechWrapComponent />} />
        <Route path="camping" element={<CampingWrapComponent />} />
        <Route path="living" element={<LivingWrapComponent />} />
        <Route path="main/:id" element={<ShopDatailComponent local={local} allProduct={product.allProduct} isTopHeader={product.isTopHeader}  headerDisable={headerDisable}/>} />
        <Route path="main/:id" element={<DetailHeaderComponent local={local} allProduct={product.allProduct} />} />
        <Route path="viewed/:id" element={<ShopDatailComponent1 local={local} allProduct={product.allProduct} isTopHeader={product.isTopHeader}  headerDisable={headerDisable}/>} />
        <Route path="viewed/:id" element={<DetailHeaderComponent1 local={local} allProduct={product.allProduct} />} />
      </Routes>
    </>
  );
};

