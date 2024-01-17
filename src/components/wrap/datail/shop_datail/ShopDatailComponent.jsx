/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useParams } from 'react-router-dom';
import './scss/shop_datail.scss';
import $ from 'jquery';
import DetailHeaderComponent from './DetailHeaderComponent';
import dataDetail from '../data/shop_all_product.json';
import { useLocation } from 'react-router-dom';

export default function ShopDatailComponent({ product, allProduct, isTopHeader, headerDisable, local }) {

    const [state, setState] = React.useState({
        product1: {}
    });
    const { product1 } = state;

    const commaPrice = (price) => {
        let value = price.toString();
        const regExp = /(^\d+)(\d{3})/g;
        while (regExp.test(value)) {
            return value.replace(regExp, '$1,$2');
        }

    }

    const [viewData, setViewData] = React.useState([]);

    let { id } = useParams();

    // const [data,setData]=React.useState({
    //     data1:dataDetail.allProduct
    // });

    // const selectedData = data.data1.find(item => item.id === Number(id));




    const [slide, setSlide] = React.useState({
        isSlide: false
    })

    React.useEffect(() => {
        isTopHeader = false;

    }, [])
    React.useEffect(() => {
        headerDisable();
    }, [])

    React.useEffect(() => {
        const $slideWrap = $('#detail .slide-wrap-d');
        const $slide = $('#detail .slide-d');
        const $slideA = $('#detail .slide-d a');
        const $arrowBtnNext = $('#detail .arrow-btn-next1');
        const $arrowBtnPrev = $('#detail .arrow-btn-prev1');

        let cnt = 0;
        let n = $slide.length;
        let temp = null;

        //1.메인
        function mainNextSlide() {
            $slide.css({ zIndex: 1, opacity: 1 });
            $slide.eq(temp !== null ? temp : (cnt === 0 ? 3 : cnt - 1)).css({ zIndex: 2 });
            $slide.eq(cnt).css({ zIndex: 3 }).stop().animate({ opacity: 0 }, 0).animate({ opacity: 1 }, 600);
        }

        function mainPrevSlide() {
            $slide.css({ zIndex: 1, opacity: 1 });
            $slide.eq(cnt).css({ zIndex: 2 });
            $slide.eq(temp !== null ? temp : (cnt === 3 ? 0 : cnt + 1)).css({ zIndex: 3 }).stop().animate({ opacity: 1 }, 0).animate({ opacity: 0 }, 600);
        }

        //2.다음
        function nextCount() {

            cnt++;
            mainNextSlide();
        }
        //이전
        function prevCount() {

            cnt--;
            mainPrevSlide();
        }

        $arrowBtnNext.on({

            click(e) {
                e.preventDefault();
                nextCount();
            }
        })
        $arrowBtnPrev.on({
            click(e) {
                e.preventDefault();
                prevCount();
            }

        })
        $slideA.on({
            click(e) {
                e.preventDefault();
            }
        })

    }, [])

    const location = useLocation();

    React.useEffect(() => {

        if (location.pathname.includes('/viewed') || location.pathname.includes('/main')) {
            function handleScroll() {
                let scrollPosition = $(window).scrollTop();
                let sec1bottom = $('#container2-datail').offset().top + 1257;

                if (scrollPosition >= sec1bottom) {
                    $('.slide-container-d').addClass('on');
                    $('.arrow-btn-next1').addClass('on');
                    $('.arrow-btn-prev1').addClass('on');
                } else {
                    $('.slide-container-d').removeClass('on');
                    $('.arrow-btn-next1').removeClass('on');
                    $('.arrow-btn-prev1').removeClass('on');
                }
            }

            // 컴포넌트가 마운트되었을 때와 스크롤 이벤트가 발생할 때 핸들러 함수를 실행합니다.
            handleScroll(); // 컴포넌트가 마운트되었을 때 한 번 실행
            $(window).scroll(handleScroll); // 스크롤 이벤트 핸들러 등록

            // 컴포넌트가 언마운트될 때 스크롤 이벤트 핸들러를 해제합니다.
            return () => {
                $(window).off('scroll', handleScroll); // 스크롤 이벤트 핸들러 해제
            };
        }



    }, [])


    const backgroundColors = [
        'rgb(246, 238, 237)',
        'rgb(241, 241, 234)',
        'rgb(235, 240, 245)',
        'rgb(244, 244, 244)'

    ];

    const getRandomColor = () => {
        return backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
    };


    //로컬스토리지 가져오기
    React.useEffect(() => {
        //상품정보 가져오기
        if (localStorage.getItem('KREAM_TEAM_RECENTLY_VIEW') !== null) {
            let result = JSON.parse(localStorage.getItem('KREAM_TEAM_RECENTLY_VIEW'));
            console.log(result);

            setState({
                ...state,
                product1: result[0]
            })
            // console.log(result[0]);

        }

    }, [])




    // // 로컬 스토리지에서 배열 가져오기
    // const recentlyViewedItems = JSON.parse(localStorage.getItem('KREAM_TEAM_RECENTLY_VIEW'));

    // // id 값들만 추출하여 새로운 배열 생성
    // const ids = recentlyViewedItems.map(item => item.id);

    // console.log(ids);

    // const getLocalStorage=()=>{
    //     let key ='KREAM_TEAM_RECENTLY_VIEW';
    //     if(localStorage.getItem(local.key)!==null){
    //         let viewData =JSON.parse(localStorage.getItem(key));
    //         setViewData(viewData);
    //     }

    // }

    // React.useEffect(()=>{
    //     getLocalStorage();
    // },[]);

    // React.useEffect(()=>{
    //     getLocalStorage();
    // },[local.sign]);


    return (
        <>
            <DetailHeaderComponent product={product} allProduct={allProduct} />
            <div id="container2-datail">
                <div id="detail">
                    <div className="content-wrap" key={id}>
                        <div className="slide-box">
                            <div className="slide-container-d">
                                <div className="slide-view-d">
                                    <ul className="slide-wrap-d">
                                        <li className="slide-d slide1">
                                            <a href="!#">
                                                <img src={`../../images/shop_main_all/${product1.slide1}`} alt="" />
                                            </a>
                                        </li>
                                        <li className="slide-d slide2">
                                            <a href="!#">
                                                <img src={`../../images/shop_main_all/${product1.slide2}`} alt="" />
                                            </a>
                                        </li>
                                        <li className="slide-d slide3">
                                            <a href="!#">
                                                <img src={`../../images/shop_main_all/${product1.slide3}`} alt="" />
                                            </a>
                                        </li>
                                        <li className="slide-d slide4">
                                            <a href="!#">
                                                <img src={`../../images/shop_main_all/${product1.slide4}`} alt="" />
                                            </a>
                                        </li>

                                    </ul>
                                    <a href="!#" className='arrow-btn-next1'><img src="../../images/detail/grey_arrow.svg" alt="" /></a>
                                    <a href="!#" className='arrow-btn-prev1'><img src="../../images/detail/grey_arrow2.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="content-box">
                            <div className="content-top-box">
                                <div className="main-title-box">
                                    <div className="title">
                                        <a href="!#">{product1.brand}</a>
                                    </div>
                                    <p className='title-detail'> {product1.descE} </p>
                                    <p className='sub-detail'> {product1.descK} </p>
                                </div>
                                <div className="datail-price">
                                    <div className="price-title">
                                        <span>최근 거래가</span>
                                    </div>
                                    <div className="price-amount">
                                        <span className='num'>{product1.price}</span>
                                        {/* <span className='won'>원</span> */}
                                        <p className='per'>0원 (0%)</p>
                                    </div>
                                    <div className="percent">

                                    </div>
                                </div>
                                <div className="btn-wrap">
                                    <div className="btn1-box">
                                        <div className="input">
                                            <form name='' id='' method='POST' action="">
                                                <input type="text" name='' id='' maxLength={10} placeholder='구매 가격을 입력하시오' />
                                                <button type='submit'>구매</button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="btn2-box">
                                        <a href="!#">
                                            <span className='img-span'><img src="../../images/detail/20230524_133944.png" alt="" /></span>
                                            <span className='span1'>관심상품</span>
                                            <span className='span2'>17.8만</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="content-product-box">
                                <div className="product-detail">
                                    <h2>상품정보</h2>
                                    <ul className='product-wrap'>
                                        <li className='detail d1'>
                                            <dt>모델번호</dt>
                                            <dd className='dd2'> 315122-111/CW2288-111 </dd>
                                        </li>
                                        <li className='detail d2'>
                                            <dt>출시일</dt>
                                            <dd>   - </dd>
                                        </li>
                                        <li className='detail d3'>
                                            <dt>컬러</dt>
                                            <dd> WHITE/WHITE </dd>
                                        </li>
                                        <li className='detail d4'>
                                            <dt>발매가</dt>
                                            <dd>{product1.price}</dd>
                                        </li>
                                    </ul>
                                </div>
                                <div className="display-item">
                                    <div className="title-wrap">
                                        <span>추가 혜택</span>
                                        <a href="!#"> 더보기</a>
                                    </div>
                                    <div className="content-s">
                                        <span className='point'>포인트</span>
                                        <strong>계좌 간편결제 시 <span>1%</span> 적립</strong>
                                    </div>
                                    <div className="content-s">
                                        <span className='point2'>결제</span>
                                        <strong>네이버페이 최대 20,000원 포인트 지급 <span className='else'>외 4건</span></strong>
                                    </div>
                                </div>
                                <div className="delivery-datail">
                                    <div className="title-d">
                                        <h3>배송정보</h3>
                                    </div>
                                    <div className="deliver-way">
                                        <div className="img">
                                            <img src="../../images/detail/a_120a84f036724d0d97a2343aafff4ecf.png" alt="" />
                                        </div>
                                        <div className="content1">
                                            <span className='s1'>빠른배송 </span>
                                            <span className='s2'>5,000원</span>
                                            <span className='s3'><img src="../../images/detail/help_gray.svg" alt="" /></span>
                                            <p>지금 결제시  <em>내일 5/25(목) 도착 예정</em></p>

                                        </div>
                                        <div className="content2">
                                        </div>
                                    </div>
                                    <div className="deliver-way">
                                        <div className="img">
                                            <img src="../../images/detail/a_8b54cbca40e945f4abf1ee24bdd031f7.png" alt="" />
                                        </div>
                                        <div className="content1">
                                            <span className='s1'>일반배송</span>
                                            <span className='s2'>3,000원</span>
                                            <p>검수 후 배송 ・ 5-7일 내 도착 예정</p>
                                        </div>
                                    </div>
                                    <div className="deliver-way">
                                        <div className="img">
                                            <img src="../../images/detail/a_f82951f1984b404db30b9c4fca4bd695.png" alt="" />
                                        </div>
                                        <div className="content1">
                                            <span className='s1'>창고보관 </span>
                                            <span className='s2'>첫 30일 무료</span>
                                            <span className='s3'><img src="../../images/detail/help_gray.svg" alt="" /></span>
                                            <p>배송 없이 창고에 보관 ・ 빠르게 판매 가능</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="banner">
                                    <a href="!#"><img src="../../images/detail/banner.jpg" alt="" /></a>
                                </div>
                                <div className="graph">
                                    <div className="title-graph">
                                        <h3>시세</h3>
                                    </div>
                                    <div className="tap-area">
                                        <ul className='tap-list'>
                                            <li className="list">
                                                <a href="!#" className='a on' >체결 거래</a>
                                                <a href="!#" className='a'>판매 입찰</a>
                                                <a href="!#" className='a'>구매 입찰</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="table">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>판매희망가</th>
                                                    <th>수량</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td> 115,000원 <i><img src="../../images/detail/iconGreen.svg" alt="" /></i></td>
                                                    <td>4</td>
                                                </tr>
                                                <tr>
                                                    <td> 115,000원 <i><img src="../../images/detail/iconGreen.svg" alt="" /></i></td>
                                                    <td>1</td>
                                                </tr>
                                                <tr>
                                                    <td> 115,000원 <i><img src="../../images/detail/iconGreen.svg" alt="" /></i></td>
                                                    <td>124</td>
                                                </tr>
                                                <tr>
                                                    <td> 115,000원 <i><img src="../../images/detail/iconGreen.svg" alt="" /></i></td>
                                                    <td>124</td>
                                                </tr>
                                            </tbody>
                                            <tr>
                                                <td> 115,000원 <i><img src="../../images/detail/iconGreen.svg" alt="" /></i></td>
                                                <td>124</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div className="show-bid">
                                        <a href="!#" className='bid'> 입찰 내역 더보기 </a>
                                    </div>
                                </div>
                                <div className="before">
                                    <div className="title2">
                                        <h3>구매 전 꼭 확인해주세요!</h3>
                                    </div>
                                    <div className="drop top">
                                        <p>배송 기간 안내</p>
                                        <div className="drop-hidden">
                                            <ul class="content_list">
                                                <li class="content_item">
                                                    <p class="title_txt"> [빠른배송 구매] </p>
                                                </li>
                                                <li class="content_item">
                                                    <p class="main_txt"> - 판매자가 보관 신청한 상품 중 검수에 합격한 상품을 KREAM의 전용 창고에 보관합니다. 보관 상품에 한하여 바로 구매와 95점 구매가 가능합니다. </p>
                                                </li>
                                                <li class="content_item">
                                                    <p class="main_txt"> - 오늘(오후 11:59까지) 결제하면 내일 바로 출고되어 빠른 배송이 가능합니다. (연휴 및 공휴일, 천재지변, 택배사 사유 등 예외적으로 출고일이 변경될 수 있습니다. <a target="_blank" href="/about/inventory?type=stocked" class="txt_link"> 빠른배송 안내 </a></p>
                                                </li>
                                                <li class="content_item">
                                                    <p class="title_txt"> [일반 구매] </p>
                                                </li>
                                                <li class="content_item">
                                                    <p class="main_txt"> - 거래가 체결된 시점부터 48시간(일요일•공휴일 제외) 내에 판매자가 상품을 발송해야 하며, 통상적으로 발송 후 1-2일 내에 KREAM 검수센터에 도착합니다. </p>
                                                </li>
                                                <li class="content_item">
                                                    <p class="main_txt"> - 검수센터에 도착한 상품은 입고 완료 후 3영업일 이내에 검수를 진행합니다. 검수 합격시 배송을 준비합니다. </p>
                                                    <p class="sub_txt">* 상품 종류 및 상태에 따라 검수 소요 시간은 상이할 수 있으며, 구매의사 확인에 해당할 경우 구매자와 상담 진행으로 인해 지연이 발생할 수 있습니다.</p>
                                                </li>
                                                <li class="content_item">
                                                    <p class="main_txt"> - 검수센터 출고는 매 영업일에 진행하고 있으며, 출고 마감시간은 오후 5시입니다. 출고 마감시간 이후 검수 완료건은 운송장번호는 입력되지만 다음 영업일에 출고됩니다. </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="drop middle">
                                        <p>검수 안내</p>
                                        <div className="drop-hidden blind">
                                            <ul class="content_list">
                                                <li class="content_item">
                                                    <p class="main_txt">판매자의 상품이 검수센터에 도착하면 전담 검수팀이 철저한 분석과 검사로 정가품 확인을 진행합니다.</p>
                                                </li>
                                                <li class="content_item">
                                                    <p class="main_txt"> - 검수센터에서는 정가품 여부를 확인하기 위하여, 지속적으로 데이터를 쌓고 분석하여 기록하고 있습니다. </p>
                                                    <p class="sub_txt"> - 업계 전문가로 구성된 검수팀은 박스와 상품의 라벨에서 바느질, 접착, 소재 등 모든 것을 검수합니다. </p>
                                                </li>
                                                <li class="content_item">
                                                    <p class="main_txt"> -검수 결과는 불합격•검수 보류•합격의 세가지 상태로 결과가 변경됩니다. </p>
                                                </li>
                                                <li class="content_item">
                                                    <p class="main_txt">* 검수 합격: KREAM 검수택(Tag)이 부착되어 배송을 준비함</p>
                                                    <p class="main_txt">* 검수 보류: 앱에서 사진으로 상품의 상태 확인 및 구매 여부를 선택. (24시간 이후 자동 검수 합격)</p>
                                                    <p class="main_txt">* 검수 불합격: 즉시 거래가 취소되고 구매하신 금액을 환불 처리함.(환불 수단은 결제 수단과 동일)</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="drop bottom">
                                        <p>구매 환불/취소/교환 안내</p>
                                        <div className="drop-hidden blind">
                                            <ul class="content_list">
                                                <li class="content_item">
                                                    <p class="main_txt">KREAM은 익명 거래를 기반으로 판매자가 판매하는 상품을 구매자가 실시간으로 구매하여 거래를 체결합니다.</p>
                                                    <p class="sub_txt"> - 단순 변심이나 실수에 의한 취소/교환/반품이 불가능합니다. 상품을 원하지 않으시는 경우 언제든지 KREAM에서 재판매를 하실 수 있습니다. </p>
                                                    <p class="sub_txt">  - 상품 수령 후, 이상이 있는 경우 KREAM 고객센터로 문의해주시기 바랍니다. </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="ex">
                                    <div className="wrap-wrap">
                                        <div className="image">
                                            <img src="../../images/detail/img-guide-item-01.fa306b8.svg" alt="" />
                                        </div>
                                        <div class="text_area">
                                            <strong class="title3">100% 정품 보증</strong>
                                            <p class="desc">KREAM에서 검수한 상품이 정품이 아닐 경우, 구매가의 3배를 보상합니다.</p>
                                        </div>
                                    </div>
                                    <div className="wrap-wrap">
                                        <div className="image">
                                            <img src="../../images/detail/다운로드.svg" alt="" />
                                        </div>
                                        <div class="text_area">
                                            <strong class="title3">엄격한 다중 검수</strong>
                                            <p class="desc">모든 상품은 검수센터에 도착한 후, 상품별 전문가 그룹의 체계적인 시스템을 거쳐 검수를 진행합니다.</p>
                                        </div>
                                    </div>
                                    <div className="wrap-wrap">
                                        <div className="image">
                                            <img src="../../images/detail/img-guide-item-03.963fee7.svg" alt="" />
                                        </div>
                                        <div class="text_area">
                                            <strong class="title3">정품 인증 패키지</strong>
                                            <p class="desc">검수에 합격한 경우에 한하여 KREAM의 정품 인증 패키지가 포함된 상품이 배송됩니다.</p>
                                        </div>
                                    </div>

                                </div>
                                <p className='last'> 크림(주)는 통신판매 중개자로서 통신판매의 당사자가 아닙니다. 본 상품은 개별판매자가 등록한 상품으로 상품, 상품정보, 거래에 관한 의무와 책임은 각 판매자에게 있습니다. 단, 이용약관 및 정책, 기타 거래 체결 과정에서 고지하는 내용 등에 따라 검수하고 보증하는 내용에 대한 책임은 크림(주)에 있습니다. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

