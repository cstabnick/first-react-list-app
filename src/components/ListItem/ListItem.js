import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './ListItem.scss';


export class ListItem extends Component {
  state = {
    inputPara: "",
    inputTitle: ""
  };


  getStyle = (style) => {
    if (style === "dismiss"){
      return {
        display: this.props.list.dismissed ? 'none' : '', 
        padding: '10px',
        textAlign: 'center',
        fontSize: '2em'
      }
    }
    if (style === 'edit'){
      return{
        display: this.props.list.editOpen ? '' : 'none',
        fontSize: '10px'
      }
    }

  }

  // Updates temporary value stored in edit box
  updateInputValue = (event) => {
    var newString = event.target.value.toString();
    if (event.target.name === "paragraphText"){
      this.setState((state, props) => {
        return {inputPara: newString};
      }
      )
    }
    if (event.target.name === "title"){
      this.setState((state, props) => {
        return {inputTitle: newString};
      })
    }
  }

  render() {
    const { id, title, text, editOpen } = this.props.list;
    

    return (
      <div className='listitem' style={this.getStyle('dismiss')}>
        <h1>
          
          {title}
        </h1>
        <p>
          {text}
        </p>

          <button onClick={this.props.editItem.bind(this,id)}>Edit</button>
          <button onClick={this.props.dismissItem.bind(this, id)}>Delete</button> 

          <div className='valueInput' style={this.getStyle('edit')}>
            <input placeholder="Title" type="text" onChange={this.updateInputValue} name="title" />
            <br/>
            <input placeholder="Text" type="text"  onChange={this.updateInputValue} name="paragraphText" />
            <br/>
            <input type="button" value="Save" onClick={this.props.savePara.bind(this,id,this.state.inputPara, this.state.inputTitle)}/>
          </div>

        
      </div>
      
    );
  }
}

// PropTypes
ListItem.propTypes = {
  list: PropTypes.object.isRequired
}

export default ListItem;