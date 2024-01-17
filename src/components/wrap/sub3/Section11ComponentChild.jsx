import React from 'react';

export default function Section11ComponentChild({Sleeveless_for_Summer}){


    const commaPrice =(z)=>{
        let value = z.toString();

        const regExp = /(^\d+)(\d{3})/g; 
        while(regExp.test(value)){
            return value.replace(regExp,'$1,$2');
        }
    
    }


    React.useEffect(()=>{
        Sleeveless_for_Summer.map((item, idx)=>{
        });

    },[Sleeveless_for_Summer]);
   

    return(
            <div className="content-box">
                {
                    Sleeveless_for_Summer.map((item,idx)=>{
                        return(
                            <div className="img_txt-box" key={idx}>
                                <a href="!#"><img src={`./images/sub3_sec11/${item.image}`} alt="" />
                                <span><img src={item.span} alt="" /></span>
                                </a>
                                <ul>
                                    <li>{item.brand}</li>
                                    <li>{item.name}</li>
                                    <li>
                                        <div className="tag-box">
                                        <span>{item.benefit1}</span>
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