import React from 'react';





export default  function ShopHeaderSlideChildComponent({slide}){
  return (
    <div className="title-slide-view">
      <ul className="title-slide-wrap">

        {
          slide.map((item)=>{
            return(
              <li className="title-slide">
              <a href="!#">
                  <img src={`../images/luxury_product/${item.img}`} alt="" />
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

