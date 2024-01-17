import React from 'react';
import axios from 'axios';
import Section20ComponentChild from './Section20ComponentChild';
import './scss/section20.scss'

export default function Section20Component(){


    const [state, setState] = React.useState([]);
    const [tot, setTot] = React.useState(0);
    const [rows, setRows] = React.useState(1);
    const [isShow, setIsShow] = React.useState(true);


    React.useEffect(()=>{
        axios({
            url:'./data/section20.json',
            method:'GET'
        }).then((res)=>{
            if(res.status===200){
                setState( res.data.New_Lowest_Asks );              
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
        <section id='section20'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>New Lowest Asks</h2>
                        <h3>새로운 즉시 구매가</h3>
                    </div>
                    <div className="content">
                        <Section20ComponentChild New_Lowest_Asks={state} rows={rows}/>
                    </div>
                    <div className="btn-box">
                       { isShow && <button onClick={onClickMoteView} type="button">더보기</button>}
                    </div>
                </div>
            </div>
        </section>
    );
};