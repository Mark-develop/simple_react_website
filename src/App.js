import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      currentItems: [],
      orders:[],
      items: [
        {
          id: 101,
          title: 'Garden Trowel',
          img:"garden-trowel.png",
          desc: "A sturdy and durable garden trowel for digging and planting.",
          category: "gardening-tools",
          price: "12.99"
        },
        {
          id: 102,
          title: "Solar-Powered Pathway Lights",
          img:"solar-powered-pathway-lights.jpg",
          desc: "Set of 6 solar-powered lights to illuminate your garden path or walkway.",
          category: "outdoor-lighting",
          price: "29.99"
        },
        {
          id: 103,
          title: "Pruning Shears",
          img:"pruning-shears.png",
          desc: "High-quality pruning shears for trimming branches and shrubs.",
          category: "pruning-tools",
          price: "18.50"
        },
        {
          id: 104,
          title: "Garden Hose",
          img:"garden-hose.png",
          desc: "50-foot long, kink-resistant garden hose for watering plants and lawns.",
          category: "watering-equipment",
          price: "24.99"
        },
        {
          id: 105,
          title: "Folding Picnic Table",
          img:"folding-picnic-table.jpg",
          desc: "Compact and portable picnic table for outdoor dining in your garden or on the patio.",
          category: "outdoor-furniture",
          price: "49.99"
        },
        {
          id: 106,
          title: "Garden Gloves",
          img:"garden-gloves.jpg",
          desc: "Comfortable and protective gardening gloves for weeding and planting.",
          category: "garden-wear",
          price: "9.99"
        },
        {
          id: 107,
          title: "Compost Bin",
          img:"compost-bin.jpg",
          desc: "A compost bin for recycling kitchen and garden waste into nutrient-rich compost.",
          category: "composting",
          price: "34.99"
        },
        {
          id: 108,
          title: "Garden Cart",
          img:"garden-cart.jpg",
          desc: "Heavy-duty garden cart for transporting tools and materials in your garden.",
          category: "garden-accessories",
          price: "69.99"
        },
        {
          id: 109,
          title: "Bird Feeder",
          img:"bird-feeder.jpg",
          desc: "Attract birds to your garden with a decorative bird feeder.",
          category: "bird-care",
          price: "14.99"
        },
        {
          id: 110,
          title: "Garden Hammock",
          img:"garden-hammock.jpg",
          desc: "Relax in your garden with a comfortable and sturdy hammock.",
          category: "outdoor-furniture",
          price: "79.99"
        },
        {
          id: 111,
          title: "Vegetable Seeds Variety Pack",
          img:"vegetable-seeds-variety-pack.jpg",
          desc: "Assortment of vegetable seeds for your garden, including tomatoes, peppers, and more.",
          category: "seeds-&-plants",
          price: "8.99"
        },
        {
          id: 112,
          title: "Garden Insect Repellent",
          img:"garden-insect-repellent.jpg",
          desc: "Non-toxic insect repellent to protect your plants from pests and bugs.",
          category: "pest-control",
          price: "7.99"
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)

  }
  render(){
  return (
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
      <Categories chooseCategory={this.chooseCategory}/>
      <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
      {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} onAdd={this.addToOrder} item={this.state.fullItem}/>}
      <Footer/>
    </div>
  )
}

  onShowItem(item){
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category){
    if(category === 'all'){
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item){
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;
