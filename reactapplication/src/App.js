import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Features from './components/Features';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Transactions from './components/Transactions';

import RegisterForm from "./RegistrationForm";
import Loginform from "./loginform";
import LogoutButton from "./LogoutButton";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" component={Hero} />
        <Route path="/features" component={Features} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/transactions" component={Transactions} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
