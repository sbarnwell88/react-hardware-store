import React, {Component} from 'react';

import Product from './Product';
 
class ProductList extends Component {
    render() {
        const productList = this.props.productList;
        const shopperView = this.props.shopperView;
        const cartView = this.props.cartView;
  
        const productComponents = productList.map((product, index) => {
            return <Product
                productName={product.productName}
                description={product.description}
                price={product.price}
                id={index}
                key={index}
                deleteProduct={this.props.deleteProduct}
                shopperView={shopperView}
                cartView={cartView}
                addProductToCart={this.props.addProductToCart}
                />
    }
    );
    return(
        <div>
            {productComponents}
            </div>
    )
}
}

export default ProductList;