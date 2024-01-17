import React from 'react';
import axios from 'axios';
import Section3ComponentChild from './Section3ComponentChild';
import './scss/section3.scss'

export default function Section3Component(){

    const [state, setState] = React.useState([]);
    const [tot, setTot] = React.useState(0);
    const [rows, setRows] = React.useState(1);
    const [isShow, setIsShow] = React.useState(true);

    React.useEffect(()=>{
        axios({
            url:'./data/sub3/section3.json',
            method:'GET'
        }).then((res)=>{
            if(res.status===200){
                setState( res.data.For_Women );              
            }
        }).catch((err)=>{
            console.log(`AXIOS 실패${err}`)
        })
    },[]);  // 로딩시

    React.useEffect(()=>{
        setTot( state.length );
    },[state, tot]);

    const onClickMoteView=(e)=>{
        e.preventDefault();
        if(Math.ceil(tot/4) > rows){
            setRows(rows+1);
        }
        else{
            setIsShow(false);
        }
    }



    
    return (
        <section id='sub3_section3'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>New Arrivals</h2>
                        <h3>신규 등록 상품</h3>
                        <a href="/">더보기</a>
                    </div>
                    <div className="content">
                        <Section3ComponentChild For_Women={state} rows={rows}/>
                    </div>
                    <div className="btn-box">
                        { isShow &&<button onClick={onClickMoteView} type="button">더보기</button>}
                    </div>
                </div>
            </div>
        </section>
    );
};