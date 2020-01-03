import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from '../actions/step_actions';

const initialSteps = {
  1: {
    id: 1,
    title: "This is a step",
    todo_id: 1,
    body: '',
    done: false,
  },
  2: {
    id: 2,
    title: 'This is finished a step',
    todo_id: 1,
    body: '',
    done: true,
  },
  3: {
    id: 3,
    title: '3rd one',
    todo_id: 1,
    body: '',
    done: false,
  },
  4: {
    id: 4,
    title: 'Just one step',
    todo_id: 2,
    body: 'with a body',
    done: false,
  },
  5: {
    id: 5,
    title: 'really long step naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaame ',
    todo_id: 4,
    body: 'really long step boooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooody',
    done: false,
  },
  6: {
    id: 6,
    title: 'I\'m done',
    todo_id: 5,
    body: 'body',
    done: true,
  },
  7: {
    id: 7,
    title: 'Also done',
    todo_id: 5,
    body: 'body',
    done: true,
  },
};

const stepsReducer = (state = initialSteps, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_STEPS:
      nextState = {};
      action.steps.forEach(step => nextState[step.id] = step);
      return nextState;
    case RECEIVE_STEP:
      nextState[action.step.id] = action.step;
      return nextState;
    case REMOVE_STEP:
      delete nextState[action.step.id];
      return nextState;
    default: 
      return state;
  }
}

export default stepsReducer;
