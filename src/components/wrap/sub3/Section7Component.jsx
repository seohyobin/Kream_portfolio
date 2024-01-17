import React from 'react';
import Section7SlideComponent from './Section7SlideComponent';
import './scss/section7.scss'
import axios from 'axios';

export default function Section7Component(){

    const [state, setState] = React.useState({
        Celeb_Shot:[],
        n:null
    });

    React.useEffect(()=>{
        axios({
            url:'./data/sub3/section7.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    Celeb_Shot:res.data.Celeb_Shot,
                    n: res.data.Celeb_Shot.length
                })
            }
        }).catch((err)=>{
            console.log(`AXIOS 실패!${err}`)
        })
    },[state, state.Celeb_Shot])

    return (
        <section id='sub2_section7'>
             <Section7SlideComponent Celeb_Shot={state.Celeb_Shot} n={state.n}/>
        </section>
      
    );
};
