import React from 'react'
import axios from 'axios';
// import react-router
import { Link } from 'react-router-dom';
import SneakersFilterComponentChild from './SneakersFilterComponentChild';

export default function SneakersFilter2Component() {

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
            item.caption.includes("아디다스")
            || item.caption.includes("adidas")
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
    <article id="sneakers">
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
                                    <input type="radio" value='전체'/>
                                    <Link to='/style/sneakers' className='filter-group__rapid-btn'>전체</Link>
                                </label>
                                <label>
                                    <input type="radio" value='나이키'/>
                                    <Link to='/style/sneakers/nike' className='filter-group__rapid-btn'>나이키</Link>
                                </label>
                                <label>
                                    <input type="radio" value='아디다스'/>
                                    <Link to='/style/sneakers/adidas' className='filter-group__rapid-btn on'>아디다스</Link>
                                </label>
                                <label>
                                    <input type="radio" value='오니츠카 타이거'/>
                                    <Link to='/style/sneakers/tiger' className='filter-group__rapid-btn'>오니츠카 타이거</Link>
                                </label>
                                <label>
                                    <input type="radio" value='아식스'/>
                                    <Link to='/style/sneakers/axics' className='filter-group__rapid-btn'>아식스</Link>
                                </label>
                                <label>
                                    <input type="radio" value='뉴발란스'/>
                                    <Link to='/style/sneakers/newb' className='filter-group__rapid-btn'>뉴발란스</Link>
                                </label>
                                <label>
                                    <input type="radio" value='살로몬'/>
                                    <Link to='/style/sneakers/salomon' className='filter-group__rapid-btn'>살로몬</Link>
                                </label>
                                <label>
                                    <input type="radio" value='미하라 야스히로'/>
                                    <Link to='/style/sneakers/mihara' className='filter-group__rapid-btn'>미하라 야스히로</Link>
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
