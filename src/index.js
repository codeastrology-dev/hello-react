import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function Hello({library, data, gotcha}){
  console.log(library);
  return (
    <div>
      <h1>Hello World {library}</h1>
      <p>Welcome to this world {data}</p>
      <p>Welcome to another line {gotcha}</p>
    </div>
  );
}
ReactDOM.render(
  <Hello
  library="React App"
  data="hello worlds"
  gotcha = "sdadasd"
  />,
  document.getElementById('root')
);
