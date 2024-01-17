import React from 'react';

export default function Section9ComponentChild({Shining_Silvers}){


    const commaPrice =(z)=>{
        let value = z.toString();

        const regExp = /(^\d+)(\d{3})/g; 
        while(regExp.test(value)){
            return value.replace(regExp,'$1,$2');
        }
    
    }


    React.useEffect(()=>{
        Shining_Silvers.map((item, idx)=>{
        });

    },[Shining_Silvers]);
   

    return(
            <div className="content-box">
                {
                    Shining_Silvers.map((item,idx)=>{
                        return(
                            <div className="img_txt-box" key={idx}>
                                <a href="!#"><img src={`./images/sub3_sec9/${item.image}`} alt="" />
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