import React from 'react';
import ShopMainContentComponent from './ShopMainContentComponent';
import ShopHeaderSlideComponent from './ShopHeaderSlideComponent';
import { Route,Routes } from 'react-router-dom';
import ShopDatailComponent from '../datail/shop_datail/ShopDatailComponent';
import DetailHeaderComponent from '../datail/shop_datail/DetailHeaderComponent'


function MainWrapComponent({allProduct,setViewProduct, local}){
    return (
     
        <div id="wrap">
            <ShopHeaderSlideComponent />
            <ShopMainContentComponent allProduct={allProduct} setViewProduct={setViewProduct}/>
        </div>

        
    );
};

export default MainWrapComponent;