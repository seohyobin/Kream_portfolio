import React from 'react';
import axios from 'axios';
import './scss/section1.scss'
import Section1SlideComponent from './Section1SlideComponent';

export default  function Section1Component(){

    const [state, setState] = React.useState({
        sub2_slide: [],
        n:0
    });

    React.useEffect(()=>{
        axios({
            url:'./data/sub2/section1.json',
            method:'GET'
        }).then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    sub2_slide: res.data.sub2_slide,
                    n: res.data.sub2_slide.length-2
                })
            }
        }).catch((err)=>{
            console.log( `AXIOS 실패! ${err}` );
        });
    },[]);
    return (
        <section id='sub2_section1'>
            <div className="container">
                <div className="gap">
                    <div className="title hide">
                        <h2>메인슬라이드</h2>
                    </div>
                    <div className="content">
                        <Section1SlideComponent  sub2_slide={state.sub2_slide} n={state.n}/>
                    </div>
                </div>
            </div>
        </section>
    );
};
