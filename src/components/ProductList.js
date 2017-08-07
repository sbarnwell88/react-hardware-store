import React, {Component} from 'react';

import Product from './Product';
 
class ProductList extends Component {
    render() {
        const productList = this.props.productList;
  
        const productComponents = productList.map((product, index) => {
            return <Product
                viewMode={this.props.viewMode}
                productName={product.productName}
                description={product.description}
                price={product.price}
                id={index}
                key={index}
                deleteProduct={this.props.deleteProduct}
                addProductToCart={this.props.addProductToCart}
                removeProductFromCart={this.props.removeProductFromCart}
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