import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './features/layout/layout'
import ScrollToTop from './features/scrollToTop/scrollToTop'    
import HomePage from './pages/home/homePage'
import DepartmentPage from './pages/department/departmentPage'
import ProductsPage from './pages/products/productsPage'
import Location from './pages/location/location'
import AboutUs from './pages/aboutUs/aboutUs'
import CustomerAccountPage from './pages/customer/customerAccountPage'
import AdminPage from './pages/admin/adminPage'
import FavoritesPage from './pages/favorites/favoritesPage'
import ShoppingCartPage from './pages/cart/shoppingCartPage'
import RegisterPage from './pages/login/pages/RegisterPage';
import LoginPage from './pages/login/pages/LoginPage';
import NotFound from './pages/notFound/NotFound';

function App() {
  return (
      <BrowserRouter>
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:departmentId' element={<DepartmentPage />} />
        <Route path='/:departmentId/:categoryId' element={<ProductsPage />} />
        <Route path= '/location'    element={<Location/>}/>
        <Route path='/about'       element={<AboutUs/>}/>
        <Route path='/account'     element={<CustomerAccountPage />} />
        <Route path='/account/admin'element={<AdminPage />} />
        <Route path='/favorites'    element={<FavoritesPage />}/>
        <Route path='/shoppingcart' element={<ShoppingCartPage />}/>
        <Route path='/register'    element={<RegisterPage/>}></Route>
        <Route path='/loginPage'  element={<LoginPage/>}></Route>
        <Route path='*'           element={<NotFound/>}> </Route>
      </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
