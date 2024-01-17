import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import ShopHeaderSlideChild5Component from './ShopHeaderSlideChild5Component';


export default function ShopHeaderSlide5Component(){
    const [state, setState] = React.useState({
        slide4:[],
        n:0
    })

    React.useEffect(()=>{
        axios({
            url:'../data/shop_all_header_slide.json',
            method:'GET'
        })
        .then((res)=>{
           
            if(res.status===200){
                setState({
                    ...state,
                    slide4:res.data.slide4,
                });
                console.log( res);

            }
        })
        .catch((err)=>{
            console.log( `AXIOS 실패! ${err}` );

        })
    },[])





    
    React.useEffect(()=>{
        const $titleSlideContainer =$('#header-slide .title-slide-container');
        const $titleSlideWrap =$(' #header-slide .title-slide-wrap');
        const $titleSlide =$('#header-slide .title-slide');
        const $titleSlideA =$('#header-slide .title-slide a');
        const $headerSlideArrowNext=$('#header-slide .header-slide-arrow-next');
        const $headerSlideArrowPrev=$('#header-slide .header-slide-arrow-prev');
        const $pageBtn =$('#header-slide .page-btn');


        let cnt =0;
        let n =state.n/9;
        let m=$titleSlide.length;


        //1.메인
        function mainSlide(){

            $titleSlideWrap.stop().animate({left:`${cnt > 1 ? -100 *(cnt-1)-10 : -100*cnt}%`},600,function(){


            });
            pageNation();
        }   


        //2.다음
        function nextCount(){
            cnt++;
            if(cnt >= 2){
                cnt=2;
             }
             mainSlide();
        }

        //3.이전
        function prevCount(){
            cnt--;
            if(cnt<=0){
                cnt=0;
            }
            mainSlide();

        }

        //4.화살표
        $headerSlideArrowNext.on({
            click(e){
                e.preventDefault();
                nextCount();
            }
        });
        $headerSlideArrowPrev.on({
            click(e){
                e.preventDefault();
                prevCount();
            }
        })
        //5.페이지네이션

        function pageNation(){
            $pageBtn.removeClass('on');
            $pageBtn.eq(cnt >2 ? 0: cnt).addClass('on');
        }
        $pageBtn.each(function(idx){
            $(this).on({
                click(e){
                    e.preventDefault();
                    cnt = idx;
                    mainSlide();
                }
            });
        });

    },[])

    return (
        <div id='wrap'>
            <div id="header-slide">
            <div className="container2">
                <div className="content-small">
                    <div className="title-slide-container">
                        <ShopHeaderSlideChild5Component slide4={state.slide4}/>
                    </div>
 
                </div>

            </div>      
            </div>
        </div>
    );
};

