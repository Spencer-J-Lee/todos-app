import React from 'react';
import StepListItemContainer from './step_list_item_container';

class StepList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const stepListItemContainers = this.props.steps.map(step => {
      return (
        <StepListItemContainer 
          step={step}
          key={step.id}
        />
      )
    });

    return (
      <ul className="step-list">
        {stepListItemContainers}
      </ul>
    );
  }
}

export default StepList;
