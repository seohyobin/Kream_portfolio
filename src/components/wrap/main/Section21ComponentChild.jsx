import React from 'react';

export default function Section21ComponentChild({New_Highest_Bids, rows}){


    const commaPrice =(z)=>{
        let value = z.toString();

        const regExp = /(^\d+)(\d{3})/g; 
        while(regExp.test(value)){
            return value.replace(regExp,'$1,$2');
        }
    
    }


    React.useEffect(()=>{
        New_Highest_Bids.map((item, idx)=>{
        });

    },[New_Highest_Bids]);
   

    return(
            <div className="content-box">
                {
                    New_Highest_Bids.map((item,idx)=>{
                        if(idx < (rows*4)){
                        return(
                            <div className="img_txt-box" key={idx}>
                                <a href="!#"><img src={`./images/sec21/${item.image}`} alt="" />
                                <span><img src={item.span} alt="" /></span>
                                </a>
                                <ul>
                                    <li>{item.brand}<span></span></li>
                                    <li>{item.name}</li>
                                    <li>
                                        <div className="tag-box">
                                            <img src={`./images/sec21/${item.benefit1}`} alt="" />
                                            <span>{item.benefit2}</span>
                                        </div>
                                    </li>
                                    <li>{(item.price*1).toLocaleString('ko-KR')}</li>
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