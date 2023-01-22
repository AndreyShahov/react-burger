import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';
import AppHeader from './components/app-header/app-header';
import BurgerIngredients from './components/BurgerIngredients/burger-ingredients';

const root = ReactDOM.createRoot(
  document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <AppHeader />
    <BurgerIngredients />
  </React.StrictMode>
);

