import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Index from './frontend/index';
import FontendRoute from './route/frontend';
import NotFound from './frontend/pages/notFound';
import LoginAdmin from './backend/pages/loginAdmin';
class App extends React.Component {
  render() {
    console.log(FontendRoute);
    return (
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Index />}>
          
            {FontendRoute.map((route, index) => {
              const Page = route.component;
              return <Route key={index} path={route.path} element={<Page />} />;
            })}
          </Route>
          {/* Cần thêm Route cho NotFound */}
          <Route path="/admin" element={<LoginAdmin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
