import React from 'react';
import axios from 'axios';
import Section13ComponentChild from './Section13ComponentChild';
import './scss/section13.scss'

export default function Section13Component(){

    const [state, setState] = React.useState([]);
    const [tot, setTot] = React.useState(0);


    React.useEffect(()=>{
        axios({
            url:'./data/sub3/section13.json',
            method:'GET'
        }).then((res)=>{
            if(res.status===200){
                setState( res.data.Special_Keyrings );              
            }
        }).catch((err)=>{
            console.log(`AXIOS 실패${err}`)
        })
    },[]);  // 로딩시

    React.useEffect(()=>{
        setTot( state.length );
    },[state, tot]);




    
    return (
        <section id='sub3_section13'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>Special Keyrings</h2>
                        <h3>구하기 힘든 키링들을 한 곳에서!</h3>
                    </div>
                    <div className="content">
                        <Section13ComponentChild Special_Keyrings={state}/>
                    </div>
                </div>
            </div>
        </section>
    );
};