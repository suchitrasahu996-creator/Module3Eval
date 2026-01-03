import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'
import ReactDOM from "react-dom/client";
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx';
import { BrowserRouter } from 'react-router-dom';
import { RestaurantProvider } from './context/RestaurantContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <RestaurantProvider>
    <App />
    </RestaurantProvider>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
