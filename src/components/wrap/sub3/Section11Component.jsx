import React from 'react';
import axios from 'axios';
import Section11ComponentChild from './Section11ComponentChild';
import './scss/section11.scss'

export default function Section11Component(){

    const [state, setState] = React.useState([]);
    const [tot, setTot] = React.useState(0);


    React.useEffect(()=>{
        axios({
            url:'./data/sub3/section11.json',
            method:'GET'
        }).then((res)=>{
            if(res.status===200){
                setState( res.data.Sleeveless_for_Summer );              
            }
        }).catch((err)=>{
            console.log(`AXIOS 실패${err}`)
        })
    },[]);  // 로딩시

    React.useEffect(()=>{
        setTot( state.length );
    },[state, tot]);




    
    return (
        <section id='sub3_section11'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>Sleeveless for Summer</h2>
                        <h3>여름을 준비하는 자세</h3>
                    </div>
                    <div className="content">
                        <Section11ComponentChild Sleeveless_for_Summer={state}/>
                    </div>
                </div>
            </div>
        </section>
    );
};