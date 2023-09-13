import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {  useOutletContext } from 'react-router-dom';
export default function ProductList() {

    const products = useOutletContext();
    return (

        <body>
            <div>
                <h1>Lista de Productos</h1>
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </li>
                    ))}
                </ul>
            </div>
        </body>
    )
}