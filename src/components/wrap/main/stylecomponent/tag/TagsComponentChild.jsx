import React from 'react';

export default function TagsComponentChild({ post }) {
  return (
    <div className="feed-container">
      <div className="feed-container__inner">
        {post.map((item) => (
          <a className="feed-container__item" href="!#">
            <div className="card-box">
              <div className="card-box__img">
                <img src={item.mainImg} alt="카드박스 SNS이미지" />
              </div>
              <div className="card-box__detail">
                <div className="card-box__user">
                  <img src={item.userImg} alt="카드박스 SNS로고" />
                  <p>{item.userName}</p>
                  <button>
                    <p>
                      <i class="fa-regular fa-heart"></i>
                    </p>
                    <span>{item.likes}</span>
                  </button>
                </div>
                <p className="card-box__text">{item.caption}</p>
              </div>
            </div>
            <div className="img-count">
              <span>+4</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
