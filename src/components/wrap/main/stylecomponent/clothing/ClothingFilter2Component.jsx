import React from 'react'
import axios from 'axios';
// import react-router
import { Link } from 'react-router-dom';
import ClothingFilterComponentChild from './ClothingFilterComponentChild';

export default function ClothingFilter2Component() {

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
            item.caption.includes("컨템포러리")
            || item.caption.includes("contemporary")
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
    <article id="clothing">
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
                  <li><Link to="/style/clothing" className='on'><span>의류</span></Link></li>
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
                        <Link to='/style/clothing' className='filter-group__rapid-btn'>전체</Link>
                    </label>
                    <label>
                        <input type="radio" value='스트릿'/>
                        <Link to='/style/clothing/street' className='filter-group__rapid-btn'>스트릿</Link>
                    </label>
                    <label>
                        <input type="radio" value='컨템포러리'/>
                        <Link to='/style/clothing/contemp' className='filter-group__rapid-btn on'>컨템포러리</Link>
                    </label>
                    <label>
                        <input type="radio" value='스투시'/>
                        <Link to='/style/clothing/stussy' className='filter-group__rapid-btn'>스투시</Link>
                    </label>
                    <label>
                        <input type="radio" value='아더'/>
                        <Link to='/style/clothing/adererror' className='filter-group__rapid-btn'>아더 에러</Link>
                    </label>
                    <label>
                        <input type="radio" value='스톤'/>
                        <Link to='/style/clothing/stone' className='filter-group__rapid-btn'>스톤 아일랜드</Link>
                    </label>
                    <label>
                        <input type="radio" value='우영미'/>
                        <Link to='/style/clothing/wooyoungmi' className='filter-group__rapid-btn'>우영미</Link>
                    </label>
                  </div>
              </div>
              <div className="sort-container">
                <ul className="sort-list">
                  <li><button onClick={popularSort}>인기순</button></li>
                  <li><button onClick={recentSort}>최신순</button></li>
                </ul>
              </div>
              <ClothingFilterComponentChild post={state.post} sorted={state.sorted} />
            </div>
          </div>
        </div>
      </article>
  )
}
