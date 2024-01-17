import React from 'react';
import axios from 'axios';
import Section10ComponentChild from './Section10ComponentChild';
import './scss/section10.scss'

export default function Section10Component(){

    const [state, setState] = React.useState([]);
    const [tot, setTot] = React.useState(0);

    React.useEffect(()=>{
        axios({
            url:'./data/sub2/section10.json',
            method:'GET'
        }).then((res)=>{
            if(res.status===200){
                setState( res.data.My_Trendy_Caps );              
            }
        }).catch((err)=>{
            console.log(`AXIOS 실패${err}`)
        })
    },[]);  // 로딩시

    React.useEffect(()=>{
        setTot( state.length );
    },[state, tot]);


    return (
        <section id='sub2_section10'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>My Trendy Ball-Caps</h2>
                        <h3>남들과 다른 트렌디한 볼캡</h3>
                        <a href="/">더보기</a>
                    </div>
                    <div className="content">
                        <Section10ComponentChild My_Trendy_Caps={state}/>
                    </div>
                    <div className="btn-box">
                    </div>
                </div>
            </div>
        </section>
    );
};
