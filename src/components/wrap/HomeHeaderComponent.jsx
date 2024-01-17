import React from 'react';
import { Link } from 'react-router-dom';

const HomeHeaderComponent = () => {
  return (
    <div className="row3">
    <ul>
        <li><Link to="/main">추천</Link></li>
        <li><Link to="/rank">랭킹</Link></li>
        <li><Link to="/man">남성</Link></li>
        <li><Link to="/woman">여성</Link></li>
        <li><Link to="/brand">브랜드</Link></li>
    </ul>
</div>
  );
};

export default HomeHeaderComponent;