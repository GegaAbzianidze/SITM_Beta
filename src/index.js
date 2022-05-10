import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import { MoralisProvider } from "react-moralis";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MoralisProvider serverUrl="https://uzwoagzztqvk.usemoralis.com:2053/server" appId="krbwMM0PQAArjl74IZ7DQrpDsoK8E5P1GTJhbRtD">
        <App />
    </MoralisProvider>
  </React.StrictMode>
);

