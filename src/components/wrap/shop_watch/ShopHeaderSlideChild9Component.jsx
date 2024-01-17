import React from 'react';





export default  function ShopHeaderSlideChild9Component({slide8}){
  return (
    <div className="title-slide-view">
      <ul className="title-slide-wrap">

        {
          slide8.map((item)=>{
            return(
              <li className="title-slide ">
              <a href="!#">
                  <img src={`../images/shop-header-slide/watch/${item.img}`} alt="" />
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

