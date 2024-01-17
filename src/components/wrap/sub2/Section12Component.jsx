import React from 'react';
import axios from 'axios';
import Section12ComponentChild from './Section12ComponentChild';
import './scss/section12.scss'

export default function Section12Component(){

    const [state, setState] = React.useState([]);
    const [tot, setTot] = React.useState(0);

    React.useEffect(()=>{
        axios({
            url:'./data/sub2/section12.json',
            method:'GET'
        }).then((res)=>{
            if(res.status===200){
                setState( res.data.Light_Card_Holders );              
            }
        }).catch((err)=>{
            console.log(`AXIOS 실패${err}`)
        })
    },[]);  // 로딩시

    React.useEffect(()=>{
        setTot( state.length );
    },[state, tot]);


    return (
        <section id='sub2_section12'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>Light Card Holders</h2>
                        <h3>더워지는 날씨에 맞춰 가볍게</h3>
                        <a href="/">더보기</a>
                    </div>
                    <div className="content">
                        <Section12ComponentChild Light_Card_Holders={state}/>
                    </div>
                    <div className="btn-box">
                    </div>
                </div>
            </div>
        </section>
    );
};
