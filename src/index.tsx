import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { store } from './app/store/index';
import { Provider } from 'react-redux';
//import { ApiProvider } from '@reduxjs/toolkit/query/react';
//import { apiSlice } from './app/apiSlice(rtk query)/base/apiSlice';
import { storeRtk } from './app/apiSlice(rtk query)/advance/indexSlice';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
  <React.StrictMode>
      <Provider store={storeRtk}>
        <App />
      </Provider>
    </React.StrictMode>
  {/* simple rtk query
    <React.StrictMode>
      <ApiProvider api={apiSlice}>
        <App />
      </ApiProvider>
    </React.StrictMode> 
  */}
  {/* thunk method 
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>*/}
  </>
  
);

reportWebVitals();
