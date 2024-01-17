import React from 'react';
import axios from 'axios';
import FeedComponent from './stylecomponent/FeedComponent';

import { Link, Outlet } from 'react-router-dom';

export default function StyleComponent() {

  const [state, setState] = React.useState({
    profile: [],
    post: [],
    sorted: [],
    n: 0
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
                  n: res.data.length
              })
          }
      })
      .catch((err)=>{
          console.log( `AXIOS 실패 ! ${err}`);
      });

  },[]);

  const recentSort = () => {
    let sortedImages = [...state.post].reverse();  
    setState({
      ...state,
      sorted: sortedImages
      // post: sortedImages
    });
  }

  const popularSort = () => {
    const sorted = [...state.post].sort((a, b) => b.likes - a.likes);
    setState({
      ...state,
      sorted: sorted
      // post: sorted
    });
  }
    
  
  return (
    <>
      <section id="style">
        <div className="container">
          <div className="gap">
            <div className="title">
              <h1>STYLE</h1>
            </div>
            <div className="content">
              <nav className="tap-container">
                <ul className="tap-inner">
                  {/* 팔로잉 */}
                  <li><Link to=""><span>팔로잉</span></Link></li>
                  {/* 발견 */}
                  <li><Link to="" className='on'><span>발견</span></Link></li>
                  {/* 랭킹 */}
                  <li><Link to="ranking"><span>랭킹</span></Link></li>
                  {/* 스니커즈 */}
                  <li><Link to="sneakers"><span>스니커즈</span></Link></li>
                  {/* ADYA */}
                  <li><Link to="adya"><span>ADYA</span></Link></li>
                  {/* 럭셔리 */}
                  <li><Link to="luxury"><span>럭셔리</span></Link></li>
                  {/* 의류 */}
                  <li><Link to="clothing"><span>의류</span></Link></li>
                  {/* 가방 */}
                  <li><Link to="bags"><span>가방</span></Link></li>
                  {/* 액세서리 */}
                  <li><Link to="accessory"><span>액세서리</span></Link></li>
                  {/* 컬렉터블 */}
                  <li><Link to="collectable"><span>컬렉터블</span></Link></li>
                </ul>
              </nav>
              <div className="tag-container">
                <Link to="tag1">
                  <div className="tag-box">
                    <img src="./images/tagImg/tagImg1.jpg" alt="" />
                    <p>#스타일랭킹</p>
                  </div>
                </Link>
                <Link to="tag2">
                  <div className="tag-box">
                    <img src="./images/tagImg/tagImg2.jpg" alt="" />
                    <p>#FocusOnMe</p>
                  </div>
                </Link>
                <Link to="tag3">
                  <div className="tag-box">
                    <img src="./images/tagImg/tagImg3.jpg" alt="" />
                    <p>#오늘의신발</p>
                  </div>
                </Link>
                <Link to="tag4">
                  <div className="tag-box">
                    <img src="./images/tagImg/tagImg4.jpg" alt="" />
                    <p>#OOTD</p>
                  </div>
                </Link>
                <Link to="tag5">
                  <div className="tag-box">
                    <img src="./images/tagImg/tagImg5.jpg" alt="" />
                    <p>#줌인리뷰</p>
                  </div>
                </Link>
                <Link to="tag6">
                  <div className="tag-box">
                    <img src="./images/tagImg/tagImg6.jpg" alt="" />
                    <p>#조던</p>
                  </div>
                </Link>
                <Link to="tag7">
                  <div className="tag-box">
                    <img src="./images/tagImg/tagImg7.jpg" alt="" />
                    <p>#스투시</p>
                  </div>
                </Link>
                <Link to="tag8">
                  <div className="tag-box">
                    <img src="./images/tagImg/tagImg8.jpg" alt="" />
                    <p>#스타일</p>
                  </div>
                </Link>
                <Link to="tag9">
                  <div className="tag-box">
                    <img src="./images/tagImg/tagImg9.jpg" alt="" />
                    <p>#챌린지</p>
                  </div>
                </Link>
              </div>
              <div className="sort-container">
                <ul className="sort-list">
                  <li><button onClick={popularSort}>인기순</button></li>
                  <li><button onClick={recentSort}>최신순</button></li>
                </ul>
              </div>
              <FeedComponent post = {state.post} sorted = {state.sorted} />
            </div>
          </div>
        </div>
      </section>
      <Outlet/>
      </>
  )
}