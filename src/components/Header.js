import React, { useState } from 'react'
import { PiLeafDuotone } from "react-icons/pi";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";
import Order from './Order';

const showOrders = (props) => {
    let total = 0
    props.orders.forEach(el => total += Number.parseFloat(el.price))
    return (<div>
        {props.orders.map(el => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
    ))}
    <i className='total'>Total {new Intl.NumberFormat().format(total)}$</i>
    </div>)
}

const showNothing = () => {
    return (<div className='empty'>
        <i> Your cart is empty </i>
    </div>)
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
        <div>
            <span className='logo'> 
            <PiLeafDuotone className='logo-icon'/>
            Garden Staff
            </span>
            <ul className='nav'>
                <li>Про нас</li>
                <li>Про нас</li>
                <li>Про нас</li>
            </ul>
            <PiShoppingCartSimpleDuotone onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>

            {cartOpen &&(
                <div className='shop-cart'>
                    {props.orders.length > 0 ? 
                        showOrders(props) : showNothing()}
                </div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
