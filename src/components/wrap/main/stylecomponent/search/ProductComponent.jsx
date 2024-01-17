import React from 'react'

export default function ProductComponent( {product, searchMsg} ) {

    let input = searchMsg;
    input = input.toLowerCase();
    let suggest = document.getElementsByClassName('search-suggest__product');
    
    for (let i = 0; i < suggest.length; i++) { 
        if (!suggest[i].innerHTML.toLowerCase().includes(input)) {
            suggest[i].style.display="none";
        }
        else {
            suggest[i].style.display="list-item";
        }
    }

  return (
    <div>
        {
            product.map((item, idx) => {
                return(
                    <li className="search-suggest__product">
                        <a href="!#">
                        <img src={item.img} alt="상품 사진" />
                        <p className='suggest__desc'> {item.descE} </p>
                        <p> {item.descK} </p>
                        </a>
                    </li>
                )
            })
        }
    </div>
  )
}
