import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-bfxury6l2rszlzri.us.auth0.com"
      clientId="U7B9NAVwRdu0ZR8tmWBrjDOIhfm8PcaG"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: "https://dev-bfxury6l2rszlzri.us.auth0.com/api/v2/",
        responseType: "token id_token",
        scope: "openid profile" // add profile in the scope
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
)