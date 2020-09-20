import React from "react";

const NavBar = ({ totalProducts }) => {
  console.log(totalProducts);
  return (
    <nav className="navbar navbar-light bg-light">
      <a href="#" className="navbar-brand">
        <div className="row">
          <div className="col-6">
            <h3>Amazon</h3>{" "}
          </div>
          <div className="col-6">
            {totalProducts === 0 ? (
              <p style={{ display: "block", textAlign: "right" }}>
                There is no product in your cart.
              </p>
            ) : (
              <p style={{ display: "block" }}>
                There are currently{" "}
                {
                  <span className="badge badge-pill badge-secondary">
                    {totalProducts}
                  </span>
                }{" "}
                product(s) in your cart.
              </p>
            )}
          </div>
        </div>
      </a>
    </nav>
  );
};

export default NavBar;
