import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import './css/shop_main_content.css';
import ShopMainContentNav2Component from './ShopMainContentNav2Component';
import ShopMainContentChild11Component from './ShopMainContentChild11Component';
import ShopMainContentNavComponent from './ShopMainContentNavComponent';



export default function ShopMainContent11Component(){

    const[state,setState] = React.useState({
        brand:[],
        isOn:true

    })
    const [collect,setCollect] =React.useState({
        collect:[]

    })
    const [collec, setCollec]=React.useState({
        collection:[]
    })

    const getProductAPI=()=>{
        axios({
            url:'../data/collect_product.json',
            method:'GET'
        })
        .then((res)=>{  
            //console.log(res.data);

            if(res.status===200){
                setCollect({
                    ...collect,
                    collect:res.data.collect
                })
            }

        })
        .catch((err)=>{
            console.log(`err ${err}`)
        })
    }
    const getDataAPI2=()=>{
        axios({
            url:'../data/nav_collection.json',
            method:'GET'
        })
        .then((res)=>{  
            console.log(res.data);

            if(res.status===200){
                setCollec({
                    ...collec,
                    collection:res.data.collection
                })
            }

        })
        .catch((err)=>{
            console.log(`err ${err}`)
        })
    }



    const getDateAPI =()=>{
        axios({
            url:'../data/nav_list_brand.json',
            method:'GET'
        })
        .then((res)=>{
            //console.log(res.data);
           if(res.status===200){ 
   
                setState({
                    ...state,
                    brand:res.data.brand
                
                })
           }


        })
        .catch((err)=>{
            console.log(`err ${err}`);
        })
    }
    React.useEffect(()=>{
        getProductAPI();
    },[])
    
    React.useEffect(()=>{
        getDateAPI();
    },[])
    React.useEffect(()=>{
        getDataAPI2();
    },[])

    React.useEffect(()=>{
        $('.category-btn').on({
            click(e){
                e.preventDefault();
                $(this).next().stop().slideToggle();

                $(this).toggleClass('on');
            }
        })
    },[])

    React.useEffect(()=>{
        $('.category1').on({
            click(e){
                e.preventDefault();
                $('.all1').toggleClass('on');
               

            }
        })
        $('.category2').on({
            click(e){
                e.preventDefault();
                $('.all2').toggleClass('on');
               

            }
        })

        $('.category4').on({
            click(e){
                e.preventDefault();
                $('.all4').toggleClass('on');
               

            }
        })
        $('.category5').on({
            click(e){
                e.preventDefault();
                $('.all5').toggleClass('on');
               

            }
        })
        $('.category6').on({
            click(e){
                e.preventDefault();
                $('.all6').toggleClass('on');
               

            }
        })

        $('.filter-btn-wrap').on({
            click(e){
                e.preventDefault();
                $('.filter').toggleClass('on');
            }
        })
        $('.filter-a').on({
        click(e){
            e.preventDefault();
            $('.filter-a').removeClass('on');
            $(this).toggleClass('on');
        }
        })
    },[])


    

    return (
        <div id="wrap">
            <div className="container2">
                <div className="content2">
                    <div className="left">
                        <div className="left-filter">
                            <div className="filter-title">
                                <strong>필터</strong>
                            </div>
                            <div className="filter-a">
                                <a href="!#">
                                    <span><img src="../images/shop_main_all/iconGreen.svg" alt="" />빠른배송</span>
                                </a>
                            </div>
                        </div>  
                        <div className="left-content">
                            <div>
                                <div className="left-box box1">
                                    <a href="!#" className='category-btn category1'     >
                                        <div className="title-box">
                                            <span>카테고리</span>
                                            <p className= 'cata-all all1'>모든 카테고리</p>
                                        </div>
                                        <div className="icon-box">
                                            <img src="../images/shop_left_nav/20230519_105043.png" alt="" />
                                        </div>
                                    </a>
                                    <div className="sub">
                                        <ul>
                                            <li>
                                                <label>
                                                    <input type="checkbox" nayme='' id='' value={"레고"} />
                                                    &nbsp;레고
                                                </label>
                                            </li>
                                            <li>
                                                <label>
                                                    <input type="checkbox" name='' id='' value={"베어브릭"} />
                                                    &nbsp;베어브릭
                                                </label>
                                            </li>
                                            <li>
                                                <label>
                                                    <input type="checkbox" name='' id='' value={"카우스"} />
                                                    &nbsp;카우스
                                                </label>
                                            </li>
                                            <li>
                                                <label>
                                                    <input type="checkbox" name='' id='' value={"트레이딩카드"} />
                                                    &nbsp;트레이딩카드
                                                </label>
                                            </li>
                                            <li>
                                                <label>
                                                    <input type="checkbox" name='' id='' value={" LP/CD"} />
                                                    &nbsp; LP/CD
                                                </label>
                                            </li>
                                            <li>
                                                <label>
                                                    <input type="checkbox" name='' id='' value={"기타컬렉터블"} />
                                                    &nbsp;기타컬렉터블
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="left-box box2">
                                    <a href="!#" className='category-btn category2'  >
                                        <div className="title-box">
                                            <span>성별</span>
                                            <p className='cata-all all2'>모든 성별</p>
                                        </div>
                                        <div className="icon-box">
                                            <img src="../images/shop_left_nav/20230519_105043.png" alt="" />
                                        </div>
                                    </a>
                                    <div className="sub">
                                        <ul>
                                            <li>
                                                <label>
                                                    <input type="checkbox" name='' id='' value={"남성"} />
                                                    &nbsp;남성
                                                </label>
                                            </li>
                                            <li>
                                                <label>
                                                    <input type="checkbox" name='' id='' value={"여성"} />
                                                    &nbsp;여성
                                                </label>
                                            </li>
                                            <li>
                                                <label>
                                                    <input type="checkbox" name='' id='' value={"키즈"} />
                                                    &nbsp;키즈
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <ShopMainContentNavComponent brand={state.brand}/>
                                <ShopMainContentNav2Component collection = {collec.collection}/>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="right-title-wrap">
                            <div className="shop-count">
                                <span>상품 105,388</span>
                            </div>
                            <div className="filter-btn-wrap">
                                <button>인기순</button>
                                <img src="../images/shop_main_all/icon-2arrow.svg" alt="" />
                            </div>
                        </div>
                        <div className="filter">
                                <ul>
                                    <li><a href="!#" className='filter-a '>
                                            <div className='p-wrap'>
                                                <p className='main-dsc'>인기순</p>
                                                <p className='sub-dsc'>많이 판매된 순서대로 정렬합니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li><a href="!#" className='filter-a '>
                                            <p className='main-dsc'>즉시 구매가 낮은 순</p>
                                            <p className='sub-dsc'>즉시 구매가가 낮은 순서대로 정렬합니다.</p>
                                        </a>
                                    </li>
                                    <li><a href="!#" className='filter-a '>
                                            <p className='main-dsc'>즉시 구매가 높은 순</p>
                                            <p className='sub-dsc'>즉시 구매가가 높은 순서대로 정렬합니다.  </p>
                                        </a>
                                    </li>
                                    <li><a href="!#"className='filter-a '>
                                            <p className='main-dsc'>관심 많은순</p>
                                            <p className='sub-dsc'>관심 상품에 많이 추가된 순서대로 정렬합니다.</p>
                                        </a>
                                    </li>
                                    <li><a href="!#" className='filter-a '>
                                            <p className='main-dsc'>스타일 많은순</p>
                                            <p className='sub-dsc'>스타일이 많이 등록된 상품 순서대로 정렬합니다.</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <ShopMainContentChild11Component collect={collect.collect}/>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

