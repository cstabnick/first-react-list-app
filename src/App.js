import React, { Component } from 'react';
import List from './components/List/List';
import classes from './App.scss';



class App extends Component {
  state = {
    list: [
    {
      id: 1,
      title: "This is a responsive list application",
      text: "Click edit or new to experiment with it",
      editOpen: false,
      dismissed: false
    }

    ]
  }

  // Dismisses the item 
  dismissItem = (id) => {
    this.setState( { list: this.state.list.map(list => {
      if(id === list.id){
        list.dismissed = true;
      }
      return list;
    }) } )
  }

  // Opens the item for editing
  editItem = (id) => {
    this.setState( { list: this.state.list.map(list => {
      if(id === list.id){
        list.editOpen = !list.editOpen;
      }
      return list;
    }) } )
  }

  // Takes the temp values from ListItem and stores them in state
  savePara = (id, text, title) => {
    this.setState( { list: this.state.list.map(list =>{
      if(id === list.id){
        if (text !== ""){
          list.text = text;
        }
        if (title !== ""){
          list.title = title;
        }
        list.editOpen = false;
      }
      return list;
    }) } )
  }

  // Appends item to state.list using spread operator
  newItem = (state) => {
    this.setState((state) =>({
      list: [...this.state.list,     {
      id: this.state.list.length + 1, 
      title: "new item",
      text: "please edit me",
      editOpen: false,
      dismissed: false
    }
]
    }));
  }

  render() {
    return (
      <div className="App">
        <List list={this.state.list} newItem={this.newItem} savePara={this.savePara} dismissItem={this.dismissItem} editItem={this.editItem}/>
      </div>
    );
  }
}

export default App;
