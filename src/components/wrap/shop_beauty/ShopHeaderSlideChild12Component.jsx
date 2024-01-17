import React from 'react';





export default  function ShopHeaderSlideChild12Component({slide11}){
  return (
    <div className="title-slide-view">
      <ul className="title-slide-wrap">

        {
          slide11.map((item)=>{
            return(
              <li className="title-slide ">
              <a href="!#">
                  <img src={`../images/shop-header-slide/beauty/${item.img}`} alt="" />
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

