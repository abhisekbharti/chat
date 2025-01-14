import './App.css';
import React from "react";
import MainPage from './components/Mainpage/MainPage';
// import Login from './components/Login';
// import ProductPage from './components/ProductPage/ProductPage';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Banner from "./components/Banner/Banner";
// import ProductCard from "./components/ProductCard/ProductCard";

// Mock data for products
// const products = [
//   {
//     id: "1",
//     name: "Luxury Perfume",
//     description: "A delightful fragrance that lasts all day.",
//     price: 99.99,
//     image: "https://via.placeholder.com/300x300",
//   },
//   {
//     id: "2",
//     name: "Classic Perfume",
//     description: "Timeless fragrance for every occasion.",
//     price: 79.99,
//     image: "https://via.placeholder.com/300x300",
//   },
//   {
//     id: "3",
//     name: "Elegant Perfume",
//     description: "Sophisticated scent for the modern individual.",
//     price: 109.99,
//     image: "https://via.placeholder.com/300x300",
//   },
//   {
//     id: "4",
//     name: "Fresh Perfume",
//     description: "A refreshing aroma for daily wear.",
//     price: 59.99,
//     image: "https://via.placeholder.com/300x300",
//   },
// ];

const App = () => {
  return (
    // <Router>
    //   <div>
    //     <Navbar />
    //     <Routes>
    //       {/* Homepage Route */}
    //       <Route
    //         path="/"
    //         element={
    //           <div>
    //             <Banner />
    //             <div className="product-grid">
    //               {products.map((product) => (
    //                 <ProductCard key={product.id} product={product} />
    //               ))}
    //             </div>
    //           </div>
    //         }
    //       />

    //       {/* Product Page Route */}
    //       <Route
    //         path="/product/:id"
    //         element={<ProductPage />}
    //       />
    //     </Routes>
    //   </div>
    // </Router>

      <MainPage/>
      // <Login/>

  );
};

export default App;

