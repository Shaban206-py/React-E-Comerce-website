import React, { useState } from 'react';

const AdminPage = () => {
  const [newProduct, setNewProduct] = useState({ name: '', price: '', category: '' });

  const handleAddProduct = () => {
    // Logic to add product to the database or state
    console.log(newProduct);
    setNewProduct({ name: '', price: '', category: '' }); // Reset form
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>Add New Product</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={newProduct.name}
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Price"
        value={newProduct.price}
        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
      />
      <input
        type="text"
        placeholder="Category"
        value={newProduct.category}
        onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
      />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default AdminPage;
