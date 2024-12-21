import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div class="container">
        <div class="row my-4">
          <div class="col-md-2">
            <div className="">
              <img src="/gallery/SayaCare 2.png" className="w-50" alt="" />
            </div>
          </div>
          <div class="col-md-6 justify-content-center align-items-center text-center mt-4">
            <div>
              <div className="d-flex orange-div  p-2">
                <div className="w-100 ">
                  <input
                    type="text"
                    placeholder="Search your Medicine by Composition and Brand"
                    className="w-100 border-0 "
                  />
                </div>
                <div className="border-0 w-25  ">
                  <div>
                    <button className="rounded btn-orange d-flex border-0 ">
                      <div className="w-100">
                        <img
                          src="/gallery/images-removebg-preview.png"
                          className="w-50"
                          alt=""
                        />
                      </div>
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mt-4">
            <div>
              <div className="d-flex justify-content-end">
              <div className="btn btn-primary fw-bold text-white">
  <Link to="/login" className="text-white text-decoration-none">
    Login
  </Link>
</div>

<div className="btn border-primary fw-bold text-dark mx-3">
  <Link to="/signup" className="text-dark text-decoration-none">
    Signin
  </Link>
</div>
<div className="btn border-primary fw-bold text-dark mx-3">
  <Link to="/" className="text-dark text-decoration-none">
    Home
  </Link>
</div>
                <div className="btn border-primary fw-bold text-dark  ">
                <Link to="/cart">
                <img src="/gallery/icons8-cart-24.png" className="" alt=""/> 
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
