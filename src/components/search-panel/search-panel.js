import React, {Component} from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
  filter = (e) => {
    console.log(e.target);
  }
  render(){
    return (
      <input type="text"
             className="form-control search-input"
             placeholder="type to search" onClick={this.filter}/>
    );
  }

};
