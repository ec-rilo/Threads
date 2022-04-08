import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import Overview from './Overview/Overview.js';
import Reviews from './Reviews.js';
import Questions from './Questions.js';
import RelatedItems from './RelatedItems.js';
import Navbar from './Navbar/Navbar.js';

import { GlobalStyles } from './globalStyles.js';
import { lightTheme, darkTheme } from './Themes';

function App() {
  // light theme
  const [theme, setTheme] = useState('light');
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get('/products/65635')
      .then((product) => {
        setProduct(product.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Navbar>Threads</Navbar>
        <Overview />
        <RelatedItems />
        <Questions />
        <Reviews />
      </ThemeProvider>
    </div>
  );
}

export default App;

// const [cart, setCart] = useState({ items: 0, products: [{}] });

// function incrementCart() {
//   setCart((prevCart) => ({ items: prevCart.items + 1 }));
// }

// function decrementCart() {
//   cart.items > 0 ? setCart((prevCart) => ({ items: prevCart.items - 1 })) : null;
// }

// cart={cart} decrementCart={decrementCart}

// incrementCart={incrementCart}
