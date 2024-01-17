import React from 'react';
import axios from 'axios';
import Section8ComponentChild from './Section8ComponentChild';
import './scss/section8.scss'

export default function Section8Component(){

    const [state, setState] = React.useState([]);
    const [tot, setTot] = React.useState(0);
    const [rows, setRows] = React.useState(1);
    const [isShow, setIsShow] = React.useState(true);

    React.useEffect(()=>{
        axios({
            url:'./data/sub4/section8.json',
            method:'GET'
        }).then((res)=>{
            if(res.status===200){
                setState( res.data.For_My_Sneakers );              
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
        <section id='sub4_section8'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>For My Sneakers</h2>
                        <h3>스니커즈 관리를 위한 확실한 방법</h3>
                    </div>
                    <div className="content">
                        <Section8ComponentChild For_My_Sneakers={state} rows={rows}/>
                    </div>
                    <div className="btn-box">
                        { isShow &&<button onClick={onClickMoteView} type="button">더보기</button>}
                    </div>
                </div>
            </div>
        </section>
    );
};