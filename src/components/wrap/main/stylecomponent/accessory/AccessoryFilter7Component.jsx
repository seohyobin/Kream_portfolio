import React from 'react'
import axios from 'axios';
// import react-router
import { Link } from 'react-router-dom';
import AccessoryFilterComponentChild from './AccessoryFilterComponentChild';

export default function AccessoryFilter7Component() {

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
            item.caption.includes("지갑")
            || item.caption.includes("wallet")
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
    <article id="accessory">
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
                  <li><Link to="/style/accessory" className='on'><span>액세서리</span></Link></li>
                  {/* 컬렉터블 */}
                  <li><Link to="/style/collectable"><span>컬렉터블</span></Link></li>
                </ul>
              </nav>
              <div className="filter-group__container">
                  <div className="filter-group__filter">
                    <label>
                        <input type="radio" />
                        <Link to='/style/accessory' className='filter-group__rapid-btn'>전체</Link>
                    </label>
                    <label>
                        <input type="radio" value='모자'/>
                        <Link to='/style/accessory/cap' className='filter-group__rapid-btn'>모자</Link>
                    </label>
                    <label>
                        <input type="radio" value='주얼리'/>
                        <Link to='/style/accessory/jewelry' className='filter-group__rapid-btn'>주얼리</Link>
                    </label>
                    <label>
                        <input type="radio" value='폰케이스'/>
                        <Link to='/style/accessory/phonecase' className='filter-group__rapid-btn'>폰케이스</Link>
                    </label>
                    <label>
                        <input type="radio" value='헤드폰'/>
                        <Link to='/style/accessory/headphone' className='filter-group__rapid-btn'>헤드폰</Link>
                    </label>
                    <label>
                        <input type="radio" value='키링'/>
                        <Link to='/style/accessory/keyring' className='filter-group__rapid-btn'>키링</Link>
                    </label>
                    <label>
                        <input type="radio" value='스카프'/>
                        <Link to='/style/accessory/scarf' className='filter-group__rapid-btn'>스카프</Link>
                    </label>
                    <label>
                        <input type="radio" value='지갑'/>
                        <Link to='/style/accessory/wallet' className='filter-group__rapid-btn on'>지갑</Link>
                    </label>
                  </div>
              </div>
              <div className="sort-container">
                <ul className="sort-list">
                  <li><button onClick={popularSort}>인기순</button></li>
                  <li><button onClick={recentSort}>최신순</button></li>
                </ul>
              </div>
              <AccessoryFilterComponentChild post={state.post} sorted={state.sorted} />
            </div>
          </div>
        </div>
      </article>
  )
}
