import React from 'react';





export default  function ShopHeaderSlideChild7Component({slide6}){
  return (
    <div className="title-slide-view">
      <ul className="title-slide-wrap">

        {
          slide6.map((item)=>{
            return(
              <li className="title-slide ">
              <a href="!#">
                  <img src={`../images/shop-header-slide/bag/${item.img}`} alt="" />
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

