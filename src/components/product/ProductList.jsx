import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1, 
    salt: 'Benaryls',
    image: '/gallery/benadryl.jpeg',
    description: 'Ginseng, Multimineral, Multivitamin...',
    marketPrices: [
      { name: 'Retail', value: 40 },
      { name: 'Wholesale', value: 30 },
    ],
    price: 35,
  },
  {
    id: 2, 
    salt: 'Cofsils',
    image: '/gallery/cofsils.jpeg',
    description: 'High potency Vitamin C for immune support.',
    marketPrices: [
      { name: 'Retail', value: 60 },
      { name: 'Wholesale', value: 45 },
    ],
    price: 50,
  },
  {
    id: 3, 
    salt: 'Crocin pain killer',
    image: '/gallery/crocin.jpeg',
    description: 'Supports heart and brain health.',
    marketPrices: [
      { name: 'Retail', value: 75 },
      { name: 'Wholesale', value: 50 },
    ],
    price: 60,
  },
  {
    id: 4, 
    salt: 'Medi 2',
    image: '/gallery/medi 2.webp',
    description: 'Supports heart and brain health.',
    marketPrices: [
      { name: 'Retail', value: 80 },
      { name: 'Wholesale', value: 65 },
    ],
    price: 67,
  },
  {
    id: 5, 
    salt: 'Saridon',
    image: '/gallery/saridon.jpeg',
    description: 'Supports heart and brain health.',
    marketPrices: [
      { name: 'Retail', value: 30 },
      { name: 'Wholesale', value: 20 },
    ],
    price: 25,
  },
  {
    id: 6, 
    salt: 'Paracetamol',
    image: '/gallery/paracitalmol.jpg',
    description: 'Supports heart and brain health.',
    marketPrices: [
      { name: 'Retail', value: 70 },
      { name: 'Wholesale', value: 55 },
    ],
    price: 56,
  },
  {
    id: 7, 
    salt: 'Solution',
    image: '/gallery/solution.jpg',
    description: 'Supports heart and brain health.',
    marketPrices: [
      { name: 'Retail', value: 75 },
      { name: 'Wholesale', value: 60 },
    ],
    price: 60,
  },
];

function ProductList() {
  return (
    <div className="container">
      <div className="row">
      <div className='display-3 fw-bold text-danger my-5'>PRODUCTS</div>
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
