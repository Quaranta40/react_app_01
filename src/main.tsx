// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contatti from './pages/Contatti';
import About from './pages/About';
import Cards from './pages/Cards.tsx';
import Card from './pages/Card.tsx';
import CardsChildren from './pages/CardsChildren';

import { store } from './redux/store';
import { Provider } from 'react-redux';


const router = createBrowserRouter([

  { path: "/", element: <App></App> },
  { path: "/about", element: <About></About> },
  { path: "/contatti", element: <Contatti></Contatti> },
  { path: "/cards", element: <Cards></Cards> },
  { path: "/cards/:cardID", element: <Card /> },
  {
    path: "/cards-children", element: <CardsChildren></CardsChildren>,
    children: [{
      path: ":cardID",
      element: <Card />,
    }]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);