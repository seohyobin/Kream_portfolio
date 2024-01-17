import React from 'react';

export default function Section11ComponentChild({thirty,rows}){


    const commaPrice =(z)=>{
        let value = z.toString();

        const regExp = /(^\d+)(\d{3})/g; 
        while(regExp.test(value)){
            return value.replace(regExp,'$1,$2');
        }
    
    }


    React.useEffect(()=>{
        console.log(thirty);
        thirty.map((item, idx)=>{
            console.log( idx, item );
        });

    },[thirty]);
   

    return(
            <div className="content-box">
                {
                    thirty.map((item,idx)=>{
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
                                            <img src={`./images/sub1_sec1/${item.benefit1}`} alt="" />
                                            <span>{item.benefit2}</span>
                                        </div>
                                    </li>
                                    <li>{commaPrice(item.price)}</li>
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