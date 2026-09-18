import Navigation from './navigation/Navigation';
import './App.css';
import ProductCardList from './productCardList/ProductCardList';
import { useState } from 'react';

function App() {

  // Declare a state variable sValue with an initial value of an empty string
  // setSValue is the function to update sValue
  const [sValue, setSValue] = useState('');


  return (
    <div className="App">
      <header className="App-header">
        {/* Render the Navigation component and pass setSValue function as onSearch prop */}
        <Navigation onSearch={setSValue} />
      </header>
      <div className="container">
        {/* Render the ProductCardList component and pass sValue as searchTerm prop */}
        <ProductCardList searchTerm={sValue} />
      </div>

    </div>
  );
}

export default App;
