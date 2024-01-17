import axios from 'axios';
import React from 'react';
import './scss/section_one_page.scss';

export default function Section13Component(){

    const [state, setState] = React.useState({
        image:''
    })

    const getDataApi=()=>{
        axios({
            url:'./data/sub4/section_link_image.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    image:res.data.Section13_image
                });
            }
        })
        .catch((err)=>{
            console.log(`AXIOS 실패!${err}`)
        })
    }

    React.useEffect(()=>{
        getDataApi();
    },[state.image])
    return (
        <section id='sub4_section_one_page'>
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <a href="!#"><img src={`./images/sub4_sec_one_page/${state.image}`} alt="" /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};