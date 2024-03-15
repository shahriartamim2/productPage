import './App.css'
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar'
import Product from './pages/product'
import { counterContext } from './counter';

function App() {

    const [count, setcount] = useState(0);
    const [cartCount, setcartCount] = useState(0)

  return (
    <>
      <counterContext.Provider value={{count, setcount,cartCount,setcartCount}}>
        <Navbar />
        <Product />
      </counterContext.Provider>
    </>
  );
}

export default App
