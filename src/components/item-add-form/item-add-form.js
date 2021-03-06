import React, { Component } from 'react';

import './item-add-form.css'

export default class ItemAddForm extends Component {
  state = {
    label: ''
  };
  onLabelChange = (e) => {
    console.log(e.target.value);
    this.setState({
      label:e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    if(!this.state.label){
      return false;
    }
    this.props.onItemAdded(this.state.label);
    console.log(this.state);

    this.setState({
      label: ''
    });
  }

  render() {
    return (
      <form className={'item-add-form d-flex'} onSubmit={this.onSubmit}>
        <input required={true} className={'form-control'} type='text' onChange={this.onLabelChange}
        placeholder='What needs to be done'
        value={this.state.label}/>
        <button className={'btn btn-outline-secondary'}>
          Add Item</button>
      </form>
    );
  }
};
