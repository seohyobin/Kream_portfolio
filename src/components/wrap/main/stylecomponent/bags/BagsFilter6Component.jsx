import React from 'react'
import axios from 'axios';
// import react-router
import { Link } from 'react-router-dom';
import BagsFilterComponentChild from './BagsFilterComponentChild';

export default function BagsFilter6Component() {

  const [state, setState] = React.useState({
    profile: [],
    post: [],
    sorted: []
  });
  
  React.useEffect(() => {
    axios({
      url: "./data/style_page/found.json",
      method: "GET"
    })
      .then((res) => {
        if (res.status === 200) {
          const filteredData = res.data.post.filter((item) =>
            item.caption.includes("에코백")
            || item.caption.includes("ecobag")
            || item.caption.includes("eco")
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
    <article id="bags">
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
                  <li><Link to="/style/adya"><span>ADYA</span></Link></li>
                  {/* 럭셔리 */}
                  <li><Link to="/style/luxury"><span>럭셔리</span></Link></li>
                  {/* 의류 */}
                  <li><Link to="/style/clothing"><span>의류</span></Link></li>
                  {/* 가방 */}
                  <li><Link to="/style/bags" className='on'><span>가방</span></Link></li>
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
                        <Link to='/style/bags' className='filter-group__rapid-btn'>전체</Link>
                    </label>
                    <label>
                        <input type="radio" value='미니백'/>
                        <Link to='/style/bags/minibag' className='filter-group__rapid-btn'>미니백</Link>
                    </label>
                    <label>
                        <input type="radio" value='백팩'/>
                        <Link to='/style/bags/backpack' className='filter-group__rapid-btn'>백팩</Link>
                    </label>
                    <label>
                        <input type="radio" value='셀린느'/>
                        <Link to='/style/bags/celine' className='filter-group__rapid-btn'>셀린느</Link>
                    </label>
                    <label>
                        <input type="radio" value='크로스백'/>
                        <Link to='/style/bags/crossbag' className='filter-group__rapid-btn'>크로스백</Link>
                    </label>
                    <label>
                        <input type="radio" value='샤넬'/>
                        <Link to='/style/bags/channelbag' className='filter-group__rapid-btn'>샤넬</Link>
                    </label>
                    <label>
                        <input type="radio" value='에코백'/>
                        <Link to='/style/bags/ecobag' className='filter-group__rapid-btn on'>에코백</Link>
                    </label>
                    <label>
                        <input type="radio" value='코스'/>
                        <Link to='/style/bags/cos' className='filter-group__rapid-btn'>코스</Link>
                    </label>
                  </div>
              </div>
              <div className="sort-container">
                <ul className="sort-list">
                  <li><button onClick={popularSort}>인기순</button></li>
                  <li><button onClick={recentSort}>최신순</button></li>
                </ul>
              </div>
              <BagsFilterComponentChild post={state.post} sorted={state.sorted} />
            </div>
          </div>
        </div>
      </article>
  )
}
