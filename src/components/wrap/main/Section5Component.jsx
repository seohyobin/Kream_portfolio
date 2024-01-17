import axios from 'axios';
import React from 'react';
import './scss/section5.scss';

export default function Section5Component(){

    const [state, setState] = React.useState({
        image:''
    })

    const getDataApi=()=>{
        axios({
            url:'./data/section_link_image.json',
            method:'GET'
        })
        .then((res)=>{
            
            if(res.status===200){
                setState({
                    ...state,
                    image:res.data.Section5_image
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
        <section id='section5'>
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <a href="!#"><img src={`./images/sec_one_page/${state.image}`} alt="" /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};