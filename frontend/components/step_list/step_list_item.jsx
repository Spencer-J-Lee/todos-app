import React from 'react';

class StepListItem extends React.Component {
  constructor(props) {
    super(props);
    this.updateStep = this.updateStep.bind(this);
    this.removeStep = this.removeStep.bind(this);
  }

  render() {
    let className = "step-list-item"
    if (this.props.step.done) {
      className += " done";
    }

    return (
      <li className={className}>
        <button 
          className="step-list-item-btn"
          onClick={this.updateStep}>
            <p className="step-list-item-title">
              {this.props.step.title}
            </p>

            <p className="step-list-item-body">
              {this.props.step.body}
            </p>
        </button>
        

        <button 
          className="delete"
          onClick={this.removeStep}>
            &times;
        </button>
      </li>
    );
  }

  updateStep(event) {
    event.preventDefault();
    const nextStep = Object.assign({}, this.props.step);
    nextStep.done = nextStep.done ? false : true;
    this.props.receiveStep(nextStep);

    const li = event.currentTarget.parentElement;
    if (nextStep.done) {
      li.classList.add('done');
    } else {
      li.classList.remove('done');
    }
  }

  removeStep(event) {
    event.preventDefault();
    this.props.removeStep(this.props.step);
  }
}

export default StepListItem;
