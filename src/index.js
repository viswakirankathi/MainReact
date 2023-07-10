import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Userlogin from './features/Userlogin';
let router = createBrowserRouter([{
          path:"/",
          element:<App></App>,
          children:[{
            path:'/userlogin',
            element:<Userlogin></Userlogin>
          }]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
