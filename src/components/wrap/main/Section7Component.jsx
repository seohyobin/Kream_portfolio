import React from 'react';
import Section7SlideComponent from './Section7SlideComponent';
import './scss/section7.scss'
import axios from 'axios';

export default function Section7Component(){

    const [state, setState] = React.useState({
        Style_Picks:[],
        n:null
    });

    React.useEffect(()=>{
        axios({
            url:'./data/section7.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    Style_Picks:res.data.Style_Picks,
                    n: res.data.Style_Picks.length
                })
            }
        }).catch((err)=>{
            console.log(`AXIOS 실패!${err}`)
        })
    },[])

    return (
        <section id='section7'>
             <Section7SlideComponent Style_Picks={state.Style_Picks} n={state.n}/>
        </section>
      
    );
};
