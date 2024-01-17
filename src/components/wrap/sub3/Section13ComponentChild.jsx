import React from 'react';

export default function Section13ComponentChild({Special_Keyrings}){


    const commaPrice =(z)=>{
        let value = z.toString();

        const regExp = /(^\d+)(\d{3})/g; 
        while(regExp.test(value)){
            return value.replace(regExp,'$1,$2');
        }
    
    }


    React.useEffect(()=>{
        Special_Keyrings.map((item, idx)=>{
        });

    },[Special_Keyrings]);
   

    return(
            <div className="content-box">
                {
                    Special_Keyrings.map((item,idx)=>{
                        return(
                            <div className="img_txt-box" key={idx}>
                                <a href="!#"><img src={`./images/sub3_sec13/${item.image}`} alt="" />
                                <span><img src={item.span} alt="" /></span>
                                </a>
                                <ul>
                                    <li>{item.brand}</li>
                                    <li>{item.name}</li>
                                    <li>
                                        <div className="tag-box">
                                        <img src={`./images/sub3_sec13/${item.benefit1}`} alt="" />
                                            <span>{item.benefit2}</span>
                                        </div>
                                    </li>
                                    <li><span>{item.discount}</span>{(item.price*1).toLocaleString('ko-KR')}</li>
                                    <li>{item.kind}</li>
                                </ul>
                            </div>
                        )
                    })
                    
                }
               
            </div>
    );




};