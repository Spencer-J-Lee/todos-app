import React from 'react';
import TodoListItem from '../todo_list/todo_list_item';
import TodoForm from '../todo_list/todo_form';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const todoListItems = this.props.todos.map(todo => {
      return (
        <TodoListItem
          todo={todo} 
          key={todo.id}
          receiveTodo={this.props.receiveTodo}
          removeTodo={this.props.removeTodo}
        />
      )
    });

    return (
      <li className="todo-list">
        <h1>Todo List</h1>

        <ul className="todo-list-items">
          {todoListItems}
        </ul>

        <TodoForm receiveTodo={this.props.receiveTodo}/>
      </li>
    );
  }
}

export default TodoList;
