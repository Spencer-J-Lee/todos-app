import React from 'react';
import uniqueId from '../../util/unique_id';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', body: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <form className="todo-list-form" onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          className="todo-list-form-title"
          placeholder="Add a list..." 
          value={this.state.title}
          onChange={this.handleChange}>  
        </input>

        <input 
          type="text" 
          className="todo-list-form-body"
          placeholder="body (optional)"
          value={this.state.body}
          onChange={this.handleChange}>
        </input>

        <input 
          className="submit"
          type="submit" 
          value="+">
        </input>
      </form>
    );
  }

  handleChange(event) {
    const input = event.currentTarget;
    const placeholder = input.getAttribute('placeholder');

    switch (placeholder) {
      case 'Add a list...':
        this.setState({ title: input.value });
        break;
      case 'body (optional)':
        this.setState({ body: input.value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.title === '') {
      return;
    }

    this.props.receiveTodo({
      id: uniqueId(),
      title: this.state.title,
      body: this.state.body,
      done: false,
    });

    this.setState({ title: '', body: '' });
  }
}

export default TodoForm;
