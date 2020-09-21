import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Products extends Component {
  render() {
    const { products, onDelete, onDecrement, onIncrement } = this.props;
    return (
      <Fragment>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>
                  <button
                    className="btn btn-sm"
                    onClick={() => onDelete(product)}
                  >
                    x
                  </button>
                </td>
                <td>
                  <img
                    style={{
                      height: "100px",
                      display: "block",
                      margin: "0 auto"
                    }}
                    src={product.image}
                    alt={product.Name}
                  />
                </td>
                <td>{product.Name}</td>
                <td>{product.price}</td>
                <td>
                  <button
                    className="btn btn-dark btn-sm"
                    onClick={() => onDecrement(product)}
                    disabled={product.quantity === 1}
                  >
                    -
                  </button>
                  <h3 style={{ display: "inline-block" }} className="m-2">
                    <span className="badge badge-light">
                      {product.quantity}
                    </span>
                  </h3>
                  <button
                    className="btn btn-dark btn-sm"
                    onClick={() => onIncrement(product)}
                  >
                    +
                  </button>
                </td>
                <td>
                  {"$" +
                    Number(product.price.substring(1, product.price.length)) *
                      product.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

export default Products;
