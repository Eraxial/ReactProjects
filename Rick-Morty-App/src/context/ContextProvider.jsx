/* eslint-disable react/prop-types */
import { jwtDecode } from "jwt-decode";
import { Fragment, createContext, useEffect, useState } from "react"

export const AppContext = createContext();

export const ContextProvider = ({children}) => {

  const [state, setState] = useState();

  useEffect(() => {
    if (localStorage.getItem('token')){
      setState(jwtDecode(localStorage.getItem('token')))
    }
  }, [])

  return (
    <Fragment>
      <AppContext.Provider value ={[state, setState]}>
        {children}
      </AppContext.Provider>
    </Fragment>
  )
}
