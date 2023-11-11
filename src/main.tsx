import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToDoApp } from './TareaApp/ToDo'
import './Estilos/estilos.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToDoApp></ToDoApp>
  </React.StrictMode>,
)
