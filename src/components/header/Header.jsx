import React from 'react';


const Header = () => {
  return (
    <div>
      {/* Header Container */}
      <div className="container-fluid bg-primary py-2">
        <div className="d-flex align-items-center justify-content-between">
          {/* Header Text */}
          <div>
            <div className="text-white fs-5">Tested Hai Toh Barosa Hai</div>
          </div>

          {/* Social Media Icons and Download App Button */}
          <div>
            <ul className="list-unstyled d-flex align-items-center m-0">
              {/* Social Media Icons */}
              <li className="ms-3">
                <a href="#">
                  <img
                    src="/gallery/pngtree-white-instagram-icon-png-png-image_3562066-removebg-preview.png"
                    className="hover-bg-red circular-img"
                    style={{ width: '50px', height: '50px' }}
                    alt="Instagram"
                  />
                </a>
              </li>
              <li className="ms-3">
                <a href="#">
                  <img
                    src="/gallery/pngtree-youtube-white-icon-png-image_3570427-removebg-preview.png"
                    className="hover-bg-red circular-img"
                    style={{ width: '40px', height: '40px' }}
                    alt="YouTube"
                  />
                </a>
              </li>
              <li className="ms-3">
                <a href="#">
                  <img
                    src="/gallery/download-removebg-preview.png"
                    className="hover-bg-red circular-img"
                    style={{ width: '40px', height: '40px' }}
                    alt="App Download"
                  />
                </a>
              </li>
              <li className="ms-3">
                <a href="#">
                  <img
                    src="/gallery/icons8-linkedin-50.png"
                    className="hover-bg-red circular-img"
                    style={{ width: '40px', height: '40px' }}
                    alt="LinkedIn"
                  />
                </a>
              </li>

              {/* Download App Button */}
              <li>
                <div className="text-danger bg-white rounded px-1 mx-4">
                  <span className="hover-bg-red-btn rounded px-3">DOWNLOAD APP</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <Nav/>
      <FirstSection/> */}
      {/* <HomeCategories/>
      <ProductList/>
      <Cart/> */}
    </div>
  );
};

export default Header;
