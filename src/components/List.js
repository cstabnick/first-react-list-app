import React, { Component } from 'react';
import ListItem from "./ListItem";
import PropTypes from 'prop-types';


class List extends Component {
  render() {
    return this.props.list.map((list) => (
      	<ListItem key={list.id} list={list} 
      		dismissItem={this.props.dismissItem} 
      		savePara={this.props.savePara} 
      		editItem={this.props.editItem}/>
      ));
    
  }
}

// Proptypes
List.propTypes = {
	list: PropTypes.array.isRequired
}

export default List;
