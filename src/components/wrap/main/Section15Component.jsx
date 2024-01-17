import React from 'react';
import axios from 'axios';
import Section15ComponentChild from './Section15ComponentChild';
import './scss/section15.scss'

export default function Section15Component(){

    const [state, setState] = React.useState([]);
    const [tot, setTot] = React.useState(0);
    const [rows, setRows] = React.useState(1);
    const [isShow, setIsShow] = React.useState(true);

    React.useEffect(()=>{
        axios({
            url:'./data/section15.json',
            method:'GET'
        }).then((res)=>{
            if(res.status===200){
                setState( res.data.Trends_Quiet_Luxury );              
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
        <section id='section15'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>Trends:Quiet Luxury</h2>
                        <h3>보테가 베네타가 그리는 우아함</h3>
                    </div>
                    <div className="content">
                        <Section15ComponentChild Trends_Quiet_Luxury={state} rows={rows}/>
                    </div>
                    <div className="btn-box">
                        {isShow && <button onClick={onClickMoteView} type="button">더보기</button>}
                    </div>
                </div>
            </div>
        </section>
    );
};