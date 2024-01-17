import React from 'react';
import axios from 'axios';
import Section10ComponentChild from './Section10ComponentChild';
import './scss/section10.scss'

export default function Section10Component(){

    const [state, setState] = React.useState([]);
    const [tot, setTot] = React.useState(0);


    React.useEffect(()=>{
        axios({
            url:'./data/sub3/section10.json',
            method:'GET'
        }).then((res)=>{
            if(res.status===200){
                setState( res.data.Touch_of_Yellow );              
            }
        }).catch((err)=>{
            console.log(`AXIOS 실패${err}`)
        })
    },[]);  // 로딩시

    React.useEffect(()=>{
        setTot( state.length );
    },[state, tot]);




    
    return (
        <section id='sub3_section10'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>Touch of Yellow</h2>
                        <h3>감각적인 옐로우 포인트!</h3>
                    </div>
                    <div className="content">
                        <Section10ComponentChild Touch_of_Yellow={state}/>
                    </div>
                </div>
            </div>
        </section>
    );
};