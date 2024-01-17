import React from 'react';





export default  function ShopHeaderSlideChild5Component({slide4}){
  return (
    <div className="title-slide-view">
      <ul className="title-slide-wrap">

        {
          slide4.map((item)=>{
            return(
              <li className="title-slide ">
              <a href="!#">
                  <img src={`../images/shop-header-slide/top/${item.img}`} alt="" />
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

