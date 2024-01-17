import React from 'react'

export default function SeacrchComponentChild( {brandList, searchMsg }) {

    let input = searchMsg;
    input = input.toLowerCase();
    let suggest = document.getElementsByClassName('search-suggest__list');
    
    for (let i = 0; i < suggest.length; i++) { 
        if (!suggest[i].innerHTML.toLowerCase().includes(input)) {
            suggest[i].style.display="none";
        }
        else {
            suggest[i].style.display="list-item";
        }
    }
    
    return(
        <div>
            {
                brandList.map((item, idx)=>{
                    return(
                        <li className='search-suggest__list' key={idx}>
                            <a href="!#">
                                <p> {item.name} <i class="fa-regular fa-circle-check"></i> </p>
                                <p>{item.korName}</p>
                                <a href="!#">
                                    {
                                        item.logo !== '' ? <img src={item.logo} alt="브랜드 로고" /> : <p>{item.brand}</p>
                                    }
                                </a>
                            </a>
                        </li>
                    )
                })
            }
        </div>
    )
}
