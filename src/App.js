import React from 'react';
import './App.css';
import Header from './components/header/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <main style={{marginTop: '64px'}}>
        <p>This is the page content</p>
      </main>
      
    </div>
  );
}

export default App;
