import React from 'react';
import axios from 'axios';
import Section11ComponentChild from './Section11ComponentChild';
import './scss/section11.scss'

export default function Section11Component(){

    const [state, setState] = React.useState([]);
    const [tot, setTot] = React.useState(0);

    React.useEffect(()=>{
        axios({
            url:'./data/sub2/section11.json',
            method:'GET'
        }).then((res)=>{
            if(res.status===200){
                setState( res.data.Hype_Keyrings );              
            }
        }).catch((err)=>{
            console.log(`AXIOS 실패${err}`)
        })
    },[]);  // 로딩시

    React.useEffect(()=>{
        setTot( state.length );
    },[state, tot]);


    return (
        <section id='sub2_section11'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>My Trendy Ball-Caps</h2>
                        <h3>남들과 다른 트렌디한 볼캡</h3>
                        <a href="/">더보기</a>
                    </div>
                    <div className="content">
                        <Section11ComponentChild Hype_Keyrings={state}/>
                    </div>
                    <div className="btn-box">
                    </div>
                </div>
            </div>
        </section>
    );
};
