import React from 'react'
import FormLogin from "./FormLogin";
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: #52ca40;
  }
`


function Login() {
    return (
        <>
            <GlobalStyle />
            <div className="Login">
                <FormLogin/>
            </div>
        </>
    )
}

export default Login
