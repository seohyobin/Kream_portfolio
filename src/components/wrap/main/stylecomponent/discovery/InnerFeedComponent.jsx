import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import InnerFeedComponentChild from './InnerFeedComponentChild';

export default function InnerFeedComponent() {
  const [state, setState] = React.useState({
    profile: [],
    post: [],
    slide: [],
    n: [],
  });

  React.useEffect(() => {
    axios({
      url: "./data/style_page/found.json",
      method: "GET"
    })
      .then((res) => {
        if (res.status === 200) {

          const postImgCount = () => {
            const postImgCount = [];
            const posts = res.data.post;

            posts.forEach((post) => {
              postImgCount.push(post.postImg.length);
            });
            return postImgCount;
          };

          const postImgSlide = () => {
            const postImgSlide = [];
            const posts = res.data.post;
            posts.forEach(async (post) => {
              
              postImgSlide.push(post.postImg);
            });
            return postImgSlide;
          }

          setState({
            ...state,
            profile: res.data.profile,
            post: res.data.post,
            slide: postImgSlide(),
            n: postImgCount()
          });
        }
      })
      .catch((err) => {
        console.log(`AXIOS 실패 ! ${err}`);
      });
  }, []);

  return (
    <article className="subPage">
      <div className="container">
        <div className="gap">
          <div className="title">
            <h1>STYLE</h1>
          </div>
          <div className="content">
            <nav className="tap-container">
              <ul className="tap-inner">
                {/* 팔로잉 */}
                <li>
                  <Link to="/">
                    <span>팔로잉</span>
                  </Link>
                </li>
                {/* 발견 */}
                <li>
                  <Link to="/style" className="on">
                    <span>발견</span>
                  </Link>
                </li>
                {/* 랭킹 */}
                <li>
                  <Link to="/style/ranking">
                    <span>랭킹</span>
                  </Link>
                </li>
                {/* 스니커즈 */}
                <li>
                  <Link to="/style/sneakers">
                    <span>스니커즈</span>
                  </Link>
                </li>
                {/* ADYA */}
                <li>
                  <Link to="/style/adya">
                    <span>ADYA</span>
                  </Link>
                </li>
                {/* 럭셔리 */}
                <li>
                  <Link to="/style/luxury">
                    <span>럭셔리</span>
                  </Link>
                </li>
                {/* 의류 */}
                <li>
                  <Link to="/style/clothing">
                    <span>의류</span>
                  </Link>
                </li>
                {/* 가방 */}
                <li>
                  <Link to="/style/bags">
                    <span>가방</span>
                  </Link>
                </li>
                {/* 액세서리 */}
                <li>
                  <Link to="/style/accessory">
                    <span>액세서리</span>
                  </Link>
                </li>
                {/* 컬렉터블 */}
                <li>
                  <Link to="/style/collectable">
                    <span>컬렉터블</span>
                  </Link>
                </li>
              </ul>
            </nav>
            <InnerFeedComponentChild
              post={state.post}
              slide={state.slide}
              n={state.n}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
