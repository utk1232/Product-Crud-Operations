import React, { useState } from "react";
import { Strings } from "../../Constants";
import InputField from "../../Components/InputField/InputField";

const AddProductForm = ({ onAddProduct }) => {

    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [category, setCategory] = useState('');

    const handleAddProduct = () => {
        const newData = {
            productName,
            quantity,
            category,
        };
        onAddProduct(newData);

        setQuantity('');
        setCategory('');
        setProductName('');

    };



    return (
        <>
            <InputField name='Product' onType={(value) => {setProductName(value)}} value={productName}/>
            <InputField name='Quantity' onType={(value) => {setQuantity(value)}} value={quantity}/>
            <InputField name='Category' onType={(value) => {setCategory(value)}} value={category}/>
            <button onClick={handleAddProduct}>Add</button>

        </>
    )
}

export default AddProductForm;