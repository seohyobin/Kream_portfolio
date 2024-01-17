import React from 'react';
import axios from 'axios';
// import react-router
import { Link } from 'react-router-dom';
// import component file
import FeedComponent from './FeedComponent';

export default function AdyaComponent() {

  const [state, setState] = React.useState({
    profile: [],
    post: [],
    sorted: []
  });

  React.useEffect(()=>{
      axios({
          url: './data/style_page/found.json',
          method: 'GET'
      })
      .then((res)=>{
          if(res.status===200){
              setState({
                  ...state,
                  profile: res.data.profile,
                  post: res.data.post,
                  sorted: res.data.post
              })
          }
      })
      .catch((err)=>{
          console.log( `AXIOS 실패 ! ${err}`);
      });

  },[]);
  
  
  return (
      <section id="adya">
        <div className="container">
          <div className="gap">
            <div className="title">
              <h1>STYLE</h1>
            </div>
            <div className="content">
              <nav className="tap-container">
                <ul className="tap-inner">
                  {/* 팔로잉 */}
                  <li><Link to="/"><span>팔로잉</span></Link></li>
                  {/* 발견 */}
                  <li><Link to="/style"><span>발견</span></Link></li>
                  {/* 랭킹 */}
                  <li><Link to="/style/ranking"><span>랭킹</span></Link></li>
                  {/* 스니커즈 */}
                  <li><Link to="/style/sneakers"><span>스니커즈</span></Link></li>
                  {/* ADYA */}
                  <li><Link to="/style/adya" className='on'><span>ADYA</span></Link></li>
                  {/* 럭셔리 */}
                  <li><Link to="/style/luxury"><span>럭셔리</span></Link></li>
                  {/* 의류 */}
                  <li><Link to="/style/clothing"><span>의류</span></Link></li>
                  {/* 가방 */}
                  <li><Link to="/style/bags"><span>가방</span></Link></li>
                  {/* 액세서리 */}
                  <li><Link to="/style/accessory"><span>액세서리</span></Link></li>
                  {/* 컬렉터블 */}
                  <li><Link to="/style/collectable"><span>컬렉터블</span></Link></li>
                </ul>
              </nav>
              <FeedComponent post={state.post} sorted={state.sorted} />
            </div>
          </div>
        </div>
      </section>
  )
}
