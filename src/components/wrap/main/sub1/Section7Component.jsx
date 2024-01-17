import React from 'react';
import axios from 'axios';
import Section7ComponentChild from './Section7ComponentChild';
import './scss/section7.scss'

export default function Section7Component(){

    const [state, setState] = React.useState([]);
    const [tot, setTot] = React.useState(0);
    const [rows, setRows] = React.useState(1);
    const [isShow, setIsShow] = React.useState(true);

    React.useEffect(()=>{
        axios({
            url:'./data/sub1/section7.json',
            method:'GET'
        }).then((res)=>{
            if(res.status===200){
                setState( res.data.best );              
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
        <section id='section7'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>취향저격! 인기 관심 상품</h2>
                    </div>
                    <div className="content">
                        <Section7ComponentChild best={state} rows={rows}/>
                    </div>
                    <div className="btn-box">
                       { isShow && <button onClick={onClickMoteView} type="button">더보기</button>}
                    </div>
                </div>
            </div>
        </section>
    );
};