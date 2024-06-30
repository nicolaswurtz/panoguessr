import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.tsx'
import './main.scss'

// Avoid StrictMode for now (it duplicates useEffect((),[])) in GeoVisio compenents
/* ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
); */

ReactDOM.createRoot(document.getElementById('root')!).render(<Home />);
