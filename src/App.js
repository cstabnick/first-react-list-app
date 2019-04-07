import React, { Component } from 'react';
import List from './components/List';

import './App.css';

class App extends Component {
  state = {
    list: [
    {
      id: 1,
      title: "first article wow o",
      editOpen: false,
      dismissed: false
    },
    {
      id: 2, 
      title: "second",
      text: "lorem wowo ipsum",
      dismissed: false
    }

    ]
  }

  // Dismisses the article
  dismissItem = (id) => {
    this.setState( { list: this.state.list.map(list => {
      if(id === list.id){
        list.dismissed = true
      }
      return list;
    }) } )
  }

  editItem = (id) => {
    this.setState( { list: this.state.list.map(list => {
      if(id === list.id){
        list.editOpen = true;
      }
      return list;
    }) } )
  }

  render() {
    return (
      <div className="App">
        <List list={this.state.list} dismissItem={this.dismissItem} editItem={this.editItem}/>
      </div>
    );
  }
}

export default App;
