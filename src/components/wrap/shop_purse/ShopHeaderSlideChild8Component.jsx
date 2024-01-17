import React from 'react';





export default  function ShopHeaderSlideChil8Component({slide7}){
  return (
    <div className="title-slide-view">
      <ul className="title-slide-wrap">

        {
          slide7.map((item)=>{
            return(
              <li className="title-slide ">
              <a href="!#">
                  <img src={`../images/shop-header-slide/purse/${item.img}`} alt="" />
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

