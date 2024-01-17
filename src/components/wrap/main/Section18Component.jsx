import React from 'react';
import Section18SlideComponent from './Section18SlideComponent';
import './scss/section18.scss'
import axios from 'axios';

export default function Section18Component(){

    const [state, setState] = React.useState({
        Most:[],
        n:null
    });

    React.useEffect(()=>{
        axios({
            url:'./data/section18.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    Most:res.data.Most,
                    n: res.data.Most.length
                })
            }
        }).catch((err)=>{
            console.log(`AXIOS 실패!${err}`)
        })
    },[])

    return (
        <section id='section18'>
             <Section18SlideComponent Most={state.Most} n={state.n}/>
        </section>
      
    );
};
