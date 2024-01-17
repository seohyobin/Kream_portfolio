import React from 'react';
import axios from 'axios';
import TagsComponentChild from './TagsComponentChild';

export default function Tag3Component() {

    const [state, setState] = React.useState({
        profile: [],
        post: [],
        n: 0,
      });
      
      React.useEffect(() => {
        axios({
          url: "./data/style_page/found.json",
          method: "GET",
        })
          .then((res) => {
            if (res.status === 200) {
              const filteredData = res.data.post.filter((item) =>
                item.caption.includes("#오늘의신발") 
                || item.caption.includes("나이키")
                || item.caption.includes("아디다스")
                || item.caption.includes("오니츠카 타이거")
                || item.caption.includes("아식스")
                || item.caption.includes("뉴발란스")
                || item.caption.includes("살로몬")
                || item.caption.includes("미하라 야스히로")
                || item.caption.includes("데일리슈즈")
              );
              setState({
                ...state,
                post: filteredData,
                n: filteredData.length,
              });
            }
          })
          .catch((err) => {
            console.log(`AXIOS 실패 ! ${err}`);
          });
      }, []);
      
      return (
        <article className='tags'>
          <div className="container">
            <div className="gap">
              <div className="title">
                <h1>#오늘의신발</h1>
              </div>
              <div className="content">
                <TagsComponentChild post={state.post} n={state.n} />
              </div>
            </div>
          </div>
        </article>
      );
}
