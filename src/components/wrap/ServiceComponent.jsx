import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import "./service.scss";
import axios from "axios";
import Page2NationComponent from "./Page2NationComponent";
import { map } from "jquery";
import TitleComponent from "./TitleComponent";
import PostComponent from "./PostComponent";

export default function ServiceComponent() {
  //처음 페이지네이션 생성을 위한 총 글 갯수 가져와서 담는 스테이트
  const [totalPostsNumber, setTotalPostsNumber] = useState(0);
  //현재 페이지가 몇 페이지인지 담는 스테이트
  const [currentPage, setCurrentPage] = useState(1);
  //현재 페이지에 맞는 글 제목들을 가져와서 담는 스테이트
  const [currentPageTitles, setCurrentPageTitles] = useState([]);
  //사용자가 현재 페이지에서 선택한 글의 제목을 담는 스테이트
  const [currentPostTitle, setcurrentPostTitle] = useState("");
  //클릭한 글 가져와서 글 제목 글 내용 생성일자 idx 담는 스테이트
  const [currentPost, setCurrentPost] = useState({});
  const location = useLocation();

  //현재 보고 있는 페이지 글 제목들 가져오는 액시우스
  useEffect(() => {
    const fetchCurrentViewPosts = async () => {
      let idxData = new URLSearchParams();
      let startPost = 0;
      //모델에서 스타트포스트에서 19를 더한 idx까지
      //그러닌깐 스타트포스트에서부터 20개 글제목을 가져온다
      if (currentPage === 1) {
        startPost = 1;
      } else {
        //현재 페이지가 2이면 글 페이지에서 보일 제일 처음 글 제목의 idx는
        //21이다.
        //6 페이지이면 인덱스가 101~120까지의 글 제목들을 볼 수 있다.
        startPost = (currentPage - 1) * 20 + 1;
      }
      idxData.append("idx", startPost);
      const response = await axios({
        url: "http://janeseo0530.cafe24.com/JSP/kream_getCurrentViewPostsTitle.jsp",
        method: "POST",
        data: {},
        params: idxData,
      });
      setCurrentPageTitles(response.data);
    };
    fetchCurrentViewPosts();
  }, [currentPage]);

  //처음에 총 페이지 갯수 가져오는 메서드 페이지네이션 구성을 위해
  useEffect(() => {
    const fetchTotalPostsNumber = async () => {
      const response = await axios.get("http://janeseo0530.cafe24.com/JSP/kream_getTotalPostsNumber.jsp");
      setTotalPostsNumber(response.data);
    };
    fetchTotalPostsNumber();
  }, []);

  //클릭한 글 제목 가져와서 디비에서 그 글 찾아서 불러오는 메서드
  useEffect(() => {
    const fetchCurrentViewPost = async () => {
      let titleData = new URLSearchParams();
      titleData.append("title", currentPostTitle);
      const response = await axios({
        url: "http://janeseo0530.cafe24.com/JSP/kream_getCurrentViewPost.jsp",
        method: "POST",
        data: {},
        params: titleData,
      });
      setCurrentPost(response.data);
    };
    fetchCurrentViewPost();
  }, [currentPostTitle]);

  return (
    <div id="service">
      <div className="container">
        <div className="gap">
          <div className="content">
            <div className="col1">
              <div className="nav">
                <div className="title">
                  <h3>
                    <Link to="/service">고객센터</Link>
                  </h3>
                </div>
                <ul>
                  <li>
                    <h4>공지사항</h4>
                    <ul>
                      <li>
                        <Link>자주 묻는 질문</Link>
                      </li>
                      <li>
                        <Link>검수 기준</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col2">
              <div className="row1">
                <h4>공지사항</h4>
              </div>
              <div className="row2">
                <ul>
                  <Routes>
                    <Route
                      index
                      element={
                        <TitleComponent
                          currentPageTitles={currentPageTitles}
                          setcurrentPostTitle={setcurrentPostTitle}
                        />
                      }
                    />
                    <Route
                      path="title"
                      element={
                        <TitleComponent
                          currentPageTitles={currentPageTitles}
                          setcurrentPostTitle={setcurrentPostTitle}
                        />
                      }
                    />
                    <Route
                      path="post"
                      element={<PostComponent currentPost={currentPost} />}
                    />
                  </Routes>
                </ul>
              </div>
              <div className="row3">
                {location.pathname.includes("post") ? (
                  ""
                ) : (
                  <Page2NationComponent
                    totalPostsNumber={totalPostsNumber}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
