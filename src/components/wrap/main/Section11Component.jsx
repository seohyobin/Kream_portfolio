import React from 'react';
import axios from 'axios';
import Section11ComponentChild from './Section11ComponentChild';
import './scss/section11.scss'

export default function Section11Component(){

    const [state, setState] = React.useState([]);
    const [tot, setTot] = React.useState(0);
    const [rows, setRows] = React.useState(1);
    const [isShow, setIsShow] = React.useState(true);

    React.useEffect(()=>{
        axios({
            url:'./data/section11.json',
            method:'GET'
        }).then((res)=>{
            if(res.status===200){
                setState( res.data.Purely_White );              
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
        <section id='section9'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>Purely White</h2>
                        <h3>깨끗하고 산뜻하게</h3>
                    </div>
                    <div className="content">
                        <Section11ComponentChild Purely_White={state} rows={rows}/>
                    </div>
                    <div className="btn-box">
                        {isShow && <button onClick={onClickMoteView} type="button">더보기</button>}
                    </div>
                </div>
            </div>
        </section>
    );
};