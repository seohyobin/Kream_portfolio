import React from 'react';
import axios from 'axios';
import Section9ComponentChild from './Section9ComponentChild';
import './scss/section9.scss'

export default function Section9Component(){

    const [state, setState] = React.useState([]);
    const [tot, setTot] = React.useState(0);

    React.useEffect(()=>{
        axios({
            url:'./data/sub2/section9.json',
            method:'GET'
        }).then((res)=>{
            if(res.status===200){
                setState( res.data.New_Stussy_Shirts );              
            }
        }).catch((err)=>{
            console.log(`AXIOS 실패${err}`)
        })
    },[]);  // 로딩시

    React.useEffect(()=>{
        setTot( state.length );
    },[state, tot]);


    return (
        <section id='sub2_section9'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>New Stussy T-Shirts</h2>
                        <h3>항상 설레는 스투시 신상</h3>
                        <a href="/">더보기</a>
                    </div>
                    <div className="content">
                        <Section9ComponentChild New_Stussy_Shirts={state}/>
                    </div>
                    <div className="btn-box">
                    </div>
                </div>
            </div>
        </section>
    );
};
