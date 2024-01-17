import React from 'react';





export default  function ShopHeaderSlideChild10Component({slide9}){
  return (
    <div className="title-slide-view">
      <ul className="title-slide-wrap">

        {
          slide9.map((item)=>{
            return(
              <li className="title-slide ">
              <a href="!#">
                  <img src={`../images/shop-header-slide/goods/${item.img}`} alt="" />
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

