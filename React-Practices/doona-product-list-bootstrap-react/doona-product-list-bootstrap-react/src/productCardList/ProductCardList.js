import React, { useState, useEffect } from "react";

import ProductCard from '../productCard/ProductCard';


function ProductList({ searchTerm }) {
    // Declare a state variable products with an initial value of an empty array
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products from the API when the component mounts
        (async () => {
            const response = await fetch("https://dummyjson.com/products", {
                method: "Get",
            });
            const products = await response.json();
            // Update the products state with the fetched products
            setProducts(products.products)
        })()
    }, []);
    // Filter the products based on the searchTerm prop
    const displayProducts = products.filter((p) => p.title.toLowerCase().includes(searchTerm.toLowerCase()));
    return (
        <div className="row p-3 gy-3">
            {
                displayProducts.map(p => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={p.id}>
                        <ProductCard product={p} />
                    </div>
                ))}
        </div>
    );
}

export default ProductList;


