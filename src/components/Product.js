 import React, {Component} from 'react';
 
 class Product extends Component {
  _deleteOneProduct = (event) => {
    event.preventDefault();
    this.props.deleteProduct(this.props.id);
  }

  _addOneProduct = (event) => {
    this.props.addProductToCart(this.props.id);
  }

  _cartView = () => {
        const cartView = !this.state.cartView;
        this.setState({cartView});
    }

   render() {
     const productName = this.props.productName;
     const description = this.props.description;
     const price = this.props.price;
     const id = this.props.id;
 
     return (
         <div>
           <h3>{productName}</h3>
           <div>{description}</div>
           <div>{price}</div>

           {this.props.shopperView ?  
           <button onClick={this._addOneProduct}>Add to Cart</button>
           :
           <button onClick={this._deleteOneProduct}>Delete</button>
           }

           {this.props.cartView ?
           <button onClick={this._cartView}>Shopping Cart</button>
           :
           null
           }
         </div>
     );
 
   }
 }
 
 export default Product;