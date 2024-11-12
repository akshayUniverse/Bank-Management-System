import React from 'react';
import { UserProvider } from './UserContext';

import './App.css';
import logo from './logo.svg';

import LoginForm from './loginform';
import UserStatus from './UserStatus';
import LogoutButton from './LogoutButton';

function App() {
  return (
    <UserProvider>

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to the App</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
        {/* Login form and user status */}
          <LoginForm />
          <UserStatus />
          <LogoutButton />
      </header>
    </div>
    </UserProvider>
  );
}

export default App;
