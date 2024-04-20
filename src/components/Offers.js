import React from 'react'
import Offer from "./Offer"
import "../styles/Offers.css"

const Offers = (props) => {
   
  return (
    <div className='offersSection'> 
      {props.offer.map((item,index)=>(
        <Offer key={item.image} index={index} src={item.image} link={item.url}/>
      ))}
    </div>
  )
}

export default Offers
