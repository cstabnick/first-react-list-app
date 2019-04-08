import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class ListItem extends Component {
  state = {
    inputPara: ""
  }

  getStyle = (style) => {
    if (style === "dismiss"){
      return {
        display: this.props.list.dismissed ? 'none' : '', 
        padding: '10px',
        textAlign: 'center',
        fontSize: '2em',
        borderBottom: '3px #000 solid'
      }
    }
    if (style === 'edit'){
      return{
        display: this.props.list.editOpen ? '' : 'none',
        fontSize: '20px'
      }
    }

  }

  updateInputValue = (event) => {
    var newString = event.target.value.toString();
    this.setState((state, props) => {
      return {inputPara: newString};
    }
    )  
  }

  render() {
    const { id, title, text, editOpen } = this.props.list;
    return (
      <div style={this.getStyle('dismiss')}>
        <p>
          <input type="checkbox" 
          onChange={this.props.dismissItem.bind(this, id)}/> 
          
          {title}
        </p>
        <p>
          {text}
        </p>

          <button onClick={this.props.editItem.bind(this,id)}>Edit</button>

          <div style={this.getStyle('edit')}>
            Paragraph Text: <input type="text"  onChange={this.updateInputValue} name="paragraphText"/>

            <input type="button" value="save" onClick={this.props.savePara.bind(this,id,this.state.inputPara)}/>
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