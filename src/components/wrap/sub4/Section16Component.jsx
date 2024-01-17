import React from 'react';
import axios from 'axios';
import Section16ComponentChild from './Section16ComponentChild';
import './scss/section16.scss'

export default function Section16Component(){

    const [state, setState] = React.useState([]);
    const [tot, setTot] = React.useState(0);
    const [rows, setRows] = React.useState(1);
    const [isShow, setIsShow] = React.useState(true);

    React.useEffect(()=>{
        axios({
            url:'./data/sub4/section16.json',
            method:'GET'
        }).then((res)=>{
            if(res.status===200){
                setState( res.data.Jackets_for_These_Days );              
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
        <section id='sub4_section16'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>Jackets for These Days</h2>
                        <h3>간절기용 가벼운 자켓</h3>
                    </div>
                    <div className="content">
                        <Section16ComponentChild Jackets_for_These_Days={state} rows={rows}/>
                    </div>
                    <div className="btn-box">
                        { isShow &&<button onClick={onClickMoteView} type="button">더보기</button>}
                    </div>
                </div>
            </div>
        </section>
    );
};