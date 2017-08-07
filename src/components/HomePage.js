import React, { Component } from 'react';
import AdminView from './AdminView';
import ShopView from './ShopView';
import CartView from './CartView';

class Homepage extends Component {

   constructor() {
        super();
 
        this.state = {
            itemCurrentlyOnSale: 'A Hammer',
            editSaleItem: true,
            shopperView: true,
            cartView: true,
            productList: [
 		        {
 		        productName: 'Hammer',
 		        description: 'Itsa hammer',
 		        price: 12.3,
 		        },
 		        {
 		        productName: 'Nail',
 		        description: 'Itsa nail',
 		        price: 0.12,
 		        }
 	        ]
        };
    }

    _toggleEditSaleItem = () => {
     const editSaleItem = !this.state.editSaleItem;
     this.setState({editSaleItem});
   };

   _handleItemCurrentlyOnSaleChange = (event) => {
 	    const itemCurrentlyOnSale = event.target.value;
 	
 	    this.setState({itemCurrentlyOnSale});
       };
    
    _addNewProductToProductList = (newProduct) => {
     const productList = [...this.state.productList];
     productList.push(newProduct);
     this.setState({productList});
    };

    _deleteProduct = (productKey) => {
        const productList = [...this.state.productList];
        productList.splice(productKey, 1);
        this.setState({productList});
    };

    _shopViews = () => {
        const shopperView = !this.state.shopperView;
        this.setState({shopperView});
    }

    _cartView = () => {
        const cartView = !this.state.cartView;
        this.setState({cartView});
    }

    _addProductToCart = (index) => {
        const product = [...this.state.productList[index]];
        const cart = [...this.state.cart];

        cart.push(product);
        this.setState({cart});
    }
    

    render() {
        return (
        <div>
           <h1>My Hardware Store</h1>
           <div>
             <span>Currently On Sale: { this.state.itemCurrentlyOnSale }!</span>
             <span><button onClick={this._toggleEditSaleItem}>
                 {this.state.editSaleItem ? "Hide":"Edit Sale Item"}
                 </button>
             </span>
             <span><button onClick={this._shopViews}>
                 {this.state.shopperView ? "Admin View":"Shop View" }
                 </button></span>
            <div>
                {
                this.state.editSaleItem ?
                    <div>
 	                    <input 
 		                onChange={this._handleItemCurrentlyOnSaleChange}
 		                value={this.state.itemCurrentlyOnSale} 
 		                type="text"
 	                    />
                    </div>
                    : null
                }
                {this.state.shopperView ? 
                <ShopView
                    productList={this.state.productList} 
                    shopperView = {this.state.shopperView}
                    cartView = {this.state.cartView}
                    />
                    :
                    <AdminView 
 	                productList={this.state.productList} 
 	                addNewProductToProductList={this._addNewProductToProductList}
                    deleteProduct = {this._deleteProduct}/> }
                <CartView
                    productList={this.state.cart}
                    addProductToCart={this._addProductToCart}
                    />
             </div>
           </div>
         </div>
        )
    }
}

export default Homepage;