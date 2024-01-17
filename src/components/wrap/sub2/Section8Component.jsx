import React from 'react';
import axios from 'axios';
import Section8ComponentChild from './Section8ComponentChild';
import './scss/section8.scss'

export default function Section8Component(){

    const [state, setState] = React.useState([]);
    const [tot, setTot] = React.useState(0);

    React.useEffect(()=>{
        axios({
            url:'./data/sub2/section8.json',
            method:'GET'
        }).then((res)=>{
            if(res.status===200){
                setState( res.data.Essential_Yeezy_Slides );              
            }
        }).catch((err)=>{
            console.log(`AXIOS 실패${err}`)
        })
    },[]);  // 로딩시

    React.useEffect(()=>{
        setTot( state.length );
    },[state, tot]);


    return (
        <section id='sub2_section8'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>Essential Yeezy Slides</h2>
                        <h3>여름을 위한 이지 슬라이드</h3>
                        <a href="/">더보기</a>
                    </div>
                    <div className="content">
                        <Section8ComponentChild Essential_Yeezy_Slides={state}/>
                    </div>
                    <div className="btn-box">
                    </div>
                </div>
            </div>
        </section>
    );
};
