import React from 'react';

export default function Section13ComponentChild({Best_Chanel,rows}){


   let commaPrice =(z)=>{
        let value = z.toString();

        const regExp = /(^\d+)(\d{3})(\d{3})/g; 
        while(regExp.test(value)){
            return value.replace(regExp,'$1,$2,$3');
        }
    
    }

    let commaPrice2 =(z)=>{
        let value = z.toString();

        const regExp = /(^\d+)(\d{3})/g; 
        while(regExp.test(value)){
            return value.replace(regExp,'$1,$2');
        }
    
    }
    


    React.useEffect(()=>{
        Best_Chanel.map((item, idx)=>{
        });

    },[Best_Chanel]);
   

    return(
            <div className="content-box">
                {
                    Best_Chanel.map((item,idx)=>{
                        if(idx < (rows*4)){
                        return(
                            <div className="img_txt-box" key={idx}>
                                <a href="!#"><img src={`./images/sec13/${item.image}`} alt="" /> 
                                <span><img src={item.span} alt="" /></span>
                                <p>{item.rank}</p>
                                </a>
                                <ul>
                                    <li>{item.brand}<span></span></li>
                                    <li>{item.name}</li>
                                    <li>
                                        <div className="tag-box">
                                            <img src={`./images/sec13/${item.benefit1}`} alt="" />
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