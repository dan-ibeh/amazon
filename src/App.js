import React, { Component } from "react";
import NavBar from "./components/navbar";
import Products from "./components/products";
import "./App.css";
import { getProducts } from "./services/productList";

class App extends Component {
  state = {
    products: getProducts()
  };
  constructor() {
    super();
    this.state.products = this.state.products.map(
      product => (product = { ...product, quantity: 1 })
    );
  }
  handleDelete = product => {
    const products = this.state.products.filter(p => p.id !== product.id);
    this.setState({ products });
  };
  handleDecrement = product => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index].quantity--;
    this.setState({ products });
  };
  handleIncrement = product => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index].quantity++;
    this.setState({ products });
  };

  render() {
    let totalProducts = [...this.state.products];
    totalProducts = totalProducts.reduce(function(a, b) {
      return a + b.quantity;
    }, 0);
    return (
      <div className="main">
        <NavBar totalProducts={totalProducts} />
        <Products
          products={this.state.products}
          onDelete={this.handleDelete}
          onDecrement={this.handleDecrement}
          onIncrement={this.handleIncrement}
        />
        <a href="buy.html">
          <button
            className="btn btn-primary btn-lg"
            style={{ display: "block", margin: "0 auto 50px" }}
          >
            Buy Now
          </button>
        </a>
      </div>
    );
  }
}

export default App;
