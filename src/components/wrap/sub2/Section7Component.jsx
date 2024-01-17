import React from 'react';
import Section7SlideComponent from './Section7SlideComponent';
import './scss/section7.scss'
import axios from 'axios';

export default function Section7Component(){

    const [state, setState] = React.useState({
        Style_Picks_man:[],
        n:null
    });

    React.useEffect(()=>{
        axios({
            url:'./data/sub2/section7.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    Style_Picks_man:res.data.Style_Picks_man,
                    n: res.data.Style_Picks_man.length
                })
            }
        }).catch((err)=>{
            console.log(`AXIOS 실패!${err}`)
        })
    },[state, state.Style_Picks_man])

    return (
        <section id='sub2_section7'>
             <Section7SlideComponent Style_Picks_man={state.Style_Picks_man} n={state.n}/>
        </section>
      
    );
};
