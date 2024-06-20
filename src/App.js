import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import { useState } from 'react';

function App() {
  const [page, setpage] = useState(0)
  return (
    <div className="App">
      <Navbar setpage={setpage}/>
      {page==0?<About/>:page==1?<Contact/>:page==2?<ProductList/>:null}
    </div>
  );
}

export default App;
