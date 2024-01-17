import React from 'react';
import ShopMainContent4Component from './ShopMainContent4Component';
import ShopHeaderSlide4Component from './ShopHeaderSlide4Component';

export default function OuterWrapComponent(){
    return (
        <div id='wrap'>
            <ShopHeaderSlide4Component/>
            <ShopMainContent4Component/>
        </div>
    );
};

