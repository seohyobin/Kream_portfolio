import React from 'react';

export default function Section23ComponentChild({Upcoming_Release, rows}){


    const commaPrice =(z)=>{
        let value = z.toString();

        const regExp = /(^\d+)(\d{3})/g; 
        while(regExp.test(value)){
            return value.replace(regExp,'$1,$2');
        }
    
    }


    React.useEffect(()=>{
        Upcoming_Release.map((item, idx)=>{
        });

    },[Upcoming_Release]);
   

    return(
            <div className="content-box">
                {
                    Upcoming_Release.map((item,idx)=>{
                        if(idx < (rows*4)){
                        return(
                            <div className="img_txt-box" key={idx}>
                                <a href="!#"><img src={`./images/sec23/${item.image}`} alt="" />
                                <span><img src={item.span} alt="" /></span>
                                <div className="day-box">
                                  <p className='momth'>{item.momth}</p>
                                  <p className='date'>{item.date}</p>
                                </div>
                                </a>
                                <ul>
                                    <li>{item.brand}<span></span></li>
                                    <li>{item.name}</li>
                                </ul>
                            </div>
                        )
                        }
                    })
                    
                }
               
            </div>
    );




};