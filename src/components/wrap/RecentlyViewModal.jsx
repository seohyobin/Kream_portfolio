import React from 'react';
import './scss/recently_viewed_modal.scss';
import close from './img/viewed/close_black.svg';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default  function RecentlyViewModal({closeViewModal,local}){
const [viewData,setViewData]=React.useState([]);


const onClickModalClose=(e)=>{
    e.preventDefault();
    closeViewModal();
    
}
const getLocalStorage=()=>{
    let key ='KREAM_TEAM_RECENTLY_VIEW';
    if(localStorage.getItem(local.key)!==null){
        let viewData =JSON.parse(localStorage.getItem(key));
        setViewData(viewData);
    }
   
}


const savedTimestamp = localStorage.getItem("savedDate");

// 타임스탬프를 Date 객체로 변환
const savedDate = new Date(parseInt(savedTimestamp));

// 날짜를 원하는 형식으로 포맷팅
const formattedDate = savedDate.toLocaleDateString(); // 날짜를 "YYYY-MM-DD" 형식으로 변환
const formattedTime = savedDate.toLocaleTimeString(); // 시간을 "HH:MM:SS" 형식으로 변환

// console.log(formattedDate); // 출력: "2023-06-02"
// console.log(formattedTime); // 출력: "21:32:10"

React.useEffect(()=>{       
    getLocalStorage();
},[]);

React.useEffect(()=>{
    getLocalStorage();
},[local.sign]);


  // 모달 이외의 영역 클릭 시 닫기
  const handleOutsideClick =(e)=>{
    if (e.target === e.currentTarget) {
        closeViewModal();
    }
  };
  let {id} =useParams();
  const [state,setState] =React.useState({
    viewed1:[]
});
const {viewed1}=state;
  React.useEffect(()=>{

    if (localStorage.getItem('KREAM_TEAM_RECENTLY_VIEW') !== null) {
        let local1= JSON.parse(localStorage.getItem('KREAM_TEAM_RECENTLY_VIEW'));
        local1 = local1.filter((item)=>item.id === id);
        console.log(local1);

        setState({
            ...state,
            viewed1: local1
            
        })
        if (local1.length > 0) {
            const itemId = local1[0].id; // 로컬 스토리지에서 가져온 첫 번째 아이템의 id
            const linkPath = `/viewed/${itemId}`; // 라우트 링크 경로 설정
            console.log('라우트 링크 경로:', linkPath);
            // 이후 필요한 작업 수행
          }
        

    }
},[])


    return (
        <div id='viewed-modal'>
            <div className="viewed-container">
                <div className="viewed-left" onClick={handleOutsideClick}>

                </div>
                <div className="viewed-right">
                    <div className="viewed-header">
                        <a href="!#" onClick={onClickModalClose}>
                            <div className="row1">
                                <h2>SHOPPING HISTORY</h2>
                                <img src={close} alt="" />
                            </div>
                            <div className="view-product-wrap">
                                <div className="row2">
                                    <div className='viewed-day-list'>
                                        {/* <h3>today</h3>                                   */}
                                    </div>
                                </div>


                            {
                                viewData.map((item,idx)=>{
                                    return(
                                        <div className="viewed-product-content" key={idx}> 
                                        <Link to={`/shop/viewed/${item.id}`}>
                                            <div className="viewed-img">
                                                <img src={item.img} alt="" />
                                            </div>
                                            <div className="viewed-text">
                                                <p>{item.brand}</p>
                                                <h2 className='view-desc'>{item.descE}</h2>
                                                <h3>{item.price}</h3>
                                            </div>
                                        </Link>
                                    </div>
                                    )
                                })

                            }   



                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};