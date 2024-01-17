import React from 'react';
import axios from 'axios';
import Section13ComponentChild from './Section13ComponentChild';
import './scss/section13.scss'

export default function Section13Component(){

    const [state, setState] = React.useState([]);
    const [tot, setTot] = React.useState(0);
    const [rows, setRows] = React.useState(1);
    const [isShow, setIsShow] = React.useState(true);

    React.useEffect(()=>{
        axios({
            url:'./data/section13.json',
            method:'GET'
        }).then((res)=>{
            if(res.status===200){
                setState( res.data.Best_Chanel );              
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
        <section id='section13'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>Best Chanel</h2>
                        <h3>인기 럭셔리 가방 랭킹</h3>
                    </div>
                    <div className="content">
                        <Section13ComponentChild Best_Chanel={state} rows={rows}/>
                    </div>
                    <div className="btn-box">
                       { isShow && <button onClick={onClickMoteView} type="button">더보기</button>}
                    </div>
                </div>
            </div>
        </section>
    );
};