import React from 'react';
import axios from 'axios';
import Section21ComponentChild from './Section21ComponentChild';
import './scss/section21.scss'

export default function Section21Component(){

    const [state, setState] = React.useState([]);
    const [tot, setTot] = React.useState(0);
    const [rows, setRows] = React.useState(1);
    const [isShow, setIsShow] = React.useState(true);
    React.useEffect(()=>{
        axios({
            url:'./data/section21.json',
            method:'GET'
        }).then((res)=>{
            if(res.status===200){
                setState( res.data.New_Highest_Bids );              
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
        <section id='section21'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>New Highest Bids</h2>
                        <h3>새로운 즉시 판매가</h3>
                    </div>
                    <div className="content">
                        <Section21ComponentChild New_Highest_Bids={state} rows={rows}/>
                    </div>
                    <div className="btn-box">
                        {isShow &&<button onClick={onClickMoteView} type="button">더보기</button>}
                    </div>
                </div>
            </div>
        </section>
    );
};