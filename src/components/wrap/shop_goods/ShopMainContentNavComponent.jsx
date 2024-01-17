import React from 'react';
import $ from 'jquery';

export default  function ShopMainContentNavComponent ({brand}){

    React.useEffect(()=>{
        $('.category3').on({
            click(e){
                e.preventDefault();
                $('.all3').toggleClass('on');
               

            }
        })
    },[])
    return (
    <div className="left-box box3">
        <a href="!#" className='category-btn category3'>
            <div className="title-box">
                <span>브랜드</span>
                <p className='cata-all all3'>모든 브랜드</p>
            </div>
            <div className="icon-box">
                <img src="../images/shop_left_nav/20230519_105043.png" alt="" />
            </div>
        </a>
        <div className="sub sub3">
            <ul>
                {
                    brand.map((item)=>{
                        return(
                        <li>
                            <label>
                                <input type="checkbox" name={item.class} id={item.id} value={item.brand} />
                                &nbsp; {item.brand}
                            </label>
                        </li>
                        )
                    })

                }
            </ul>
        </div>
    </div>
    );
};

