import React from 'react';
import $ from 'jquery';

export default  function ShopMainContentNav2Component ({collection}){

    return (


        
        <div className="left-box box4">
        <a href="!#" className='category-btn category4'>
            <div className="title-box">
                <span>컬렉션</span>
                <p className='cata-all all4'>모든 컬렉션</p>
            </div>
            <div className="icon-box">
                <img src="./images/shop_left_nav/20230519_105043.png" alt="" />
            </div>
        </a>
    <div className="sub sub4">
            <ul>
                {
                collection.map((item)=>{
                    return(
                    <li>
                        <label>
                            <input type="checkbox" name={item.name} id={item.id} value={item.value} />
                            &nbsp; {item.value}
                        </label>
                    </li>
                )
                })

                
                }

            </ul>
        </div>
    </div>
    );
};

