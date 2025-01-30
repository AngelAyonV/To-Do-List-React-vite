import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import ToDoListApp from './ToDoListApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToDoListApp />
  </StrictMode>,
)
