import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode"; //패키지 카카오(다움)주소검색
import "./modal_addr.scss";

export default function ModalAddrComponent({writeUserAddr, closeAddrModal}) {

  const onCompletePostcode = (data) => {
    writeUserAddr(data.address);
    closeAddrModal()
  };
  const postCodeStyle = {
    width: '500px',
    height: '480px',
  };
  return (
    <div id="modalAddr">
      <div className="container">
        <div className="gap">
          <div className="content">
          
            <DaumPostcode style={postCodeStyle} id="postcodeComponent" onComplete={onCompletePostcode}/>

          </div>
        </div>
      </div>

    </div>
  );
}
