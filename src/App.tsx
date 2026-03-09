import React from 'react';
import Body from './components/Body';
import appStore from './utils/appstore';

import './index.css';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store ={appStore}>
     <Body/>
     </Provider>
  );
}

export default App;
