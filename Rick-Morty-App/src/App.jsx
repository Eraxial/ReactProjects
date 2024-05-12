import { RoutesRick } from './Routes/RoutesRick'
import { Fragment } from 'react'
import { ContextProvider } from './context/ContextProvider'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'

function App() {
  return (
    <Fragment>
      <ContextProvider>
        <RoutesRick/>
      </ContextProvider>
    </Fragment>
  )
}

export default App
