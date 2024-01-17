import React from 'react';


export default  function Section10ComponentChild({twenty, rows}){

    
    const commaPrice =(z)=>{
        let value = z.toString();

        const regExp = /(^\d+)(\d{3})/g; 
        while(regExp.test(value)){
            return value.replace(regExp,'$1,$2');
        }
    
    }

    return (
        <div className="content-box">
        {
            twenty.map((item,idx)=>{
                if(idx < (rows*4)){
                return(
                    <div className="img_txt-box" key={idx}>
                        <a href="!#"><img src={`./images/sub1_sec10/${item.image}`} alt="" /> 
                        <span><img src={item.span} alt="" /></span>
                        <p>{item.rank}</p>
                        </a>
                        <ul>
                            <li>{item.brand}<span></span></li>
                            <li>{item.name}</li>
                            <li>
                                <div className="tag-box">
                                    <img src={`./images/sub1_sec10/${item.benefit1}`} alt="" />
                                    <span>{item.benefit2}</span>
                                </div>
                            </li>
                            <li><span>{item.discount}</span>{(item.price*1).toLocaleString('ko-KR')}</li>
                            <li>{item.kind}</li>
                        </ul>
                    </div>
                )
                }
            })
            
        }
       
    </div>
    );
};
