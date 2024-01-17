import React from 'react';
import axios from 'axios';
import Section12ComponentChild from './Section12ComponentChild';
import './scss/section12.scss'

export default function Section12Component(){

    const [state, setState] = React.useState([]);
    const [tot, setTot] = React.useState(0);
    const [rows, setRows] = React.useState(1);
    const [isShow, setIsShow] = React.useState(true);

    React.useEffect(()=>{
        axios({
            url:'./data/sub4/section12.json',
            method:'GET'
        }).then((res)=>{
            if(res.status===200){
                setState( res.data.Millo );              
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
        <section id='sub4_section12'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>Millo '23 Hot Summer</h2>
                        <h3>꾸준히 착용할 데일리 웨어</h3>
                    </div>
                    <div className="content">
                        <Section12ComponentChild Millo={state} rows={rows}/>
                    </div>
                    <div className="btn-box">
                        { isShow &&<button onClick={onClickMoteView} type="button">더보기</button>}
                    </div>
                </div>
            </div>
        </section>
    );
};