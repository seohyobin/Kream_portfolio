import React from 'react'
import axios from 'axios';
// import react-router
import { Link } from 'react-router-dom';
import SneakersFilterComponentChild from './LuxuryFilterComponentChild';

export default function SneakersFilter7Component() {

  const [state, setState] = React.useState({
    profile: [],
    post: [],
    sorted: []
  });
  
  React.useEffect(() => {
    axios({
      url: "./data/style_page/found.json",
      method: "GET",
    })
      .then((res) => {
        if (res.status === 200) {
          const filteredData = res.data.post.filter((item) =>
            item.caption.includes("롤렉스")
            || item.caption.includes("rolex")
          );
          setState({
            ...state,
            post: filteredData
          });
        }
      })
      .catch((err) => {
        console.log(`AXIOS 실패 ! ${err}`);
      });
  }, []);

  const recentSort = () => {
    const sortedImages = [...state.post].reverse();
    setState({
      ...state,
      sorted: sortedImages
    });
  }

  const popularSort = () => {
    const sorted = [...state.post].sort((a, b) => b.likes - a.likes);
    setState({
      ...state,
      sorted: sorted
    });
  }


  return (
    <article id="luxury">
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
                  <li><Link to="/style/sneakers" className='on'><span>스니커즈</span></Link></li>
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
                        <input type="radio" />
                        <Link to='/style/luxury' className='filter-group__rapid-btn'>전체</Link>
                    </label>
                    <label>
                        <input type="radio" value='루이비통'/>
                        <Link to='/style/luxury/lvmh' className='filter-group__rapid-btn'>루이비통</Link>
                    </label>
                    <label>
                        <input type="radio" value='샤넬'/>
                        <Link to='/style/luxury/channel' className='filter-group__rapid-btn'>샤넬</Link>
                    </label>
                    <label>
                        <input type="radio" value='에르메스'/>
                        <Link to='/style/luxury/hermes' className='filter-group__rapid-btn'>에르메스</Link>
                    </label>
                    <label>
                        <input type="radio" value='발렌시아가'/>
                        <Link to='/style/luxury/balenciaga' className='filter-group__rapid-btn'>발렌시아가</Link>
                    </label>
                    <label>
                        <input type="radio" value='프라다'/>
                        <Link to='/style/luxury/prada' className='filter-group__rapid-btn'>프라다</Link>
                    </label>
                    <label>
                        <input type="radio" value='미우미우'/>
                        <Link to='/style/luxury/miumiu' className='filter-group__rapid-btn'>미우미우</Link>
                    </label>
                    <label>
                        <input type="radio" value='롤렉스'/>
                        <Link to='/style/luxury/rolex' className='filter-group__rapid-btn on'>롤렉스</Link>
                    </label>
                  </div>
              </div>
              <div className="sort-container">
                <ul className="sort-list">
                  <li><button onClick={popularSort}>인기순</button></li>
                  <li><button onClick={recentSort}>최신순</button></li>
                </ul>
              </div>
              <SneakersFilterComponentChild post={state.post} sorted={state.sorted} />
            </div>
          </div>
        </div>
      </article>
  )
}
