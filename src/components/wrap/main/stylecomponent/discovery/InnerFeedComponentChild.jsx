import React from 'react'
import { useState } from 'react'

export default function InnerFeedComponentChild( { post, slide, n } ) {

    const [isLimited, setIsLimited] = useState(true);
    const [current, setCurrent] = useState([]);
    let length = 0;

    /* 글자수 제한 출력 */
    const limitCaption = (caption) => {
        if(caption.length > 40){
            return caption.slice(0, 40) + '...';
        }
        return caption;
    };

    React.useEffect(()=>{                
        n.map((item,idx) => {           
            current[idx]=0;
            setCurrent([...current, current]);
            if(current.length>49) {
                setCurrent([...current, current.pop()]);
                return;
            }
        });
        setCurrent([...current, current.pop()]);
    },[n])

    
    /* 슬라이드 버튼 */
    const nextSlide = (e, idx) => {        
        e.preventDefault();
           
            length = n[idx]-1;
 
            current[idx] =  current[idx] === length  ? 0 : current[idx] + 1;
            setCurrent( [...current] );                        

            console.log(idx, n[idx], current[idx] );
    };

    const prevSlide = (e, idx) => {
        e.preventDefault();


        console.log(idx, n[idx], current[idx] );        
        length = n[idx]-1;
    
        current[idx] =  current[idx] === 0 ? length : current[idx] - 1;
        setCurrent( [...current] );                        

        console.log(idx, n[idx], current[idx] );

    };

  return (
    <div className='feeds__box'>
        {
            post.map((item, idx)=>{
                return(
                    <div className="feeds" key={idx}>
                        <div className="social-profile__container">
                            <div className="social-profile__box">
                                <a href="!#" className="social-profile__img"><img src={item.userImg} alt="" /></a>
                                <a href="!#" className="social-profile__id">
                                    <p className='profile__name'>{item.userName}</p>
                                    <p className='profile__date'>{idx+1}일 전</p>
                                </a>
                                <button type='button' className="social-profile__btn">팔로우</button>
                            </div>
                        </div>
                        <div className="social-feed__container">
                            <div className="social-feed__box">
                                <ul className="feed-img__box">
                                    {
                                        item.postImg.map((img, num) => {
                                            return (
                                                <li key={num} className={num === current[idx] ? 'feed-img__slide active' : 'feed-img__slide'} >
                                                    {num === current[idx] && <img src={img.imgAddr} alt="slide_image" />} {/* 클릭한 위치만 해당할 수 있도록 num === current 조건 수정 */}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <button className="prev-slide__btn" onClick={(e)=>prevSlide(e, idx)}><img src="./images/innerFeed/arr-left-circle.4d4550b.svg" alt="" />이전</button>
                                <button className="next-slide__btn" onClick={(e)=>nextSlide(e, idx)}><img src="./images/innerFeed/arr-right-circle.e115a60.svg" alt="" />다음</button>
                                <ul className="feed-img__dot">
                                    {
                                        item.postImg.map((img, dotNum) => {
                                            if(item.postImg.length !== 1){
                                                return (
                                                    <li key={dotNum} className={dotNum === current[idx]  ? 'on' : ''}><button>1</button></li>
                                                )
                                            }
                                            else{
                                                return ''
                                            }
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="social-feed__cnt">
                                <span className="current-number">{current[idx]+1}</span>
                                <span>/</span>
                                <span className="total-number">{item.postImg.length}</span>
                            </div>
                        </div>
                        <div className="social-comments__container">
                            <div className="social-comments__btn">
                                <div className="comment-btn__box">
                                <a href="!#"><i class="fa-regular fa-heart"></i></a>
                                <a href="!#"><i class="fa-regular fa-comment"></i></a>
                                </div>
                                <a href="!#" className="comment-btn__share"><i class="fa-solid fa-arrow-up-from-bracket"></i></a>
                            </div>
                            <div className="social-comments__cnt">
                                <a href="!#" className='comments__cnt'>좋아요 <strong>{item.likes}</strong>개</a>
                            </div>
                            <div className="social-comments__text">
                                <span className="comments__text">{isLimited ? limitCaption(item.caption) : item.caption}</span> {/* 글자수 제한 기능 */}
                                {item.caption.length > 40 && (
                                    <button className='view-more' onClick={(e) => setIsLimited(e, !isLimited)}>{isLimited ? '더보기' : '접기'}</button>
                                )}
                            </div>
                            <div className="social-commnets__comment">
                                <div className="comment__container">
                                <a href="!#" className="comment__cnt">댓글 <strong>{item.comments.length}</strong>개</a>
                                {
                                    item.comments.map((comment, idx) => {
                                        return(
                                            <div className="comment__list" key={idx}>
                                                <div className="comment__box">
                                                <a href="!#" className="comment__profile"><img src={comment.userImg} alt="profileimage" /></a>
                                                <div className="comment__detail">
                                                    <div className="comment__id">
                                                    <a href="!#" className="comment-user__name">{comment.userName}</a>
                                                    <span className="comment-user__text">{comment.text}</span>
                                                    </div>
                                                    <div className="comment__date">
                                                    <span>{item.posingDate}</span>
                                                    </div>
                                                </div>
                                                <a href="!#" className="comment__likes"><i class="fa-regular fa-heart"></i></a>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                {/* <a href="!#" className='comment-more__btn'>댓글 더 보기...</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}