import React from 'react';
import { Link } from 'react-router-dom';

export default function FeedComponent({post, sorted}) {


  return (

    <div className="feed-container">
        <div className='feed-container__inner'>

            {
                sorted.length > 0 ? (
                    sorted.map((item, idx) => {
                        return(
                            <Link to='/style/inner' className='feed-container__item' key={idx}>
                                <div className="card-box">
                                    <div className="card-box__img">
                                        <img src={item.mainImg} alt="카드박스 SNS이미지" />
                                    </div>
                                    <div className="card-box__detail">
                                    <div className="card-box__user">
                                        <img src={item.userImg} alt="카드박스 SNS로고" />
                                        <p>{item.userName}</p>
                                        <button>
                                        <p><i class="fa-regular fa-heart"></i></p>
                                        <span>{item.likes}</span>
                                        </button>
                                    </div>
                                    <p className="card-box__text">{item.caption}</p>
                                    </div>
                                </div>
                                <div className="img-count">
                                    <span>+{item.postImg.length}</span>
                                </div>
                            </Link>
                        )
                    })
                ) : (
                    post.map((item, idx)=>{
                        return(
                            <Link to='/style/inner' className='feed-container__item' key={idx}>
                                <div className="card-box">
                                    <div className="card-box__img">
                                        <img src={item.mainImg} alt="카드박스 SNS이미지" />
                                    </div>
                                    <div className="card-box__detail">
                                    <div className="card-box__user">
                                        <img src={item.userImg} alt="카드박스 SNS로고" />
                                        <p>{item.userName}</p>
                                        <button>
                                        <p><i class="fa-regular fa-heart"></i></p>
                                        <span>{item.likes}</span>
                                        </button>
                                    </div>
                                    <p className="card-box__text">{item.caption}</p>
                                    </div>
                                </div>
                                <div className="img-count">
                                    <span>+{item.postImg.length}</span>
                                </div>
                            </Link>
                        )
                    })
                )
            }

        </div>
    </div>
  )
}
