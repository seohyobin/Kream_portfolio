import React from 'react';
import axios from 'axios';
import Section17ComponentChild from './Section17ComponentChild';
import './scss/section17.scss'

export default function Section17Component(){


    const [state, setState] = React.useState([]);
    const [tot, setTot] = React.useState(0);
    const [rows, setRows] = React.useState(1);
    const [isShow, setIsShow] = React.useState(true);

    React.useEffect(()=>{
        axios({
            url:'./data/section17.json',
            method:'GET'
        }).then((res)=>{
            if(res.status===200){
                setState( res.data.Daily_Summer_Shorts );              
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
        <section id='section17'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>Daily Summer Shorts</h2>
                        <h3>가벼운 반바지</h3>
                    </div>
                    <div className="content">
                        <Section17ComponentChild Daily_Summer_Shorts={state} rows={rows}/>
                    </div>
                    <div className="btn-box">
                        {isShow && <button onClick={onClickMoteView} type="button">더보기</button>}
                    </div>
                </div>
            </div>
        </section>
    );
};