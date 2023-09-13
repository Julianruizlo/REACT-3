import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
      <Route path="" element={<ProductList />} >
        <Route path=":id" element={<ProductDetail />} />
      </Route>
      </Routes>
    </Router>
    )
}

export default App
