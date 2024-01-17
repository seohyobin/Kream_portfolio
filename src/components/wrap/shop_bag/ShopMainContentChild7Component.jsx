import React from 'react';
//import './css/shop_main_content.css';

export default function ShopMainContent7ChildComponent({bag}){
    return (
    <div className="right-product-wrap">
        <ul className='product-list'>
          

            { 
                bag.map((item)=>{
                        return(
                            <li className='p-list'>
                            <a className='product-a' href="!#">
                            <div className="img-box">
                                <img src={`../images/bag_product/${item.img}`} alt="" />
                            </div>
                            <div className="title-box">
                                <h2> {item.brand} </h2>
                                <p className='main-name'>{item.descE}</p>
                                <p className='desc'>{item.descK}</p>
                                <div className="deliver">
                                    <img src="../images/shop_main_all/a_82699e0f38f24003897bcfc6ee5c84eb.png" alt="" />
                                    <span>빠른배송</span>
                                </div>
                                <div className="price-wrap">
                                    <p className='amount'> {item.price}</p>
                                    <p className='discribe'>즉시 구매가</p>
                                </div>
                                <div className="action-wish-review">
                                    <span className='wish-img'><img src="../images/shop_main_all/wish-list-grey.svg" alt="" /></span>
                                    <span className='wish-content'>{item.wish}</span>
                                    <span className='review-img' ><img src="../images/shop_main_all/review-grey.svg" alt="" /></span>
                                    <span  className='review-content'>{item.review}</span>
                                </div>
                            </div>
                        </a>
                        </li>
                        )
                    })
                }
           
        </ul>
    </div>

        

    );
};

