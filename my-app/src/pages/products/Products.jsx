import React, { useContext, useState, useEffect } from 'react';
import './products.css';
import { CartContext } from '../../context/CartContext';

function Products() {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceFilter, setPriceFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  useEffect(() => {
    fetch('/api/products')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => console.error('Fetch error:', error));
  }, []);

  useEffect(() => {
    filterProducts();
  }, [priceFilter, typeFilter]);

  const filterProducts = () => {
    let filtered = products;

    if (priceFilter) {
      filtered = filtered.filter(product => product.Price <= priceFilter);
    }

    if (typeFilter) {
      filtered = filtered.filter(product => product.Type === typeFilter);
    }

    setFilteredProducts(filtered);
  };

  return (
    <>
      <div className="filter-container">
        <label>
          Price Filter:
          <input 
            type="number" 
            value={priceFilter} 
            onChange={(e) => setPriceFilter(e.target.value)} 
            placeholder="Enter max price" 
          />
        </label>
        <label>
          Type Filter:
          <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
            <option value="">All</option>
            <option value="Lemonade">Lemonade</option>
            <option value="Energy">Energy</option>
            <option value="Root">Root</option>
            <option value="Cleanses">Cleanses</option>
            <option value="Smoothie">Smoothie</option>
            <option value="Hydration">Hydration</option>
          </select>
        </label>
      </div>
      <div className="products">
        {filteredProducts.map((product, index) => (
          <div key={index} className="product">
            <img src={product.image} alt={product.Name} className="image" />
            <h1>{product.Name}</h1>
            <h3>{product.Description}</h3>
            <p>${product.Price}</p>
            <button 
              className='addToCartBttn' 
              onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
