import React, { Component } from 'react';
import ProductList from './ProductList';

class ShopView extends Component {
    
    render() {
        const productList = this.props.productList;
        const shopperView = this.props.shopperView;
        const cartView = this.props.cartView;
        
        return (
            <div>
                <h2>Products</h2>
                 <ProductList 
                    productList={productList}
                    shopperView={shopperView}
                    cartView={cartView}
                    /> 
            </div>
        )
    }
}

export default ShopView;