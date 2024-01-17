import React from 'react';
import axios from 'axios';
import Section8ComponentChild from './Section8ComponentChild';
import './scss/section8.scss'

export default function Section8Component(){

    const [state, setState] = React.useState([]);
    const [tot, setTot] = React.useState(0);


    React.useEffect(()=>{
        axios({
            url:'./data/sub3/section8.json',
            method:'GET'
        }).then((res)=>{
            if(res.status===200){
                setState( res.data.Daily_Summer_Bags );              
            }
        }).catch((err)=>{
            console.log(`AXIOS 실패${err}`)
        })
    },[]);  // 로딩시

    React.useEffect(()=>{
        setTot( state.length );
    },[state, tot]);




    
    return (
        <section id='sub3_section8'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>Daily Summer Bags</h2>
                        <h3>이 날씨에 딱 맞는 산뜻한 가방</h3>
                    </div>
                    <div className="content">
                        <Section8ComponentChild Daily_Summer_Bags={state}/>
                    </div>
                </div>
            </div>
        </section>
    );
};