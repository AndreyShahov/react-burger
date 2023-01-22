import { useState, useEffect } from 'react';
import { getIngredients } from '../api/api.js';
import { config } from '../data/data.js';


function App() {
  const [ingredients, setIngredients] = useState({});
  useEffect(() => {
    getIngredients(config)
      .then(res => {
        setIngredients(res);
      })
      .catch(err => console.log(err));
  }, [])
}

export default App;
