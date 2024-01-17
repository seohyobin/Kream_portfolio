import React from 'react';
import axios from 'axios';
import Section5ComponentChild from './Section5ComponentChild';
import './scss/section5.scss'

export default function Section5Component(){

    const [state, setState] = React.useState([]);
    const [tot, setTot] = React.useState(0);
    const [rows, setRows] = React.useState(1);
    const [isShow, setIsShow] = React.useState(true);

    React.useEffect(()=>{
        axios({
            url:'./data/sub3/section5.json',
            method:'GET'
        }).then((res)=>{
            if(res.status===200){
                setState( res.data.New_Arrivals_Women );              
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
        <section id='sub3_section5'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>New Arrivals</h2>
                        <h3>신규 등록 여성 상품</h3>
                    </div>
                    <div className="content">
                        <Section5ComponentChild New_Arrivals_Women={state} rows={rows}/>
                    </div>
                    <div className="btn-box">
                        { isShow &&<button onClick={onClickMoteView} type="button">더보기</button>}
                    </div>
                </div>
            </div>
        </section>
    );
};