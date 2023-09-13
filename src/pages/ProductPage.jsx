import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

function ProductPage() {
    const [products, setProducts] = useState([{}]);
    useEffect(() => {
        getData();
    });
    const getData = () => {
        fetch("productsData.json").then(response => response.json()).then(json => setProducts(json));
    }
    return ( 
        <>
            <h1>Product Page</h1>
            <Outlet context={products} />
        </>
     );
}

export default ProductPage;