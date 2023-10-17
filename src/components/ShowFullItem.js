import React, { Component } from 'react'
import { IoIosClose } from "react-icons/io";

export class ShowFullItem extends Component {
  render() {
    return (
      <div className='full-item'>
        <div>
            <IoIosClose className='close-button' onClick={() => this.props.onShowItem(this.props.item)}/>
            <img src={'./img/' + this.props.item.img} alt='' />
            <h2>{this.props.item.title}</h2>
            <p>{this.props.item.desc}</p>
            <b>{this.props.item.price}$</b>
            <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
        </div>
      </div>
    )
  }
}

export default ShowFullItem