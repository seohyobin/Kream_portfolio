import React from 'react';
import './modal_join.scss';

export default  function ModalJoinConfirm({closeJoinModal,joinModalMsg}) {

  const onClickCloseJoinModal = (e)=>{
    e.preventDefault();
    closeJoinModal();
  }
  return (
    <div id='modalJoinConfirm'>
      <div className="container">
        <div className="gap">
          <div className="title hide"></div>
          <div className="content">
            <h3>{joinModalMsg}</h3>
            <button onClick={onClickCloseJoinModal}>확인</button>
          </div>
        </div>
      </div>
    </div>
  );
};

