import React from 'react';
import uniqueId from '../../util/unique_id';

class StepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', body: '' };
    this.handleChange = this.handleChange.bind(this);
    this.createStep = this.createStep.bind(this);
  }

  render() {
    return (
      <form className="step-list-form" onSubmit={this.createStep}>
        <input 
          type="text"
          className="step-list-form-title"
          placeholder="Add a step..."
          value={this.state.title}
          onChange={this.handleChange}>
        </input>
        
        <input 
          type="text"
          className="step-list-form-body"
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
    event.preventDefault();
    const input = event.currentTarget;
    switch (input.placeholder) {
      case 'Add a step...':
        this.setState({ title: input.value });
        break;
      case 'body (optional)':
        this.setState({ body: input.value });
    }
  }

  createStep(event) {
    event.preventDefault();

    if (this.state.title === '') {
      return;
    }

    this.props.receiveStep({
      id: uniqueId(),
      title: this.state.title,
      body: this.state.body,
      todo_id: this.props.todo_id,
      done: false,
    });

    this.setState({ title: '', body: '' });
  }
}

export default StepForm;
