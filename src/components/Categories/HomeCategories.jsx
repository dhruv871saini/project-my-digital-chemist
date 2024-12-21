import React from "react";
import { Link } from "react-router-dom";

const categories = [
  { id: 1, name: "Supplements", image: "/gallery/supplements.webp" },
  { id: 2, name: "Diabetes", image: "/gallery/dibates.png" },
  { id: 3, name: "First Aid", image: "/gallery/firstAid.png" },
  { id: 4, name: "Heart", image: "/gallery/heart.png" },
  { id: 5, name: "Limbs/Joints", image: "/gallery/limbs.png" },
  { id: 6, name: "Digestive", image: "/gallery/stomach.png" },
  { id: 7, name: "Eye", image: "/gallery/eye.png" },
];

const CategoryItem = ({ name, image }) => (
  <li className="m-2 ">
    <div>
      <div className="w-2  text-center m-1">
        <img src={image} className="w-75 bg-light" alt={name} />
      </div>
      <div className="btn btn-primary w-100">{name}</div>
    </div>
  </li>
);

const HomeCategories = () => {
  return (
    <section className="container my-3">
      <header className="row">
        <div className="col-md-12">
          <span className="text-secondary fs-1">POPULAR</span>
          <span className="text-dark fs-1"> CATEGORIES</span>
          {/* <div>454</div> */}
        </div>
      </header>
      <div className="row my-5">
        <div className="col-md-12">
          <ul className="list-unstyled d-flex flex-wrap">
            {categories.map((category) => (
              <CategoryItem
                key={category.id}
                name={category.name}
                image={category.image}
              />
            ))}
          </ul>
        </div>
        <div className="text-start mt-3">
        <Link to="/moreCat">
          <button className="btn-orange float-end rounded fs-3 fw-bold">Show more</button>
        </Link>
      </div>
      </div>
    </section>
  );
};

export default HomeCategories;
