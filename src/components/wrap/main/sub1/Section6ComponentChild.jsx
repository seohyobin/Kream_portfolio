import React from 'react';

export default function Section6ComponentChild({brand,rows}){


    const commaPrice =(z)=>{
        let value = z.toString();

        const regExp = /(^\d+)(\d{3})/g; 
        while(regExp.test(value)){
            return value.replace(regExp,'$1,$2');
        }
    
    }


    React.useEffect(()=>{
        console.log(brand);
        brand.map((item, idx)=>{
            console.log( idx, item );
        });

    },[brand]);
   

    return(
            <div className="content-box">
                {
                    brand.map((item,idx)=>{
                        if(idx < (rows*4)){
                        return(
                            <div className="img_txt-box" key={idx}>
                                <a href="!#"><img src={`./images/sub1_sec1/${item.image}`} alt="" /> 
                                <span><img src={item.span} alt="" /></span>
                                <p>{item.rank}</p>
                                </a>
                                <ul>
                                    <li>{item.brand}<span></span></li>
                                    <li>{item.name}</li>
                                    <li>
                                        <div className="tag-box">
                                            <span>{item.benefit1}{item.benefit2}{item.benefit3}</span>
                                        </div>
                                    </li>
                                    <li>{item.discount}{commaPrice(item.price)}</li>
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