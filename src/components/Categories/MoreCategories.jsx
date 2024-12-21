
import React from "react";
// import "./HomeCategories.css"; // Add a custom CSS file for additional styling.

const categories = [
    { id: 1, name: "Supplements", image: "/gallery/supplements.webp" },
    { id: 2, name: "Diabetes", image: "/gallery/dibates.png" },
    { id: 3, name: "First Aid", image: "/gallery/firstAid.png" },
    { id: 4, name: "Heart", image: "/gallery/heart.png" },
    { id: 5, name: "Limbs/Joints", image: "/gallery/limbs.png" },
    { id: 6, name: "Digestive", image: "/gallery/stomach.png" },
    { id: 7, name: "Eye", image: "/gallery/eye.png" },
    { id: 8, name: "Pain Relief", image: "/gallery/painRelief.3810efb7.png" },
    { id: 9, name: "Female Care", image: "/gallery/femaleCare.502c0574.png" },
    { id: 10, name: "Antibiotics", image: "/gallery/antibiotics.7cf301b6.png" },
    { id: 11, name: "Allergy", image: "/gallery/allergy.35acde34.png" },
];

const CategoryItem = ({ name, image }) => (
  <div className="col-6 col-sm-4 col-md-3 mb-4">
    <div className="card shadow-sm border-0 rounded text-center p-3">
<div className="text-center btn">
<img src={image} alt={name} className="card-img-top img-fluid mb-3 text-center w-50"  />

</div>      <div class="text-center">
      <h6 className="text-primary text-center">{name}</h6>
      </div>
    </div>
  </div>
);

const MoreCategories = () => {
  return (
    <section className="container my-5 bg-primary">
      <header className="mb-4">
        <h2 className="text-dark fw-bold fs-1 fst-italic">GENERAL CATEGORIES</h2>
      </header>

      <div className="row">
        {categories.map((category) => (
          <CategoryItem key={category.id} name={category.name} image={category.image} />
        ))}
      </div>
    </section>
  );
};

export default MoreCategories;
