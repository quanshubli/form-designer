import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'

function render(Component: React.FC) {
  ReactDOM.render(<Component />, document.getElementById('app'))
}

render(App)
