import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App/App.jsx'
import './style/index.css'
import './i18n.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
)
