 
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { createTheme , ThemeProvider } from '@mui/material'
import { styled } from '@mui/material/styles';

 

createRoot(document.getElementById('root')).render(
  <Provider store={store}>

    <App />
  </Provider>,
)
