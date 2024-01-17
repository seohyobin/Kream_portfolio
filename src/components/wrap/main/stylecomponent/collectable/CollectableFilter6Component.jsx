import React from 'react'
import axios from 'axios';
// import react-router
import { Link } from 'react-router-dom';
import CollectableFilterComponentChild from './CollectableFilterComponentChild';

export default function CollectableFilter6Component() {

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
            item.caption.includes("향수")
            || item.caption.includes("fragrance")
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
    <article id="collectable">
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
                  <li><Link to="/style/bags"><span>가방</span></Link></li>
                  {/* 액세서리 */}
                  <li><Link to="/style/accessory"><span>액세서리</span></Link></li>
                  {/* 컬렉터블 */}
                  <li><Link to="/style/collectable" className='on'><span>컬렉터블</span></Link></li>
                </ul>
              </nav>
              <div className="filter-group__container">
                  <div className="filter-group__filter">
                    <label>
                        <input type="radio" />
                        <Link to='/style/collectable' className='filter-group__rapid-btn'>전체</Link>
                    </label>
                    <label>
                        <input type="radio" value='레고'/>
                        <Link to='/style/collectable/lego' className='filter-group__rapid-btn'>레고</Link>
                    </label>
                    <label>
                        <input type="radio" value='아트토이'/>
                        <Link to='/style/collectable/arttoy' className='filter-group__rapid-btn'>아트토이</Link>
                    </label>
                    <label>
                        <input type="radio" value='인테리어'/>
                        <Link to='/style/collectable/interier' className='filter-group__rapid-btn'>인테리어</Link>
                    </label>
                    <label>
                        <input type="radio" value='캠핑'/>
                        <Link to='/style/collectable/camping' className='filter-group__rapid-btn'>캠핑</Link>
                    </label>
                    <label>
                        <input type="radio" value='슈프림'/>
                        <Link to='/style/collectable/supreme' className='filter-group__rapid-btn'>슈프림</Link>
                    </label>
                    <label>
                        <input type="radio" value='향수'/>
                        <Link to='/style/collectable/fragrance' className='filter-group__rapid-btn on'>향수</Link>
                    </label>
                  </div>
              </div>
              <div className="sort-container">
                <ul className="sort-list">
                  <li><button onClick={popularSort}>인기순</button></li>
                  <li><button onClick={recentSort}>최신순</button></li>
                </ul>
              </div>
              <CollectableFilterComponentChild post={state.post} sorted={state.sorted} />
            </div>
          </div>
        </div>
      </article>
  )
}
