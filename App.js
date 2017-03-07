import React from 'react';
import './App.css';

var TodoItems = React.createClass({
  render: function() {
    var todoEntries = this.props.entries;

    // add new tasks through the key, which refers to the Date of creation
    function createTasks(item) {
    return <li key={item.key}>{item.text}</li>
  }

    var listItems = todoEntries.map(createTasks);

    // create a <ul> element and display all list items
    return (
      <ul className="theList">
        {listItems}
      </ul>
    );

  }
});

var TodoList = React.createClass({

  // initially there is nothing on the list => so the items array is empty and state is empty
  getInitialState: function() {
    return {
      items: []
    };
  },
  
  // if the addItem function is called, push the value and Date (key) to the array
  addItem: function(e) {
    var itemArray = this.state.items;

    itemArray.push(
      {
        text: this._inputElement.value,
        key: Date.now()
      }
    );
    
    // display itemArray, which now has new item for the array, switches the state to have arrayitems
    this.setState({
      items: itemArray
    });

    this._inputElement.value = "";

    e.preventDefault();
  },

  // create a form to add listItems to be displayed. The <TodoItems entries> displays the items of the current array
  render: function() {
      return (
        <div className="todoListMain">
          <div className="header">
            <form onSubmit={this.addItem}>
              <input ref={(a) => this._inputElement = a}></input>
              <button type="submit">ADD</button>
            </form>
          </div>
          <TodoItems entries={this.state.items}/>
        </div>
      );
    }
});

export default TodoList;
