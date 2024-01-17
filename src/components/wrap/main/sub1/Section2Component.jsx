import React from 'react';
import axios from 'axios';
import Section2ComponentChild from './Section2ComponentChild';
import './scss/section2.scss'

export default function Section2Component(){

    const [state, setState] = React.useState([]);
    const [tot, setTot] = React.useState(0);
    const [rows, setRows] = React.useState(1);
    const [isShow, setIsShow] = React.useState(true);

    React.useEffect(()=>{
        axios({
            url:'./data/sub1/section2.json',
            method:'GET'
        }).then((res)=>{
            if(res.status===200){
                setState( res.data.cloth );              
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
        <section id='section2'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>지금 주복받는 의류</h2>
                    </div>
                    <div className="content">
                        <Section2ComponentChild cloth={state} rows={rows}/>
                    </div>
                    <div className="btn-box">
                       { isShow && <button onClick={onClickMoteView} type="button">더보기</button>}
                    </div>
                </div>
            </div>
        </section>
    );
};