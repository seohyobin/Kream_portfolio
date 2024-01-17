import React from 'react';
import axios from 'axios';
import Section23ComponentChild from './Section23ComponentChild';
import './scss/section23.scss'

export default function Section23Component(){


    const [state, setState] = React.useState([]);
    const [tot, setTot] = React.useState(0);
    const [rows, setRows] = React.useState(1);
    const [isShow, setIsShow] = React.useState(true);

    React.useEffect(()=>{
        axios({
            url:'./data/section23.json',
            method:'GET'
        }).then((res)=>{
            if(res.status===200){
                setState( res.data.Upcoming_Release );              
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
        <section id='section23'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>Upcoming Release</h2>
                        <h3>발매 예정</h3>
                    </div>
                    <div className="content">
                        <Section23ComponentChild Upcoming_Release={state} rows={rows}/>
                    </div>
                    <div className="btn-box">
                        {isShow &&<button onClick={onClickMoteView} type="button">더보기</button>}
                    </div>
                </div>
            </div>
        </section>
    );
};