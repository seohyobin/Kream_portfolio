import React from "react";
import { Link } from "react-router-dom";

const TitleComponent = ({ currentPageTitles, setcurrentPostTitle }) => {
  const onClickTitle = (e) => {
    setcurrentPostTitle(e.target.innerText);
  };
  return (
    <div className="col2">
      {currentPageTitles.map((title, idx) => (
        <li key={idx}>
          <Link onClick={onClickTitle} to="./post">
            {title}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default TitleComponent;
