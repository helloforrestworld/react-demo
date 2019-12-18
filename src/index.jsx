import ReactDOM from 'react-dom'
import React from 'react'

const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);

function Hello () {
  return element
}

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
);
