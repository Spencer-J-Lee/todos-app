import React from 'react';
import StepListContainer from '../step_list/step_list_container';
import StepForm from '../step_list/step_form';

class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let bodyClass = "todo-body"

    if (this.props.todo.body === '') {
      bodyClass += " hidden"
    }

    return (
      <div className="todo-details">
        <p className={bodyClass}>
          {this.props.todo.body}
        </p>
        
        <StepListContainer todo_id={this.props.todo.id}/>
        <StepForm 
          todo_id={this.props.todo.id}
          receiveStep={this.props.receiveStep}
        />
      </div>
    )
  }
}

export default TodoDetailView;
