import React from 'react';

export default function Section18SlideComponent({Most, n}){


    const slideWrap = React.useRef();
    const [cnt, setCnt] = React.useState(0);
    React.useEffect(()=>{
        // slideWrap.current.style.width =`${16.67*(n+12)}%`;
        slideWrap.current.style.width =`${16.67*(n+2)}%`;
    },[Most]);


    React.useEffect(()=>{
        slideWrap.current.style.transition ='all 0.3s ease-in-out';
        slideWrap.current.style.left = `${-(16.67*cnt)}%`;
        if(cnt>11){
            // cnt=0;
            setCnt(0);
            slideWrap.current.style.transition = "none";
            slideWrap.current.style.left = `${-(16.67*0)}%`;
        } 
        if(cnt<0){
            // cnt=11;
            setCnt(11);
            slideWrap.current.style.transition = "none";
            slideWrap.current.style.left = `${-(16.67*11)}%`;
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


    return (
        <>
            <div className="container">
            <div className="gap">
                <div className="title">
                    <h2>오늘의 인기유저</h2>
                </div>
                <div className="content">


                    <div className="slide-container">
                        <div className="slide-view">
                            <ul ref={slideWrap} className="slide-wrap">



                                {
                                    Most.map((item, idx)=>{
                                        return(
                                        <li className="slide" key={idx}>
                                        <div className="col-gap">
                                                <a href="!#">
                                                    <img src={`./images/sec18/${item.main}`} alt="" />
                                                    <span><img src={`./images/sec18/${item.span1}`} alt="" /></span>
                                                    <p>{item.span2}</p>
                                                </a>
                                            </div>
                                        </li>
                                        )
                                    })                                

                                    }



                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a onClick={onClickPrev} href="!#" className='left-arrow-btn'><img src="./images/sec18/icon_left_arrow_white.svg" alt="" /></a>
            <a onClick={onClickNext} href="!#" className='right-arrow-btn'><img src="./images/sec18/icon_left_arrow_white.svg" alt="" /></a>
            </>
        );
    };
