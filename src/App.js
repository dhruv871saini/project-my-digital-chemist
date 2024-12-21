import './App.css';
import Header from './components/header/Header';
import Nav from './components/header/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstSection from './components/header/FirstSection';
import HomeCategories from './components/Categories/HomeCategories';
import ProductList from './components/product/ProductList';
import Cart from './components/product/Cart';
import LoginPage from './components/userPages/LoginPage';
import SignupPage from './components/userPages/SignupPage';
import FirstPage from './components/FirstPage';
import Footer from './components/footer/Footer';
import MoreCategories from './components/Categories/MoreCategories';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Nav />
        {/* Default route for the homepage */}
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/moreCat" element={<MoreCategories/>} />
        </Routes>
         <Footer/>
        {/* You can also add HomeCategories, ProductList, and Cart here or in routes */}
      </div>
    </BrowserRouter>
  );
}

export default App;
