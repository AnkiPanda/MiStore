//import React, {useState, useEffect} from 'react'
import React from 'react'
import NavCard from "../components/NavCard.js"
import "../styles/NavOptions.css"
import { useLocation } from 'react-router-dom';


const NavOptions = ({miPhones,redmiPhones,tv,laptop,fitnessAndLifeStyle,home,audio,accessories}) => {
    
  //  const [miPhoneToggle, setMiPhoneToggle] = useState(false);
  //  const [redmiPhoneToggle,setRedmiPhoneToggle] = useState(false);
  //  const [tvToggle,setTvToggle] = useState(false);
  //  const [laptopToggle,setLaptopToggle] = useState(false);
  //  const [fitnessToggle,setFitnessToggle] = useState(false);
  //  const [homeToggle,setHomeToggle] = useState(false);
  //  const [audioToggle,setAudioToggle] = useState(false);
  //  const [accessoriesToggle,setAccessoriesToggle] = useState(false);

   const location = useLocation();

  //  useEffect(() => {
  //   if(window.location.pathname === "/miphones"){
  //       return   setMiPhoneToggle(true)
  //      }
  //    if(window.location.pathname === "/redmiphones"){
  //       return   setRedmiPhoneToggle(true)
  //      }
  //      if(window.location.pathname === "/tv"){
  //       return   setTvToggle(true)
  //      }
  //      if(window.location.pathname === "/laptops"){
  //       return   setLaptopToggle(true)
  //      }
  //      if(window.location.pathname === "/lifestyle"){
  //       return  setFitnessToggle(true)
  //      }
  //      if(window.location.pathname === "/home"){
  //       return  setHomeToggle(true)
  //      }
  //      if(window.location.pathname === "/audio"){
  //       return  setAudioToggle(true)
  //      }
       
  //      if(window.location.pathname === "/accessories"){
  //       return  setAccessoriesToggle(true)
  //      }
  //  }, [])
   
  return (
    <div>
      <div className="navOptions">
      {location.pathname ==="/miphones" ?  miPhones.map((item)=>(
        < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
    )) : null }


        {location.pathname ==="/redmiphones" ?   redmiPhones.map((item)=>(
        < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
        )) : null }


        {location.pathname ==="/tv" ?  tv.map((item)=>(
        < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
        )) : null }

        {location.pathname ==="/laptops" ?  laptop.map((item)=>(
        < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
        )) : null }



        {location.pathname ==="/lifestyle" ?  fitnessAndLifeStyle.map((item)=>(
        < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
        )) : null }


        {location.pathname ==="/home" ?   home.map((item)=>(
        < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
        )) : null }



        {location.pathname ==="/radio" ?   audio.map((item)=>(
        < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
        )) : null }


        {location.pathname ==="/accessories" ?   accessories.map((item)=>(
        < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
        )) : null }
      </div>
    </div>
  )
}

export default NavOptions
