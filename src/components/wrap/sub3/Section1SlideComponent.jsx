import React from 'react';
import './scss/section1_slide.scss'

export default function Section1SlideComponent({ sub3_slide, n}) {
    
    const slideWrap = React.useRef();  

    const [cnt, setCnt] = React.useState(0);


    React.useEffect(()=>{
        slideWrap.current.style.width =`${100*(n+2)}%`;
    },[sub3_slide]);


    React.useEffect(()=>{
        slideWrap.current.style.transition ='all 0.3s ease-in-out';
        slideWrap.current.style.left = `${-(100*cnt)}%`; 

        if(cnt>n){
            slideWrap.current.style.transition ='none';
            slideWrap.current.style.left = `0%`;
            setCnt(1);
        }

        if(cnt<0){
            slideWrap.current.style.transition ='none';
            slideWrap.current.style.left = `${-100*n}%`;
            setCnt(n-1);
        }

    },[cnt]);


    
    const onClickNext=(e)=>{
        e.preventDefault();
            setCnt(cnt+1);
    }
    const onClickPrev=(e)=>{
        e.preventDefault();
            setCnt(cnt-1);
    }

    // 슬라이드 클릭 시 새로고침 발생 방지
    const onClickSlideEvent=(e)=>{
        e.preventDefault();
    }



    return (
        <div className="sub3_slide-container">
            <div className="sub3_slide-view">
                <ul ref={slideWrap}  className="sub3_slide-wrap">


                {
                     sub3_slide.map((item,idx)=>{
                        return(
                            <li className="sub3_slide" key={idx}><a href="!#" onClick={(e)=>onClickSlideEvent(e, idx,item.src)}><img src={item.src} alt="" /></a></li>
                        )
                    })

                }
                    

                </ul>
            </div>


            <a href="!#" onClick={onClickPrev} className='left-arrorw-btn'><img src="./images/sec1/icon_right_arrow_gray.svg" alt="" /></a>
            <a href="!#" onClick={onClickNext} className='right-arrorw-btn'><img src="./images/sec1/icon_right_arrow_gray.svg" alt="" /></a>

           <div className="page-btn-box">
            <span><a href="!#" className='page-btn blind on'>1</a></span>
            <span><a href="!#" className='page-btn blind'>2</a></span>
            <span><a href="!#" className='page-btn blind'>3</a></span>
            <span><a href="!#" className='page-btn blind'>4</a></span>
            <span><a href="!#" className='page-btn blind'>5</a></span>
            <span><a href="!#" className='page-btn blind'>6</a></span>
            <span><a href="!#" className='page-btn blind'>7</a></span>
            <span><a href="!#" className='page-btn blind'>8</a></span>
            <span><a href="!#" className='page-btn blind'>9</a></span>
            <span><a href="!#" className='page-btn blind'>10</a></span>
            <span><a href="!#" className='page-btn blind'>11</a></span>
            <span><a href="!#" className='page-btn blind'>12</a></span>
            <span><a href="!#" className='page-btn blind'>13</a></span>
            <span><a href="!#" className='page-btn blind'>14</a></span>
           </div>

        </div>
    );
};
