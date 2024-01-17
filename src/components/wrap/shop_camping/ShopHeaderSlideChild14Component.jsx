import React from 'react';





export default  function ShopHeaderSlideChild14Component({slide13}){
  return (
    <div className="title-slide-view">
      <ul className="title-slide-wrap">

        {
          slide13.map((item)=>{
            return(
              <li className="title-slide ">
              <a href="!#">
                  <img src={`../images/shop-header-slide/camping/${item.img}`} alt="" />
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

