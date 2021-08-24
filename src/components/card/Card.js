import React,{useState} from 'react';

import './Card.css'

export default function Card() {
    const [showLogo, setShowLogo] = useState(true);
  
    return(
        <div className="card" onClick={()=>setShowLogo(!showLogo)}>
            {showLogo ?  
                <div className="div1"></div>
                : 
                <div className="div2"></div>
            }
        </div>
    )
}
