import React, { useState } from "react";
import "./modal_foot.scss";

export default function ModalFootComponent({writeUserFootSize, closeFootModal}) {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (e,value) => {
    e.preventDefault();
    setSelectedButton(value);
    writeUserFootSize(e.target.value);
  };
  const onClickSubmitBtn = (e)=>{
    e.preventDefault();
    closeFootModal();
  }
  return (
    <div id="modalFoot">
      <div className="container">
        <div className="gap">
          <div className="title"><h2>사이즈 선택</h2></div>
          <div className="content">
            <div className="size-container">
              <button
                className={selectedButton === 220 ? "on" : ""}
                onClick={(e) => handleButtonClick(e,220)}
                value={220}
              >
                220
              </button>
              <button
                className={selectedButton === 225 ? "on" : ""}
                onClick={(e) => handleButtonClick(e,225)}
                value={225}
              >
                225
              </button>
              <button
                className={selectedButton === 230 ? "on" : ""}
                onClick={(e) => handleButtonClick(e,230)}
                value={230}
              >
                230
              </button>
              <button
                className={selectedButton === 235 ? "on" : ""}
                onClick={(e) => handleButtonClick(e,235)}
                value={235}
              >
                235
              </button>
              <button
                className={selectedButton === 240 ? "on" : ""}
                onClick={(e) => handleButtonClick(e,240)}
                value={240}
              >
                240
              </button>
              <button
                className={selectedButton === 245 ? "on" : ""}
                onClick={(e) => handleButtonClick(e,245)}
                value={245}
              >
                245
              </button>
              <button
                className={selectedButton === 250 ? "on" : ""}
                onClick={(e) => handleButtonClick(e,250)}
                value={250}
              >
                250
              </button>
              <button
                className={selectedButton === 255 ? "on" : ""}
                onClick={(e) => handleButtonClick(e,255)}
                value={255}
              >
                255
              </button>
              <button
                className={selectedButton === 260 ? "on" : ""}
                onClick={(e) => handleButtonClick(e,260)}
                value={260}
              >
                260
              </button>
              <button
                className={selectedButton === 265 ? "on" : ""}
                onClick={(e) => handleButtonClick(e,265)}
                value={265}
              >
                265
              </button>
              <button
                className={selectedButton === 270 ? "on" : ""}
                onClick={(e) => handleButtonClick(e,270)}
                value={270}
              >
                270
              </button>
              <button
                className={selectedButton === 275 ? "on" : ""}
                onClick={(e) => handleButtonClick(e,275)}
                value={275}
              >
                275
              </button>
              <button
                className={selectedButton === 280 ? "on" : ""}
                onClick={(e) => handleButtonClick(e,280)}
                value={280}
              >
                280
              </button>
              <button
                className={selectedButton === 285 ? "on" : ""}
                onClick={(e) => handleButtonClick(e,285)}
                value={285}
              >
                285
              </button>
              <button
                className={selectedButton === 290 ? "on" : ""}
                onClick={(e) => handleButtonClick(e,290)}
                value={290}
              >
                290
              </button>
              <button
                className={selectedButton === 295 ? "on" : ""}
                onClick={(e) => handleButtonClick(e,295)}
                value={295}
              >
                295
              </button>
              <button
                className={selectedButton === 300 ? "on" : ""}
                onClick={(e) => handleButtonClick(e,300)}
                value={300}
              >
                300
              </button>
            </div>

            <div className="submit-btn">
              <button onClick={onClickSubmitBtn}>확인</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
