import React from 'react';
import Layout from './features/layout/layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homePage/homePage';
import DepartmentPage from './pages/departmentPage/departmentPage';
import ProductsPage from './pages/productsPage/productsPage';


function App() {
  return (
      <BrowserRouter>
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:departmentId' element={<DepartmentPage />} />
        <Route path='/:departmentId/:categoryId' element={<ProductsPage />} />
      </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
