import React from 'react';
import axios from 'axios';
import Section4ComponentChild from './Section4ComponentChild';
import './scss/section4.scss'

export default function Section4Component(){

    const [state, setState] = React.useState([]);
    const [tot, setTot] = React.useState(0);
    const [rows, setRows] = React.useState(1);
    const [isShow, setIsShow] = React.useState(true);

    React.useEffect(()=>{
        axios({
            url:'./data/sub2/section4.json',
            method:'GET'
        }).then((res)=>{
            if(res.status===200){
                setState( res.data.Rising_Sneakers );              
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
        <section id='sub2_section4'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>Rising Sneakers</h2>
                        <h3>인기 상승 스니커즈</h3>
                    </div>
                    <div className="content">
                        <Section4ComponentChild Rising_Sneakers={state} rows={rows}/>
                    </div>
                    <div className="btn-box">
                        { isShow &&<button onClick={onClickMoteView} type="button">더보기</button>}
                    </div>
                </div>
            </div>
        </section>
    );
};