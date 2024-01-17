import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import RankingComponetChild from './ranking/RankingComponetChild';

export default function RankingComponent() {
    
    const [state, setState] = React.useState({
        profile: [],
        post: [],
        current: 0,
        sortNum: 0
      });

    
      React.useEffect(()=>{
          axios({
              url: './data/style_page/found.json',
              method: 'GET'
          })
          .then((res)=>{
              if(res.status===200){
                const sorted = [...res.data.post].sort((a, b) => b.likes - a.likes);
                  setState({
                      ...state,
                      profile: res.data.profile,
                      post: sorted
                  })
              }
          })
          .catch((err)=>{
              console.log( `AXIOS 실패 ! ${err}`);
          });
    
      },[]);

      const onClickRapidBtn = () => {
        setState({
            ...state,
            current : 0
        })
      }
      const onClickDailyBtn = () => {
        setState({
            ...state,
            current : 1
        })
      }
      const onClickWeeklyBtn = () => {
        setState({
            ...state,
            current : 2
        })
      }

      

  return (
    <section id="ranking">
        <div className="container">
            <div className="gap">
                <div className="title">
                    <h1>RANKING</h1>
                </div>
                <div className="content">
                    <div className="top-sticky__box">         
                            <nav className="tap-container">
                                <ul className="tap-inner">
                                    {/* 팔로잉 */}
                                    <li><Link to="/"><span>팔로잉</span></Link></li>
                                    {/* 발견 */}
                                    <li><Link to="/style"><span>발견</span></Link></li>
                                    {/* 랭킹 */}
                                    <li><Link to="/style/ranking" className='on'><span>랭킹</span></Link></li>
                                    {/* 스니커즈 */}
                                    <li><Link to="/style/sneakers"><span>스니커즈</span></Link></li>
                                    {/* ADYA */}
                                    <li><Link to="/style/adya"><span>ADYA</span></Link></li>
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
                            <div className="filter-group__container">
                                <div className="filter-group__filter">
                                    <label>
                                        <input type="radio" className='blind' value='급상승'/>
                                        <Link to='/style/ranking' className={ state.current === 0 ? 'filter-group__rapid-btn on': 'filter-group__rapid-btn' } onClick={onClickRapidBtn}>급상승</Link>
                                    </label>
                                    <label>
                                        <input type="radio" className='blind' value='데일리'/>
                                        <Link to='/style/ranking' className={ state.current === 1 ? 'filter-group__rapid-btn on': 'filter-group__rapid-btn' } onClick={onClickDailyBtn}>데일리</Link>
                                    </label>
                                    <label>
                                        <input type="radio" className='blind' value='위클리'/>
                                        <Link to='/style/ranking' className={ state.current === 2 ? 'filter-group__rapid-btn on': 'filter-group__rapid-btn' } onClick={onClickWeeklyBtn}>위클리</Link>
                                    </label>
                                </div>
                                <div className="filter-group__update-info">
                                    <span>UPDATE</span>
                                    <p>05.19 00:00기준</p>
                                    <Link to='/style/exhibitions'><i class="fa-regular fa-circle-question"></i></Link>
                                </div>
                            </div>
                        </div>
                    <div className="ranking-feed__container">
                        <RankingComponetChild post={state.post} />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
