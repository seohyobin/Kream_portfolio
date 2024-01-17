import React from 'react';





export default  function ShopHeaderSlideChild3Component({slide2}){
  return (
    <div className="title-slide-view">
      <ul className="title-slide-wrap">

        {
          slide2.map((item)=>{
            return(
              <li className="title-slide ">
              <a href="!#">
                  <img src={`../images/shop-header-slide/shose/${item.img}`} alt="" />
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

