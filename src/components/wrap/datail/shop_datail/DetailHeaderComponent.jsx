import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import './scss/header.scss';
import $ from 'jquery';
import { useParams } from 'react-router-dom';

export default function DetailHeaderComponent({product,allProduct,local}){

  
const [viewData,setViewData]=React.useState([]);
    let {id} =useParams();

const [state,setState]=React.useState({
    isHeader:false, 
   
})

const [lo,setLo]= React.useState({
    product1:{}
})
const {product1}=lo;


const getLocalStorage=()=>{

    let key ='KREAM_TEAM_RECENTLY_VIEW';

    if(localStorage.getItem(local.key)!==null){
        let viewData =JSON.parse(localStorage.getItem(key));
        setViewData(viewData);
    }
   
}


// React.useEffect(()=>{
//     getLocalStorage();
// },[]);

// React.useEffect(()=>{
//     getLocalStorage();
// },[local.sign])

    React.useEffect(()=>{
        $('.nav-top-name').on({
            click(){
                $('.nav-top-name').removeClass('on');
                $(this).addClass('on');

            }
        })
    })

    React.useEffect(()=>{
        let header =$('.header');
        let wrap = $('#wrap')
        let sec1Top = $('#wrap').offset().top+230;
        let isHeader=false;


        $(window).scroll(function(){
            if($(window).scrollTop() > sec1Top){
                isHeader =true;

            }
            else{
                isHeader=false
                
            }

            setState({
                ...state,
                isHeader:isHeader
            })
            console.log(isHeader);
        })

    },[])

    React.useEffect(()=>{
        //상품정보 가져오기
        if(localStorage.getItem('KREAM_TEAM_RECENTLY_VIEW')!==null){
            let result=JSON.parse(localStorage.getItem('KREAM_TEAM_RECENTLY_VIEW'));
            console.log(result);

            setState({
                ...state,
                product1:result[0]
            })
            console.log(result[0]);

        }

    },[])
    


    return (
    <>
      
        {state.isHeader &&
            (
        <div id="header2">
            <div className="h-container">
                <div className="h-content">
                    <div className="header-wrap1">

                                    <div className="header-box1">
                                        <div className="header-img" key={id}>
                                            <img src={`../../images/shop_main_all/${allProduct[id].img}`} alt="" />
                                        </div>
                                    </div>
                                    <div className="header-box2">
                                        <div className="product-info">
                                            <p className='p-tag1'>{allProduct[id].descE}</p>
                                            <p className='p-tag2'>{allProduct[id].descK}</p>
                                        </div>
                                    </div>
                    </div>
                    <div className="header-wrap2">
                        <div className="header-input">
                            <form name='' id='' method='POST' action="">
                                <input  className='header-in'type="text" name='' id='' placeholder='구매 가격을 입력하시오' />   
                                <button className='header-btn' type='submit'>구매</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            )
        }   
        

        <Outlet/>
        </>
    );
};
