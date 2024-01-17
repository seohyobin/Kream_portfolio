import React from 'react';
import axios from 'axios';
import './scss/section1.scss'
import Section1SlideComponent from './Section1SlideComponent';

export default  function Section1Component(){

    const [state, setState] = React.useState({
        sub3_slide: [],
        n:0
    });

    React.useEffect(()=>{
        axios({
            url:'./data/sub3/section1.json',
            method:'GET'
        }).then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    sub3_slide: res.data.sub3_slide,
                    n: res.data.sub3_slide.length-2
                })
            }
        }).catch((err)=>{
            console.log( `AXIOS 실패! ${err}` );
        });
    },[]);
    return (
        <section id='sub3_section1'>
            <div className="container">
                <div className="gap">
                    <div className="title hide">
                        <h2>메인슬라이드</h2>
                    </div>
                    <div className="content">
                        <Section1SlideComponent  sub3_slide={state.sub3_slide} n={state.n}/>
                    </div>
                </div>
            </div>
        </section>
    );
};
