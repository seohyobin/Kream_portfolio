import React from 'react';





export default  function ShopHeaderSlideChild4Component({slide3}){
  return (
    <div className="title-slide-view">
      <ul className="title-slide-wrap">

        {
          slide3.map((item)=>{
            return(
              <li className="title-slide ">
              <a href="!#">
                  <img src={`../images/shop-header-slide/outer/${item.img}`} alt="" />
                  <h4>{item.desc}</h4>
              </a>
          </li>
            )
          })

      }


      </ul>
    </div>
  );
};

