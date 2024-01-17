import React from 'react';





export default  function ShopHeaderSlideChild11Component({slide10}){
  return (
    <div className="title-slide-view">
      <ul className="title-slide-wrap">

        {
          slide10.map((item)=>{
            return(
              <li className="title-slide ">
              <a href="!#">
                  <img src={`../images/shop-header-slide/collect/${item.img}`} alt="" />
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

