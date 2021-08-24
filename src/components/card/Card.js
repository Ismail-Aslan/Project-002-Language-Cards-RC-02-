import React,{useState} from 'react';

import './Card.css'

export default function Card(props) {
    const [showLogo, setShowLogo] = useState(true);
  
    return(
        <div className="card" onClick={()=>setShowLogo(!showLogo)}>
            {showLogo ?  
                <>        
                <img className="card-logo" src={props.cardInfo.img} alt="logo" />
                <h3 className="card-title" >{props.cardInfo.name.toUpperCase()}</h3>
                </>
                : 
                <>
                <p>{props.cardInfo.options[0]}</p>
                <p>{props.cardInfo.options[1]}</p>
                <p>{props.cardInfo.options[2]}</p>
                </>
            }
        </div>
    )
}
