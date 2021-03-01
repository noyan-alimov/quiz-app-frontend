import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from "@chakra-ui/react"
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Auth0Provider
        domain="quiz-app-auth.eu.auth0.com"
        clientId="lT3Qppoc0kaQWjr49Vg7eUrUYa2WwxJ9"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
