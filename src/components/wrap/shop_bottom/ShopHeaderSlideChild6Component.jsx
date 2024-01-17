import React from 'react';





export default  function ShopHeaderSlideChild6Component({slide5}){
  return (
    <div className="title-slide-view">
      <ul className="title-slide-wrap">

        {
          slide5.map((item)=>{
            return(
              <li className="title-slide ">
              <a href="!#">
                  <img src={`../images/shop-header-slide/bottom/${item.img}`} alt="" />
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

