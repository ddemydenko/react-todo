import React, { Component } from 'react';

import './item-status-filter.css';


export default class ItemStatusFilter extends Component {

  buttons = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'},
  ];

  render() {

    const buttons = this.buttons.map(({name, label}) => {
      const clazz = name === this.props.filterStatus? 'btn-info': 'btn-outline-secondary';
      const className = `btn ${clazz}`;
      return (
        <button type="button" value={name} onClick={()=>{this.props.onChangeFilterStatus(name)}}
                key={name}
                className={className}>{label}</button>
      );
    });

        return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  }
}
