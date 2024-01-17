import React from 'react'

import { Link } from 'react-router-dom';

export default function ExhibitionsComponent() {
  return (
    <section id="exhibitions">
        <div className="container">
            <div className="gap">
                <div className="exhibition__bg">
                    <figure className="img__container">
                        <div className="img__link"></div>
                        <img src="./images/a_94f6963e4a8642e49f0b3f861f9fc939.jpg" alt="데일리 위클리 미션" />
                    </figure>
                </div>
                <div className="exhibition__img">
                    <figure className="img__container">
                        <div className="img__link"></div>
                        <img src="./images/a_998c800d6e874ed187f11073f0134f08.jpg" alt="" />
                    </figure>
                </div>
                <div className="exhibition__img">
                    <figure className="img__container">
                        <div className="img__link"></div>
                        <img src="./images/a_99fa44d09a804483b1d77ebee71474b1.jpg" alt="" />
                    </figure>
                </div>
                <div className="exhibition__img">
                    <figure className="img__container">
                        <div className="img__link"></div>
                        <img src="./images/a_19ea872b814f445494d873a2e2e0a936.jpg" alt="" />
                        <Link to="/style/ranking">
                            <span className='blind'>link</span>
                        </Link>
                    </figure>
                </div>
                <div className="exhibition__warning">
                    <div className="warning__container">
                        <h3>주의사항</h3>
                        <ul className="waring__list">
                            <li>포인트 지급: 위클리, 데일리 랭킹 모두 매주 월요일 지급됩니다. (랭킹 선정 주차 기준 차주 월요일 지급)</li>
                            <li>1인에게 1주일 간 지급 가능한 최대 포인트는 1만 포인트입니다. (데일리 랭킹, 위클리 랭킹 동시 선정 시 1만 포인트 지급)</li>
                            <li>위클리 랭킹 업데이트 시간: 매주 일~일요일 업로드된 게시글 기준, 차주 월요일 밤 12시 업데이트</li>
                            <li>데일리 랭킹 업데이트 시간: 매일 업로드된 게시글 기준, 다음 날 자정 업데이트 (예: 화요일 데일리 랭킹: 월요일 업로드 게시글 기준 선정)</li>
                            <li>서비스 이용 정책을 위반한 내역이 없는 회원에 한해 참여로 인정됩니다.</li>
                            <li>본 프로모션은 당사 사정으로 변경 또는 중단될 수 있습니다.</li>
                        </ul>
                    </div>
                </div>
                <div className="exhibition__share">
                    <button type='button'><i class="fa-solid fa-share-nodes"></i>친구에게 공유하기</button>
                </div>
            </div>
        </div>
    </section>
  )
}
