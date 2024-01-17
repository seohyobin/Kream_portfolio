import React from 'react';
import axios from 'axios';
import Section10ComponentChild from './Section10ComponentChild';
import './scss/section10.scss'

export default function Section10Component(){

    const [state, setState] = React.useState([]);
    const [tot, setTot] = React.useState(0);
    const [rows, setRows] = React.useState(1);
    const [isShow, setIsShow] = React.useState(true);

    React.useEffect(()=>{
        axios({
            url:'./data/sub4/section10.json',
            method:'GET'
        }).then((res)=>{
            if(res.status===200){
                setState( res.data.PRTPRTPSHOP_23SS );              
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
        <section id='sub4_section10'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>PRTPRTPSHOP 23SS</h2>
                        <h3>트렌디하고 넓은 스펙트럼</h3>
                    </div>
                    <div className="content">
                        <Section10ComponentChild PRTPRTPSHOP_23SS={state} rows={rows}/>
                    </div>
                    <div className="btn-box">
                        { isShow &&<button onClick={onClickMoteView} type="button">더보기</button>}
                    </div>
                </div>
            </div>
        </section>
    );
};