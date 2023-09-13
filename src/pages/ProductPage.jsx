import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

function ProductPage() {
    const [products, setProducts] = useState([{}]);
    useEffect(() => {
        fetch("../data/products.json").then(response => response.json()).then(response => setProducts(response));
    });

    return ( 
        <>
            <h1>Product Page</h1>
            <Outlet context={products} />
        </>
     );
}

export default ProductPage;