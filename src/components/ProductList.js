import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {storeProducts} from '../data';
import styled from "styled-components";
import { ProductConsumer } from '../context';

export default class ProductList extends Component {

  render() {
    return (
        <React.Fragment>
            <ProductWrapper className="py-5">
            {/* <div className="py-5"> */}
            <div className="container">
                <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                <Title name="our" title="Products"></Title>
                
                </div>
                <div className="col-md-4"></div>
                {/* <Title name="our" title="Products"></Title> */}
                </div>
                <div className="row">
                <ProductConsumer>
                    {value => {
                        return value.products.map(product => {
                            return <Product key={product.id} product={product} />
                        })
                    }}
                </ProductConsumer>

                </div>
            </div>
            {/* </div> */}
            </ProductWrapper>
        </React.Fragment>

    //   <div>
    //     <p>Product List</p>
    //     <Product>

    //     </Product>
    //   </div>
    )
  }
}

const ProductWrapper = styled.section``;