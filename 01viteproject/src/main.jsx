import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
      <div>
        <h1>hello coder</h1>
      </div>
    )
}
const anotherElement = (
  <a href="www.google.com" target='_blank'>to visite google</a>
)
const reactElement = React.createElement(

    'a',{ href:"www.pagalbano.com",target:'_blank'},
    'click me to visite google '

)

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
