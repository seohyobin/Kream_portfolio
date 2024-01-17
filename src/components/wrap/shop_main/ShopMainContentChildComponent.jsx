import React from 'react';
import $ from 'jquery';
import { Route, BrowserRouter , Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
//import './css/shop_main_content.css';

export default function ShopMainContentChildComponent({allProduct,setViewProduct,sorted,sorted1,sorted2,sorted3}){
    
    const backgroundColors = [
        'rgb(246, 238, 237)',
        'rgb(241, 241, 234)',
        'rgb(235, 240, 245)',
        'rgb(244, 244, 244)'
        
      ];

      const getRandomColor=()=>{
        return backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
        
      };

    //   let eee = getRandomColor();
    //     const ItemImg = `backgroundColor: ${eee} `;   
    //     console.log(eee);   


    const onClickProductList=(e, product)=>{
        e.preventDefault();
        let obj ={
            id:product.id,
            brand:product.brand,
            img:`./images/shop_main_all/${product.slide1} `,
            descE:product.descE,
            descK:product.descK,
            price:product.price,
            wish:product.wish,
            review:product.review,
            slide1:product.slide1,
            slide2:product.slide2,
            slide3:product.slide3,
            slide4:product.slide4,
            savedDate:new Date().getTime()
        }
        console.log(obj);   
        setViewProduct(obj);
    }

    return ( 

    <div className="right-product-wrap">
        <ul className='product-list'>
        
            { 
            sorted.length > 0 ? (
                sorted.map((item,id)=>{
                        return(
                        <li className='p-list' key={id}  onClick={(e)=>onClickProductList(e,item)}> 
                            <Link to ={`/shop/main/${item.id}`} className='product-a'  >
                                <div className="img-box" >
                                    <img src={`./images/shop_main_all/${item.slide1}`} alt="" />
                                </div>
                                <div className="title-box">
                                    <h2> {item.brand} </h2>
                                    <p className='main-name'>{item.descE}</p>
                                    <p className='desc'>{item.descK}</p>
                                    <div className="deliver">
                                        <img src="./images/shop_main_all/a_82699e0f38f24003897bcfc6ee5c84eb.png" alt="" />
                                        <span>빠른배송</span>
                                    </div>
                                    <div className="price-wrap">
                                        <p className='amount'> {item.price}</p>
                                        <p className='discribe'>즉시 구매가</p>
                                    </div>
                                    <div className="action-wish-review">
                                        <span className='wish-img'><img src="./images/shop_main_all/wish-list-grey.svg" alt="" /></span>
                                        <span className='wish-content'>{item.wish}</span>
                                        <span className='review-img' ><img src="./images/shop_main_all/review-grey.svg" alt="" /></span>
                                        <span  className='review-content'>{item.review}</span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        )
                })
            ):


            (sorted1.length > 0 ? (
                sorted1.map((item,id)=>{
                        return(
                        <li className='p-list' key={id}  onClick={(e)=>onClickProductList(e,item)}> 
                            <Link to ={`/shop/main/${item.id}`} className='product-a'  >
                                <div className="img-box" >
                                    <img src={`./images/shop_main_all/${item.slide1}`} alt="" />
                                </div>
                                <div className="title-box">
                                    <h2> {item.brand} </h2>
                                    <p className='main-name'>{item.descE}</p>
                                    <p className='desc'>{item.descK}</p>
                                    <div className="deliver">
                                        <img src="./images/shop_main_all/a_82699e0f38f24003897bcfc6ee5c84eb.png" alt="" />
                                        <span>빠른배송</span>
                                    </div>
                                    <div className="price-wrap">
                                        <p className='amount'> {item.price}</p>
                                        <p className='discribe'>즉시 구매가</p>
                                    </div>
                                    <div className="action-wish-review">
                                        <span className='wish-img'><img src="./images/shop_main_all/wish-list-grey.svg" alt="" /></span>
                                        <span className='wish-content'>{item.wish}</span>
                                        <span className='review-img' ><img src="./images/shop_main_all/review-grey.svg" alt="" /></span>
                                        <span  className='review-content'>{item.review}</span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        )
                    })
            ):
            (sorted2.length > 0 ? (
                sorted2.map((item,id)=>{
                        return(
                        <li className='p-list' key={id}  onClick={(e)=>onClickProductList(e,item)}> 
                            <Link to ={`/shop/main/${item.id}`} className='product-a'  >
                                <div className="img-box" >
                                    <img src={`./images/shop_main_all/${item.slide1}`} alt="" />
                                </div>
                                <div className="title-box">
                                    <h2> {item.brand} </h2>
                                    <p className='main-name'>{item.descE}</p>
                                    <p className='desc'>{item.descK}</p>
                                    <div className="deliver">
                                        <img src="./images/shop_main_all/a_82699e0f38f24003897bcfc6ee5c84eb.png" alt="" />
                                        <span>빠른배송</span>
                                    </div>
                                    <div className="price-wrap">
                                        <p className='amount'> {item.price}</p>
                                        <p className='discribe'>즉시 구매가</p>
                                    </div>
                                    <div className="action-wish-review">
                                        <span className='wish-img'><img src="./images/shop_main_all/wish-list-grey.svg" alt="" /></span>
                                        <span className='wish-content'>{item.wish}</span>
                                        <span className='review-img' ><img src="./images/shop_main_all/review-grey.svg" alt="" /></span>
                                        <span  className='review-content'>{item.review}</span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        )
                    })
            ):
            (sorted3.length > 0 ? (
                sorted3.map((item,id)=>{
                        return(
                        <li className='p-list' key={id}  onClick={(e)=>onClickProductList(e,item)}> 
                            <Link to ={`/shop/main/${item.id}`} className='product-a'  >
                                <div className="img-box" style={item.background_color}>
                                    <img src={`./images/shop_main_all/${item.slide1}`} alt="" />
                                </div>
                                <div className="title-box">
                                    <h2> {item.brand} </h2>
                                    <p className='main-name'>{item.descE}</p>
                                    <p className='desc'>{item.descK}</p>
                                    <div className="deliver">
                                        <img src="./images/shop_main_all/a_82699e0f38f24003897bcfc6ee5c84eb.png" alt="" />
                                        <span>빠른배송</span>
                                    </div>
                                    <div className="price-wrap">
                                        <p className='amount'> {item.price}</p>
                                        <p className='discribe'>즉시 구매가</p>
                                    </div>
                                    <div className="action-wish-review">
                                        <span className='wish-img'><img src="./images/shop_main_all/wish-list-grey.svg" alt="" /></span>
                                        <span className='wish-content'>{item.wish}</span>
                                        <span className='review-img' ><img src="./images/shop_main_all/review-grey.svg" alt="" /></span>
                                        <span  className='review-content'>{item.review}</span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        )
                    })
            ):
            (
            allProduct.map((item,id)=>{ 
                
                        return(
                                <li className='p-list' key={id}  onClick={(e)=>onClickProductList(e,item)}> 
                                    <Link to ={`/shop/main/${id}`} className='product-a'  >
                                        <div className="img-box" >
                                            <img src={`./images/shop_main_all/${item.slide1}`} alt="" />
                                        </div>
                                        <div className="title-box">
                                            <h2> {item.brand} </h2>
                                            <p className='main-name'>{item.descE}</p>
                                            <p className='desc'>{item.descK}</p>
                                            <div className="deliver">
                                                <img src="./images/shop_main_all/a_82699e0f38f24003897bcfc6ee5c84eb.png" alt="" />
                                                <span>빠른배송</span>
                                            </div>
                                            <div className="price-wrap">
                                                <p className='amount'> {item.price}</p>
                                                <p className='discribe'>즉시 구매가</p>
                                            </div>
                                            <div className="action-wish-review">
                                                <span className='wish-img'><img src="./images/shop_main_all/wish-list-grey.svg" alt="" /></span>
                                                <span className='wish-content'>{item.wish}</span>
                                                <span className='review-img' ><img src="./images/shop_main_all/review-grey.svg" alt="" /></span>
                                                <span  className='review-content'>{item.review}</span>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                        )
                
            }
            )
            )
            )
            )
            )
            }  
        </ul>
    </div>
        
    );
};

