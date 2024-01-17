import React from 'react';
import axios from 'axios';
import Section12ComponentChild from './Section12ComponentChild';
import './scss/section12.scss'

export default function Section12Component(){

    const [state, setState] = React.useState([]);
    const [tot, setTot] = React.useState(0);


    React.useEffect(()=>{
        axios({
            url:'./data/sub3/section12.json',
            method:'GET'
        }).then((res)=>{
            if(res.status===200){
                setState( res.data.Crocs );              
            }
        }).catch((err)=>{
            console.log(`AXIOS 실패${err}`)
        })
    },[]);  // 로딩시

    React.useEffect(()=>{
        setTot( state.length );
    },[state, tot]);




    
    return (
        <section id='sub3_section12'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>Best Women's Crocs</h2>
                        <h3>지금 가장 인기 있는 크록스!</h3>
                    </div>
                    <div className="content">
                        <Section12ComponentChild Crocs={state}/>
                    </div>
                </div>
            </div>
        </section>
    );
};