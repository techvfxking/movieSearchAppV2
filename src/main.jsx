import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css';
import App from './App/App'
import { AppProvider } from './Hooks/Context'
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <Router>
      <App />
    </Router>
  </AppProvider>
)
