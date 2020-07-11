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
          <p>{this.props.items.length}</p>
      </div>
    );
  }
}



// 
const mapStateToProps = (state) => {
  return { orangePeel: ['a', 'b', 'c']  }
  //This return value, is the value of the props that are added to the App component
}
 
export default connect(mapStateToProps)(App);// app is now a connected componenet b/c it's connected to the store
//We understand that the connect() function calls the mapStateToProps() function each time there is a change in state, 
//and that mapStateToProps() receives state as its first argument.

//connect() takes whatever the return value is of the mapStateToProps() function and passes it to the component 
//that is in those last set of parentheses, orangepeel in this case would be the prop name

//Because we are taking a part of the store's state and porting it to become props of the relevant component, 
//we say that we are mapping it as props to the component, thus the name mapStateToProps.
//


// the above block could be shortended to // export default connect( state => ({ items: state.items }) )(App);

/*
You will see that clicking on the Items Count button renders an update to our App Component, 
while clicking on the Users Count button does not. This makes sense: 
inside our App component all we do is reference the items count.

Users are still getting created like items, but are not being rendered in
*/

 
