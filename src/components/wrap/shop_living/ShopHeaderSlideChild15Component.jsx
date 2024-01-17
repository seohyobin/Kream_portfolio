import React from 'react';





export default  function ShopHeaderSlideChild15Component({slide14}){
  return (
    <div className="title-slide-view">
      <ul className="title-slide-wrap">

        {
          slide14.map((item)=>{
            return(
              <li className="title-slide ">
              <a href="!#">
                  <img src={`../images/shop-header-slide/living/${item.img}`} alt="" />
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

