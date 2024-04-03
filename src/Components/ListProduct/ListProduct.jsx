import React, { useEffect, useState } from "react";
import crossicon from "../../assets/cross_icon.png";

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    try {
      const response = await fetch("http://localhost:4000/allproduct");
      const data = await response.json();
      setAllProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const removetocart = async (id) => {
    try {
      await fetch("http://localhost:4000/removeproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      });
      // Refresh the list after removing the product
      fetchInfo();
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="w-full overflow-x-auto md:mx-10 my-5 rounded-lg">
      <h1 className="text-4xl font-bold mb-4  border p-2 text-black bg-white text-center">
        All Products List
      </h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
              Product
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
              Old Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
              New Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
              Category
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
              Remove
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {allProducts.map((product) => (
            <tr key={product.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-12 w-12">
                    <img
                      className="h-12 w-12"
                      src={product.image}
                      alt={product.name}
                    />
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  {product.name.substring(0, 20)}...
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                ${product.old_price}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                ${product.new_price}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                {product.category}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                <img
                  src={crossicon}
                  className="cursor-pointer w-6 h-6"
                  onClick={() => removetocart(product.id)}
                  alt="Remove"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListProduct;
