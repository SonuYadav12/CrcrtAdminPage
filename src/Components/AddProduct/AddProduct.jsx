import React, { useState } from "react";
import upload_area from "../../assets/upload_area.svg";

const AddProduct = () => {
    const [image, setImage] = useState(null);
    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "women",
        new_price: "",
        old_price: ""
    });

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    };

    const changeHandler = (e) => {
        setProductDetails({
            ...productDetails,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("product", image);
        formData.append("name", productDetails.name);
        formData.append("category", productDetails.category);
        formData.append("new_price", productDetails.new_price);
        formData.append("old_price", productDetails.old_price);
    
        try {
            // const response = await fetch("http://localhost:4000/upload", {
                const response = await fetch("https://cart-craft-api.vercel.app/upload", {
                method: "POST",
                body: formData
            });
            const responseData = await response.json();
    
            if (response.ok) {
                if (responseData.success) {
                    alert("Image uploaded successfully");
                    // Assuming responseData.imageUrl contains the Cloudinary URL
                    // Modify the endpoint URL and request body accordingly
                    // await fetch("http://localhost:4000/addproduct", {
                        await fetch("https://cart-craft-api.vercel.app/addproduct", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            ...productDetails,
                            image: responseData.imageUrl
                        })
                    });
                    alert("Product Added");
                } else {
                    alert("Failed to upload image");
                }
            } else {
                alert("Failed to upload image: " + responseData.message);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to add product: " + error.message);
        }
    
        // Reset form fields and image state
        setProductDetails({
            name: "",
            image: "",
            category: "women",
            new_price: "",
            old_price: ""
        });
        setImage(null);
    };
    

    return (
        <div className="flex items-start p-5 h-full justify-start px-5  w-full ">
            <div className="w-full  bg-white shadow-md md:w-[60%] h-[80%] p-8 md:rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Add Product</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="product-title" className="block mb-1">Product Title</label>
                        <input
                            value={productDetails.name}
                            onChange={changeHandler}
                            id="product-title"
                            className="w-full border py-2 px-3"
                            type="text"
                            placeholder="Type Here"
                            name="name"
                        />
                    </div>
                    <div className="flex mb-4">
                        <div className="w-1/2 mr-2">
                            <label htmlFor="price" className="block mb-1">Price</label>
                            <input
                                id="price"
                                className="w-full border py-2 px-3"
                                type="text"
                                placeholder="Type Here"
                                name="old_price"
                                value={productDetails.old_price}
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="w-1/2 ml-2">
                            <label htmlFor="offer-price" className="block mb-1">Offer Price</label>
                            <input
                                id="offer-price"
                                className="w-full border py-2 px-3"
                                type="text"
                                placeholder="Type Here"
                                name="new_price"
                                value={productDetails.new_price}
                                onChange={changeHandler}
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="product-category" className="block mb-1">Product Category</label>
                        <select
                            id="product-category"
                            className="w-full border py-2 px-3"
                            name="category"
                            value={productDetails.category}
                            onChange={changeHandler}
                        >
                            <option value="men">Men</option>
                            <option value="women">Women</option>
                            <option value="kids">Kids</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="file-input" className="block mb-1 cursor-pointer">
                            <img src={image ? URL.createObjectURL(image) : upload_area} alt="Upload" className="w-16 h-16" />
                        </label>
                        <input onChange={imageHandler} type="file" id="file-input" name="images" className="hidden" />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">ADD</button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
