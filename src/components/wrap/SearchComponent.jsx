import React from 'react';
import axios from 'axios';
import SeacrchComponentChild from './main/stylecomponent/search/SeacrchComponentChild';
import PopularComponent from './main/stylecomponent/search/PopularComponent';
import ProductComponent from './main/stylecomponent/search/ProductComponent';

export default function SearchComponent(){
  // const openBtn = document.querySelector('.searchOpenBtn');
  // const closeBtn = document.querySelector('.searchCloseBtn');

  const [state, setState] = React.useState({
    isSearch: false,
    isResult: false,
    searchMsg: "",
    brandList: [],
    productList: []
  });

  React.useEffect(()=>{
    axios({
      url: './data/search/item_list.json',
      method: 'GET'
    })
    .then((res)=>{
        if(res.status===200){
            setState({
                ...state,
                brandList: res.data.brand,
                productList: res.data.product
            });
        }
    })
    .catch((err)=>{
        console.log( `AXIOS 실패 ! ${err}`);
    });
    
  },[]);
  

  const onChangeSearching =(e) => {
    const { value } = e.target;
    let isSearch = false;

    if( value !== ''){
      isSearch = true;
      setState({
        ...state,
        isSearch: isSearch,
        searchMsg: value
      });
    }
    else{
      isSearch = false;
      setState({
        ...state,
        isSearch: isSearch,
        searchMsg: value
      })
    }
  };

  const onClickDelete=(e)=>{
    e.preventDefault();
    
    setState({
      ...state,
      searchMsg: '',
      isSearch: false
    });
  }

  return (
    <article id="search">
      <div className="container">
        <div className="gap">
          <div className="content">
            <div className="search-searching__box">
              <input type="text" name='searching_input' id='searchingInput' placeholder='브랜드명, 모델명, 모델번호 등' autoComplete='off' onChange={onChangeSearching} value={state.searchMsg}/>
              <button className={state.isSearch ? 'search-close__btn on' : 'search-close__btn'} onClick={onClickDelete}><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div className={state.isSearch ? "seach-recommand__box hide" : "seach-recommand__box"}>
              <div className="recommand-text__box">
                <span>추천검색어</span>
              </div>
              <div className="recommand-btn__box">
                <a href='!#' className="recommand-btn">디젤</a>
                <a href='!#' className="recommand-btn">크림 단독</a>
                <a href='!#' className="recommand-btn">스캇</a>
              </div>
            </div>
            <div className={state.isSearch ? "search-popular__box hide" : "search-popular__box"}>
              <div className="search-popular__text">
                <span>인기 검색어</span>
                <span>06.02 10:00 기준</span>
              </div>
              <PopularComponent brandList={state.brandList} />
            </div>
            <ul className={state.isSearch ? "search-suggest__box" : "search-suggest__box hide"}>
              <SeacrchComponentChild brandList={state.brandList} searchMsg={state.searchMsg} />
              <li className={state.searchMsg === '' ? 'suggest-result__num hide' : 'suggest-result__num'}>
                <a href="!#">
                  <p> {state.searchMsg} </p>
                  <a href="!#"><i class="fa-solid fa-chevron-right"></i></a>
                </a>
              </li>
              <ProductComponent product={state.productList} searchMsg={state.searchMsg} />
            </ul>
            <div className={state.isSearch ? "search-result__box" : "search-result__box hide"}>
              <p>검색하신 결과가 없습니다.</p>
              <p>상품 등록 요청은 앱 1:1 문의하기 로 요청해주세요.</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

