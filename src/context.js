import React, { Component } from 'react';
import { storeProducts, detailProduct } from "./data";



const ProductContext = React.createContext()

class ProductProvider extends Component {
  state = {
    products:storeProducts,
    detailProduct
  }
  handleaddCart = () => {
      console.log('Hello from add to cart')
  }
  handleDetail = () => {
    console.log('Hello from handle detail')
    
  }
  render() {
    return (
      <ProductContext.Provider value={{...this.state,
      handleDetail:this.handleDetail,
      handleaddCart:this.addCart

      
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export {
    ProductProvider,
    ProductConsumer
}