import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Viper from './viper.jsx'

function Myapp() {
  return (
    <div>
      <h1>
        F**k you all night Today
      </h1>
      <h6>
        this for you..only...!!
      </h6>
    </div>
  )
}
const anotheruser = "viperX"


const reactelement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'click to me a visit google' ,
  anotheruser
)




const AnotherElement = (
  <a href="https://google.com" target="_blank">
    visit gool-gool baba
  </a>
)

createRoot(document.getElementById('root')).render(
  <>
    {reactelement}
    <App />
  </>
)