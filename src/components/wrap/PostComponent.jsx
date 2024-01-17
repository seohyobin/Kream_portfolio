import React from 'react';

const PostComponent = ({currentPost}) => {
  return (
    <div>
      <h2>포스트</h2>
      <h3>{currentPost.title}</h3>
      <h4>{currentPost.body}</h4>
      <h5>{currentPost.create_date}</h5>
    </div>
  );
};

export default PostComponent;