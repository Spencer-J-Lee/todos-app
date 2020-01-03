import React from 'react';
import TodoDetailViewContainer from './todo_detail_view_container';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.updateTodo = this.updateTodo.bind(this);
    this.removeTodo = () => this.props.removeTodo(this.props.todo);
    this.toggleDetail = this.toggleDetail.bind(this);
    this.state = { detail: false }
  }

  render() {
    const details = (
      <TodoDetailViewContainer todo={this.props.todo}/> 
    );

    return (
      <li className="todo-list-item">
        <button 
          className="todo-item-btn"
          onClick={this.toggleDetail}>
            {this.props.todo.title}
        </button>

        <button 
          className="check" 
          onClick={this.updateTodo}>
        </button>

        <button 
          className="delete"
          onClick={this.removeTodo}>
            &times;
        </button>

        {this.state.detail ? details : ''}
      </li>
    );
  }

  updateTodo(event) {
    event.preventDefault();
    const nextTodo = Object.assign({}, this.props.todo);
    nextTodo.done = nextTodo.done ? false : true;
    this.props.receiveTodo(nextTodo);

    const li = event.currentTarget.parentElement;
    if (nextTodo.done) {
      li.classList.add('done');
    } else {
      li.classList.remove('done');
    }
  }

  toggleDetail(event) {
    event.preventDefault();
    const todoBtn = event.currentTarget;

    if (this.props.todo.body === '') {
      if (todoBtn.className.includes('reveal-no-body')) {
        todoBtn.classList.remove('reveal-no-body');
      } else {
        todoBtn.classList.add('reveal-no-body');
      }
    } else {
      if (todoBtn.className.includes('reveal-body')) {
        todoBtn.classList.remove('reveal-body');
      } else {
        todoBtn.classList.add('reveal-body');
      }
    }

    const newDetail = this.state.detail ? false : true;
    this.setState({ detail: newDetail });
  }
}

export default TodoListItem;
