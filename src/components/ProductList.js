import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {storeProducts} from '../data';

export default class ProductList extends Component {
    state ={
        products:storeProducts
    }
  render() {
      console.log(storeProducts)
    return (
        <React.Fragment>
            <div className="py-5">
            <div className="container">
                <div className="row">
                <Title name="our" title="Products"></Title>
                </div>
            </div>
            </div>
        </React.Fragment>

    //   <div>
    //     <p>Product List</p>
    //     <Product>

    //     </Product>
    //   </div>
    )
  }
}
