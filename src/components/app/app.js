import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      latestId: 4,
      todoData: [
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Make Awesome App', important: true, id: 2 },
        { label: 'Have a lunch', important: false, id: 3 }
      ],
      filterStatus:'all'
    };
    window.state = this.state;
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => ({ todoData: todoData.filter(el => el.id !== id) }));
  }

  addItem = (label) => {

    this.setState(({ todoData, latestId }) => {
      const newData = [].concat(todoData,
        { label: label, important: false, id: latestId }
      );
      return { todoData: newData, latestId: latestId + 1}
    });
  }

  onToggleImportant = (id) => {
    console.log(id);
    this.setState(({todoData}) => {
      const newData = todoData.map(el => {
        return el.id !== id ? el : { ...el, important: !el.important };
      });
      return {todoData: newData}
    });
  }

  onToggleDone = (id) => {
    console.log(id);
    this.setState(({todoData}) => {
      const newData = todoData.map(el => {
        return el.id !== id ? el : { ...el, done: !el.done };
      });
      return {todoData: newData}
    });
  }

  onChangeFilterStatus = (status) => {
    this.setState({
      filterStatus:status
    });
  }

  filter = () => {
    let data;
    const { filterStatus, todoData } = this.state;
    switch(filterStatus){
      case 'active':
       data = todoData.filter(el => !el.done);
        break;
      case 'done':
        data = todoData.filter(el => el.done);
        break;
      case 'all':
        data = todoData;
        break;
      default:
        data = todoData;
    }
    return data;
  }

  render() {
    const visibleItems = this.filter();
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3}/>
        <div className="top-panel d-flex">
          <SearchPanel/>
          <ItemStatusFilter onChangeFilterStatus={this.onChangeFilterStatus} filterStatus={this.state.filterStatus}/>
        </div>

        <TodoList todos={visibleItems} onDeleted={this.deleteItem}
                  onToggleImportant={this.onToggleImportant}
                  onToggleDone={this.onToggleDone}
        />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
};

