import React from 'react';
import axios from 'axios';
import Section9ComponentChild from './Section9ComponentChild';
import './scss/section9.scss'

export default function Section9Component(){

    const [state, setState] = React.useState([]);
    const [tot, setTot] = React.useState(0);


    React.useEffect(()=>{
        axios({
            url:'./data/sub3/section9.json',
            method:'GET'
        }).then((res)=>{
            if(res.status===200){
                setState( res.data.Shining_Silvers );              
            }
        }).catch((err)=>{
            console.log(`AXIOS 실패${err}`)
        })
    },[]);  // 로딩시

    React.useEffect(()=>{
        setTot( state.length );
    },[state, tot]);




    
    return (
        <section id='sub3_section9'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>Shining Silvers</h2>
                        <h3>센티멍 인기 실버 주얼리</h3>
                    </div>
                    <div className="content">
                        <Section9ComponentChild Shining_Silvers={state}/>
                    </div>
                </div>
            </div>
        </section>
    );
};