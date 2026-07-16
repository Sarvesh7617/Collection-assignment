import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CollectionProvider } from './context/CollectionContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CollectionProvider>
      <App />
    </CollectionProvider>
  </StrictMode>,
)
