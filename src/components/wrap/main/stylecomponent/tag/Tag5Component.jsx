import React from 'react';
import axios from 'axios';
import TagsComponentChild from './TagsComponentChild';

export default function Tag5Component() {

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
                item.caption.includes("#줌인리뷰")
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
                <h1>#줌인리뷰</h1>
              </div>
              <div className="content">
                <TagsComponentChild post={state.post} n={state.n} />
              </div>
            </div>
          </div>
        </article>
      );
}
