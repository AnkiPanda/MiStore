import React from 'react'
import "../styles/PreNavbar.css"

const cartIcon = <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>

const PreNavbar = () => {
  return (
    <div className='preNav'>
        <div>
            <a href="https://www.mi.com/in/">MI INDIA</a> <span>|</span>
            <a href="https://in.event.mi.com/in/install-mi-store">GET MI STORE APP</a> <span>|</span>
            <a href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1">Online Help</a> <span>|</span>
            <a href="https://www.mi.com/in/store">Retail Store ﹀</a> 

        </div>
        <div>
            <a href="https://store.mi.com/in/site/login?redirectUrl=https%3A%2F%2Fwww.mi.com%2Fin%2Fservice%2Fhelp%2F%23category_id%3D1%26pagenum%3D1%26channel%3D">Sign in</a> <span>|</span>
            <a href="https://store.mi.com/in/site/login?redirectUrl=https%3A%2F%2Fwww.mi.com%2Fin%2Fservice%2Fhelp%2F%23category_id%3D1%26pagenum%3D1%26channel%3D&scene=register">Sign up</a> <span>|</span>
            <a href="https://store.mi.com/in/cart">{cartIcon} CART (0)</a>
        </div>
      
    </div>
  )
}

export default PreNavbar
