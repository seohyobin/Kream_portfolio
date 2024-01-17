import React from 'react'

export default function PopularComponent( {brandList} ) {
  return (
    <div className="search-list__box">
        <ul className="search-popular__list">
        {
            brandList.map((item, idx) => {
                if( idx < 10){
                    return(
                        <li key={idx}><span>{idx+1}</span><a href='!#'>{item.name}</a></li>
                    )
                }
            })
        }
        </ul>
        <ul className='search-popular__list'>
        {
            brandList.map((item, idx) => {
                if( idx >=10 && idx < 20){
                    return(
                        <li key={idx}><span>{idx+1}</span><a href='!#'>{item.name}</a></li>
                    )
                }
            })
        }
        </ul>
    </div>
  )
}
