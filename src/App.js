import React, { Component } from 'react';
import List from './components/List';

import './App.css';

class App extends Component {
  state = {
    list: [
    {
      id: 1,
      title: "first title",
      text: "sample text",
      editOpen: false,
      dismissed: false
    },
    {
      id: 2, 
      title: "second title",
      text: "lorem wowo ipsum",
      editOpen: false,
      dismissed: false
    }

    ]
  }

  // Dismisses the article
  dismissItem = (id) => {
    this.setState( { list: this.state.list.map(list => {
      if(id === list.id){
        list.dismissed = true;
      }
      return list;
    }) } )
  }

  editItem = (id) => {
    this.setState( { list: this.state.list.map(list => {
      if(id === list.id){
        list.editOpen = !list.editOpen;
      }
      return list;
    }) } )
  }

  savePara = (id, text) => {
    this.setState( { list: this.state.list.map(list =>{
      if(id === list.id){
        console.log(this.text);
        list.text = text;
        list.editOpen = false;
      }
      return list;
    }) } )
  }

  render() {
    return (
      <div className="App">
        <List list={this.state.list} savePara={this.savePara} dismissItem={this.dismissItem} editItem={this.editItem}/>
      </div>
    );
  }
}

export default App;
