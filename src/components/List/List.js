import React, { Component } from 'react';
import ListItem from "../ListItem/ListItem";
import PropTypes from 'prop-types';
import classes from './List.scss';

class List extends Component {
  newItem = () => {

  }
  render() {
    return(
      <div className="list">
      {this.props.list.map((list) => (
      	<ListItem key={list.id} list={list} 
      	dismissItem={this.props.dismissItem} 
      	savePara={this.props.savePara} 
      	editItem={this.props.editItem}/>
      ))}
      <button onClick={this.props.newItem}>New</button>
      </div>
    )
  }
}

// Proptypes
List.propTypes = {
	list: PropTypes.array.isRequired
}

export default List;
