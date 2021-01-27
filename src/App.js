// linking react
import React from 'react';
// linking nav component
import Nav from './componets/Nav';
// linking about component
import About from './componets/About';
// linking gallery component
import Gallery from "./components/Gallery";


function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Gallery></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;