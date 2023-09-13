import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { useOutletContext } from "react-router-dom"
import { getProduct } from '../services/product';
export default function ProductDetail ()
{
    const [product, setProduct] = useState({});
    const { id } = useParams();
    
   

    const products = useOutletContext();
    useEffect(() => {
        setProduct(products.find( product => product.id == id));
    },[])
    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <img src={product.image} />
        </div>
    )
}