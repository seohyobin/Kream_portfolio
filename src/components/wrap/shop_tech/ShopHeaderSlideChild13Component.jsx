import React from 'react';





export default  function ShopHeaderSlideChild13Component({slide12}){
  return (
    <div className="title-slide-view">
      <ul className="title-slide-wrap">

        {
          slide12.map((item)=>{
            return(
              <li className="title-slide ">
              <a href="!#">
                  <img src={`../images/shop-header-slide/tech/${item.img}`} alt="" />
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

