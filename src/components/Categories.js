import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'All'
                },
                {
                    key: 'gardening-tools',
                    name: 'Gardening Tools'
                },
                {
                    key: 'outdoor-lighting',
                    name: 'Outdoor Lighting'
                },
                {
                    key: 'watering-equipment',
                    name: 'Watering Equipment'
                },
                {
                    key: 'outdoor-furniture',
                    name: 'Outdoor Furniture'
                },
                {
                    key: 'garden-wear',
                    name: 'Garden Wear'
                },
                {
                    key: 'pruning-tools',
                    name: 'Pruning Tools'
                },
                {
                    key: 'composting',
                    name: 'Composting'
                },
                {
                    key: 'garden-accessories',
                    name: 'Garden Accessories'
                },
                {
                    key: 'bird-care',
                    name: 'Bird Care'
                },
                {
                    key: 'seeds-&-plants',
                    name: 'Seeds & Plants'
                },
                {
                    key: 'pest-control',
                    name: 'Pest Control'
                }
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories