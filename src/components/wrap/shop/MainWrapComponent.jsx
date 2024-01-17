import React from 'react';
import ShopMainContentComponent from './ShopMainContentComponent';
import ShopHeaderSlideComponent from './ShopHeaderSlideComponent';


function MainWrapComponent(){
    return (
        <div id="wrap">
            <ShopHeaderSlideComponent/>
            <ShopMainContentComponent/>
        </div>
    );
};

export default MainWrapComponent;