import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Page2NationComponent = ({totalPostsNumber,setCurrentPage}) => {

  //현재 페이지 스테이트를 이용해서 할 수도 있지만
  //인덱스 스테이트 하나를 더 만들어야
  //처음으로 끝으로 했을 때 보여질 페이지들은
  //11 12가 되고 현재 페이지는 12로 할 수가 있다
  //그리고 페이지를 클릭해서 이동을 해도 인덱스 스테이트에 영향이 없기 때문에
  //0 5 10 12 이렇게만 움직일 수 있다.
  const [currentIndex, setCurrentIndex] = useState(0);

  //총 페이지네이션들을 담은 배열
  //예시) 228개 글을 페이지당 20개씩 보여준다고 하면 11.4페이지가 필요한데
  //올림 처리해서 12개 페이지
  //페이지들 1부터 시작해야 하니 index + 1
  //1, 2, 3, 4, 5 ......, 12
  const numbers = Array.from({ length: Math.ceil(totalPostsNumber/20) }, (_, index) => index + 1);

  //한 번에 보여질 페이지 갯수 
  //1~5 6~10 11~12
  const pageSize = 5;


  //보여질 페이지네이션들을 담는 배열
  const displayedNumbers = numbers.slice(currentIndex, currentIndex + pageSize);

  //처음으로 가는 메서드
  const onClickFirst = () => {
    setCurrentIndex(0);
    setCurrentPage(1);
  };
  //마지막으로 가는 메서드
  const onClickLast = () => {
    const lastIndex = Math.floor((numbers.length - 1) / pageSize) * pageSize;
    setCurrentIndex(lastIndex);
    setCurrentPage(numbers.length);
  };
  //이전으로 가는 메서드
  const onClickPrev =()=>{
    const prevIndex = currentIndex - pageSize;
    if(currentIndex!==0){
      setCurrentIndex(prevIndex);
      if(prevIndex===0){
        setCurrentPage(pageSize);
      } else {
        //인덱스니까 +1
        setCurrentPage(prevIndex+pageSize);
      }

    }
  }
  //다음으로 가는 메서드
  const onClickNext=()=>{
    const nextIndex = currentIndex + pageSize;
    //마지막 페이지가 12이면
    //11로 가야하고
    //슬라이스 메서드가 인덱스 10부터 자르기 시작해야하기 때문에
    //페이지 사이즈로 나누고 내림 해야한다.
    const lastIndex = Math.floor((numbers.length - 1) / pageSize) * pageSize;
    if(currentIndex!==lastIndex){
      setCurrentIndex(nextIndex);
      setCurrentPage(nextIndex+1);
    }
  }

  const onClickPage = (e)=>{
    setCurrentPage(e.target.value);
  }

  return (
    <div>
    <ul>
      {displayedNumbers.map((number) => (
        <li key={number}><button onClick={onClickPage} value={number}>{number}</button></li>
      ))}
    </ul>
    <button onClick={onClickFirst}>처음</button>
    <button onClick={onClickPrev}>이전</button>
    <button onClick={onClickNext} >다음</button>
    <button onClick={onClickLast}>끝</button>
  </div>
  );
};

export default Page2NationComponent;