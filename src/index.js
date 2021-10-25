import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function Hello(props){
  return (
    <div>
      <h1>Hello World</h1>
      <p>Welcome to this world</p>
    </div>
  );
}
ReactDOM.render(
  <Hello />,
  document.getElementById('root')
);
