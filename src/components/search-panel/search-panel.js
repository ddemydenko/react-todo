import React, {Component} from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
  filter = (e) => {
    console.log(e.target);
    if(e.key === 'Escape'){
      e.target.value = '';
      e.target.blur();
    }
    this.props.onSearch(e.target.value);

  }
  render(){
    return (
      <input type="text"
             className="form-control search-input"
             placeholder="type to search" onChange={this.filter} onKeyDown={this.filter}/>
    );
  }

};
