import React, { Component } from 'react';
import List from './components/List/List';
import NavBar from './components/NavBar/NavBar';
import classes from './App.scss';



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

  savePara = (id, text, title) => {
    this.setState( { list: this.state.list.map(list =>{
      if(id === list.id){
        console.log(this.title);
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

  newItem = (state) => {
    this.setState((state) =>({
      list: [...this.state.list,     {
      id: this.state.list.length + 1, 
      title: "second title",
      text: "lorem wowo ipsum",
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
