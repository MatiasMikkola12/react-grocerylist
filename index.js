import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './App';
import './index.css';

var destination = document.querySelector("#container");

ReactDOM.render(
  <div>
    <TodoList/>
  </div>,
  destination
);
