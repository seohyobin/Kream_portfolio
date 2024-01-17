import React from 'react';
import axios from 'axios';
import Section13ComponentChild from './Section13ComponentChild';
import './scss/section13.scss'

export default function Section13Component(){

    const [state, setState] = React.useState([]);
    const [tot, setTot] = React.useState(0);

    React.useEffect(()=>{
        axios({
            url:'./data/sub2/section13.json',
            method:'GET'
        }).then((res)=>{
            if(res.status===200){
                setState( res.data.Porter_Tanker_Bags );              
            }
        }).catch((err)=>{
            console.log(`AXIOS 실패${err}`)
        })
    },[]);  // 로딩시

    React.useEffect(()=>{
        setTot( state.length );
    },[state, tot]);


    return (
        <section id='sub2_section13'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>Porter Tanker Bags</h2>
                        <h3>포터에서만 느낄 수 있는 감성</h3>
                        <a href="/">더보기</a>
                    </div>
                    <div className="content">
                        <Section13ComponentChild Porter_Tanker_Bags={state}/>
                    </div>
                    <div className="btn-box">
                    </div>
                </div>
            </div>
        </section>
    );
};
