// ProductList.jsx
import React, { useState } from 'react';
import './ProductList.css';
import { Footer, Header } from '../../Components';
import AddProductForm from '../AddProduct/AddProductForm';
import InputField from '../../Components/InputField/InputField';
import { Strings } from "../../Constants";

function ProductList() {
  const [showData, setShowData] = useState(false);
  const [products, setProducts] = useState([]);

  const handleAddProduct = (newData) => {    
    setProducts([...products, newData]);
  };

  const handle = () => {
    setShowData(!showData);
  };
  const handleDeleteClick = (index) => {
    
    const updatedProducts = products.filter((product, i) => i !== index);
    setProducts(updatedProducts);
  };

  return (
    <>
      <Header />
      {showData && <AddProductForm onAddProduct={handleAddProduct} />}
      <div className='product'>
        <button onClick={handle}>{Strings.AddProduct}</button>
        <h3>Product List</h3>
        <table className='table'>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.productName}</td>
                <td>{product.quantity}</td>
                <td>{product.category}</td>
                <td>
                <button onClick={() => handleDeleteClick(index)}>Edit</button>
                <button onClick={() => handleDeleteClick(index)}>Delete</button>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer footerText2={'This gives you a detail of the page'} footerText={'Footer'} />
    </>
  );
}

export default ProductList;
