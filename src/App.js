import React from 'react';
import Navigation from './components/Navigation'
import './App.css'
// Write imports for Router & BrowserRouter here //
import Router from './Router';

function App() {
  return (
    <>
    <Navigation />
    <Router />
    </>
  );
}

export default App;
