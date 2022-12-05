import React from 'react';
import Layout from './features/layout/layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/homePage';
import DepartmentPage from './pages/department/departmentPage';
import ProductsPage from './pages/products/productsPage';
import Location from './pages/location/location'
import { AboutUs } from './pages/aboutUs/aboutUs';
import CustomerAccountPage from './pages/customer/customerAccountPage';
import LoginPage from './pages/login/loginPage';
import AdminPage from './pages/admin/adminPage';
import FavoritesPage from './pages/favorites/favoritesPage';
import ShoppingCartPage from './pages/cart/shoppingCartPage';
import ProductPage from './pages/productPage/productPage';



function App() {
  return (
      <BrowserRouter>
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:departmentId' element={<DepartmentPage />} />
        <Route path='/:departmentId/:categoryId' element={<ProductsPage />} />
        <Route path= '/location' element={<Location/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/account' element={<CustomerAccountPage />} />
        <Route path='/account/login' element={<LoginPage />} />
        <Route path='/account/admin' element={<AdminPage />} />
        <Route path='/favorites' element={<FavoritesPage />}/>
        <Route path='/shoppingcart' element={<ShoppingCartPage />}/>
        <Route path='/products/:productId' element={<ProductPage/>}/>
      </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
