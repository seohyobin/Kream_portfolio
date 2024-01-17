import React from 'react';

export default function Section14ComponentChild({Core_Bags_for_Your_Style,rows}){


    const commaPrice =(z)=>{
        let value = z.toString();

        const regExp = /(^\d+)(\d{3})/g; 
        while(regExp.test(value)){
            return value.replace(regExp,'$1,$2');
        }
    
    }


    React.useEffect(()=>{
        Core_Bags_for_Your_Style.map((item, idx)=>{
        });

    },[Core_Bags_for_Your_Style]);
   

    return(
            <div className="content-box">
                {
                    Core_Bags_for_Your_Style.map((item,idx)=>{
                        if(idx<(rows*4)){
                        return(
                            <div className="img_txt-box" key={idx}>
                                <a href="!#"><img src={`./images/sub4_sec14/${item.image}`} alt="" />
                                <span><img src={item.span} alt="" /></span>
                                </a>
                                <ul>
                                    <li>{item.brand}<span><img src={`./images/sec_check/${item.check}`} alt="" /></span></li>
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
                        }
                    })
                    
                }
               
            </div>
    );




};