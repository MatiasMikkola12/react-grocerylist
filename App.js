import React from 'react';
import './App.css';

var TodoItems = React.createClass({
  render: function() {

  }
});

var TodoList = React.createClass({

  getInitialState: function() {
    return {
      items: []
    };
  },

  addItem: function(e) {
    var itemArray = this.state.items;

    itemArray.push(
      {
        text: this._inputElement.value,
        key: Date.now()
      }
    );

    this.setState({
      items: itemArray
    });

    this._inputElement.value = "";

    e.preventDefault();
  },


  render: function() {
      return (
        <div className="todoListMain">
          <div className="header">
            <form onSubmit={this.addItem}>
              <input ref={(a) => this._inputElement = a}></input>
              <button type="submit">ADD</button>
            </form>
          </div>
        </div>
      );
    }
});

export default TodoList;
