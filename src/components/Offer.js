import React from 'react'

const Offer = (props) => {
    const {index, src, link} = props;
  return (
    
      <a href={link}>
        <img src={src} alt={`${index} offer`} />
      </a>
 
  )
}

export default Offer
