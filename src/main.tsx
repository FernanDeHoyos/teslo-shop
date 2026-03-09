import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TesloApp } from './TesloApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TesloApp />
  </StrictMode>,
)
