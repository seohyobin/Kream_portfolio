import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import './css/shop_main_content.css';
import ShopMainContentNav2Component from './ShopMainContentNav2Component';
import ShopMainContentChild15Component from './ShopMainContentChild15Component';
import ShopMainContentNavComponent from './ShopMainContentNavComponent';



export default function ShopMainContent15Component(){

    const[state,setState] = React.useState({
        brand:[],
        isOn:true

    })
    const [living,setLiving] =React.useState({
        living:[]

    })
    const [collec, setCollec]=React.useState({
        collection:[]
    })

    const getProductAPI=()=>{
        axios({
            url:'../data/living_product.json',
            method:'GET'
        })
        .then((res)=>{  
            //console.log(res.data);

            if(res.status===200){
                setLiving({
                    ...living,
                    living:res.data.living
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
                                                    <input type="checkbox" nayme='' id='' value={"신발"} />
                                                    &nbsp;신발
                                                </label>
                                            </li>
                                            <li>
                                                <label>
                                                    <input type="checkbox" name='' id='' value={"아우터"} />
                                                    &nbsp;아우터
                                                </label>
                                            </li>
                                            <li>
                                                <label>
                                                    <input type="checkbox" name='' id='' value={"상의"} />
                                                    &nbsp;상의
                                                </label>
                                            </li>
                                            <li>
                                                <label>
                                                    <input type="checkbox" name='' id='' value={"하의"} />
                                                    &nbsp;하의
                                                </label>
                                            </li>
                                            <li>
                                                <label>
                                                    <input type="checkbox" name='' id='' value={"가방"} />
                                                    &nbsp;가방
                                                </label>
                                            </li>
                                            <li>
                                                <label>
                                                    <input type="checkbox" name='' id='' value={"지갑"} />
                                                    &nbsp;지갑
                                                </label>
                                            </li>
                                            <li>
                                                <label>
                                                    <input type="checkbox" name='' id='' value={"시계"} />
                                                    &nbsp;시계
                                                </label>
                                            </li>
                                            <li>
                                                <label>
                                                    <input type="checkbox" name='' id='' value={"패션잡화"} />
                                                    &nbsp;패션잡화
                                                </label>
                                            </li>
                                            <li>
                                                <label>
                                                    <input type="checkbox" name='' id='' value={"컬렉터블"} />
                                                    &nbsp;컬렉터블
                                                </label>
                                            </li>
                                            <li>
                                                <label>
                                                    <input type="checkbox" name='' id='' value={"뷰티"} />
                                                    &nbsp;뷰티
                                                </label>
                                            </li>
                                            <li>
                                                <label>
                                                    <input type="checkbox" name='' id='' value={"테크"} />
                                                    &nbsp;테크
                                                </label>
                                            </li>
                                            <li>
                                                <label>
                                                    <input type="checkbox" name='' id='' value={"캠핑"} />
                                                    &nbsp;캠핑
                                                </label>
                                            </li>
                                            <li>
                                                <label>
                                                    <input type="checkbox" name='' id='' value={"가구/리빙"} />
                                                    &nbsp;리빙
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
                                <div className="left-box box5">
                                    <a href="!#" className='category-btn category5'  >
                                        <div className="title-box">
                                            <span>사이즈</span>
                                            <p className='cata-all all5'>모든 사이즈</p>
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
                                                      남성
                                                </label>
                                            </li>
                                            <li>
                                                <label>
                                                    <input type="checkbox" name='' id='' value={"여성"} />
                                                    여성
                                                </label>
                                            </li>
                                            <li>
                                                <label>
                                                    <input type="checkbox" name='' id='' value={"키즈"} />
                                                    키즈
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="left-box box6">
                                    <a href="!#" className='category-btn category6'>
                                        <div className="title-box">
                                            <span>혜택/가격</span>
                                            <p className='cata-all all6'>모든 혜택/가격</p>
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
                                                      남성
                                                </label>
                                            </li>
                                            <li>
                                                <label>
                                                    <input type="checkbox" name='' id='' value={"여성"} />
                                                    여성
                                                </label>
                                            </li>
                                            <li>
                                                <label>
                                                    <input type="checkbox" name='' id='' value={"키즈"} />
                                                    키즈
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
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
                                            <p className='main-dsc'>프리미엄 높은 순</p>
                                            <p className='sub-dsc'>발매가 대비 가격이 높은 순서대로 정렬합니다.</p>
                                        </a>
                                    </li>
                                    <li><a href="!#" className='filter-a '>
                                            <p className='main-dsc'>프리미엄 낮은 순</p>
                                            <p className='sub-dsc'>발매가 대비 가격이 낮은 순서대로 정렬합니다. </p>
                                        </a>
                                    </li>
                                    <li><a href="!#" className='filter-a '>
                                            <p className='main-dsc'>즉시 구매가순</p>
                                            <p className='sub-dsc'>즉시 구매가가 낮은 순서대로 정렬합니다.</p>
                                        </a>
                                    </li>
                                    <li><a href="!#" className='filter-a '>
                                            <p className='main-dsc'>즉시 판매가순</p>
                                            <p className='sub-dsc'>즉시 판매가가 높은 순서대로 정렬합니다.  </p>
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
                                    <li><a href="!#" className='filter-a '>
                                            <p className='main-dsc'>발매일순</p>
                                            <p className='sub-dsc'>최신 상품 순서대로 정렬합니다. 아직 발매 전인 상품이 노출될 수 있습니다.</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <ShopMainContentChild15Component living={living.living}/>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

