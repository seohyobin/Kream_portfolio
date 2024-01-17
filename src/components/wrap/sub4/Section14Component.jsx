import React from 'react';
import axios from 'axios';
import Section14ComponentChild from './Section14ComponentChild';
import './scss/section14.scss'

export default function Section14Component(){

    const [state, setState] = React.useState([]);
    const [tot, setTot] = React.useState(0);
    const [rows, setRows] = React.useState(1);
    const [isShow, setIsShow] = React.useState(true);

    React.useEffect(()=>{
        axios({
            url:'./data/sub4/section14.json',
            method:'GET'
        }).then((res)=>{
            if(res.status===200){
                setState( res.data.Core_Bags_for_Your_Style );              
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
        <section id='sub4_section14'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>Core Bags for Your Style</h2>
                        <h3>포인트 주기 좋은 백</h3>
                    </div>
                    <div className="content">
                        <Section14ComponentChild Core_Bags_for_Your_Style={state} rows={rows}/>
                    </div>
                    <div className="btn-box">
                        { isShow &&<button onClick={onClickMoteView} type="button">더보기</button>}
                    </div>
                </div>
            </div>
        </section>
    );
};