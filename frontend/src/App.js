import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppRouting from './routing/routing';

const App = () => {
  return (
    <BrowserRouter>
        <AppRouting />
    </BrowserRouter>
  )
}

export default App;
