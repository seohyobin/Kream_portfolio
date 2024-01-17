import { post } from 'jquery'
import React from 'react'

export default function RankingComponetChild( {post} ) {
  return (
    <article className="ranking-feed__users">
        {
            post.map((item, idx) => {
                if(idx < 19){
                    return(
                        <div className="feed-users__box">
                            <div className="feed-users__profile">
                                <em>{idx+1}</em>
                                <a href="!#">
                                    <div className="feed-users__img"><img src={item.userImg} alt="" /></div>
                                    <div className="feed-users__info">
                                        <span className="user__name">{item.userName}</span>
                                        <span className="user__subtitle"> 팔로워 {item.followers} </span>
                                    </div>
                                </a>
                                <button type='button' className='feed-users__btn'>팔로우</button>
                            </div>
                            <div className="feed-users__post">
                                {
                                    item.postImg.map((img,num) => {
                                        if(num < 3){
                                            return(
                                                <div className="user-post__card">
                                                    <a href="!#">
                                                        <img src={img.imgAddr} alt="유저 사진첩" />
                                                        <p>
                                                            <span>
                                                                <i class="fa-solid fa-heart"></i> {img.like}
                                                            </span>
                                                        </p>
                                                    </a>
                                                </div>
                                            )
                                        }
                                        else{
                                            return '';
                                        }
                                    })
                                }
                                
                            </div>
                        </div>
                    )
                }
                else{
                    return '';
                }
            })
        }
    </article>
  )
}
