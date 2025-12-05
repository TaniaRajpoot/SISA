import React from 'react';
import HomePage from './pages/Home'
import './App.css';
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <div className="App">
 <AnimatedCursor
  innerSize={8}
  outerSize={8}
  color='58, 12, 163'
  outerAlpha={0.2}
  innerScale={0.7}
  outerScale={5}
  clickables={[
    'a',
    'button',
    '.link',
    '.nav-link',
    '.menu-item',
    '.header-link',
    'li',
  ]}
/>

       
      <HomePage />

    </div>
  );
}

export default App;