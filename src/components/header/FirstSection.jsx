import React from "react";
import HomeCategories from '../Categories/HomeCategories';
import ProductList from '../product/ProductList';
import Cart from '../product/Cart';

const FirstSection = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item">
            <img
              src="/gallery/home_banner_desktop_1.d5b35970.webp"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item active">
            <img
              src="/gallery/new_arrival_banner_desktop_2.webp"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container">
        <div className="row my-5">
          <div className="col-md-3">
            <div>
              <span className="text-primary display-4 fw-bold">Saya</span>
              <span className="text-orange display-4 fw-bold">Care</span>
              <div className="fs-4 fw-bold">App Rating</div>
            </div>
          </div>
          <div className="col-md-6 d-flex">
            <div className="fs-4 fw-bold text-center">
              <div>4.5</div>
              <div>3.67k Reviews</div>
            </div>
            <div className="left-border-only "></div>
            <div className="fs-4 fw-bold text-center">
              <div>500K+</div>
              <div>Downloads </div>
            </div>
            <div className="left-border-only "></div>

            <div className="fs-4 fw-bold text-center">
              <div>3+</div>
              <div>Rated for 3+</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="btn btn-primary text-white fs-4 fw-bold ">
              Get App <img src="/gallery/icons8-download-48.png" alt="download" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row my-5 d-flex justify-content-between">
          <div className="col-md-6 mt-3">
            <div className="btn btn-primary text-white p-4 mt-3">
              <div className="d-flex align-items-center">
                <div>
                  <div className="fs-3 fw-bold">UPLOAD PARCHI NOW</div>
                  <div className="fs-5 fw-bold">
                    GET LOW PRICED QUALITY SUBSTITUTE
                  </div>
                </div>
                <div className="ms-3">
                  <img 
                    src="/gallery/icons8-upload-48.png" 
                    className="img-size" 
                    alt="upload"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="text-white mx-5 d-flex justify-content-end p-4">
              <img 
                src="/gallery/need-help_1.b6117312.png" 
                className="img-fluid btn btn-primary" 
                alt="need help desk"
              />
            </div>
          </div>
        </div>
      </div>
{/* 
      <HomeCategories />
      <ProductList />
      <Cart /> */}
    </div>
  );
};

export default FirstSection;
