import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { items } from './Data';
import Product from './Product';

const SearchItem = ({cart,setCart}) => {
  const { term } = useParams();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const filteredData = () => {
      // Fixed method names and logic here
      const data = items.filter((p) =>
        p.title.toLowerCase().includes(term.toLowerCase()) // Corrected method names
      );
      setFilterData(data); // Set the filtered data
    };
    filteredData();
  }, [term]);

  return (
    <div>
      <h1>Search Results for: {term}</h1>
      {/* Check if filterData has items and pass it to the Product component */}
      {filterData.length > 0 ? (
        <Product cart={cart} setCart={setCart} items={filterData} />
      ) : (
        <p>No results found.</p> // Message if no results
      )}
    </div>
  );
};

export default SearchItem;
