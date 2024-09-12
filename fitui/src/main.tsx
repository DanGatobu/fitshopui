
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import FitShopcontextProvider from './context/FitShopcontext.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <FitShopcontextProvider>
      <App />

    </FitShopcontextProvider>
    
  </BrowserRouter>,
)
