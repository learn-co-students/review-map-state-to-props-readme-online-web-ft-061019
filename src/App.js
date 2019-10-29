import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';


class App extends Component {

  handleOnClickItems() {
    this.props.store.dispatch({
      type: 'GET_COUNT_OF_ITEMS',
    });
  }

  handleOnClickUsers() {
    this.props.store.dispatch({
      type: 'GET_COUNT_OF_USERS',
    });
  }

  render() {
    debugger;
    return (
      <div className="App">
          <button onClick={() => this.handleOnClickItems()}>
            Click to change items count
            </button>
          <button onClick={() => this.handleOnClickUsers()}>
            Click to change user count
          </button>
          <p>Items: {this.props.items.length}</p>
          <p>Users: {this.props.users.length}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  debugger;
  return { 
    items: state.items,
    users: state.users
   }
}

export default connect(mapStateToProps)(App);
//  connect to the store (mapStateToProps(state) return {the props you want to pass down: from state})(the Comp to pass these props to)
