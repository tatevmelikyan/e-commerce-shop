import React from 'react';
import Layout from './features/layout/layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './features/homePage/homePage';
import DepartmentPage from './features/departmentPage/departmentPage';


function App() {
  return (
      <BrowserRouter>
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:departmentId' element={<DepartmentPage />} />
      </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
