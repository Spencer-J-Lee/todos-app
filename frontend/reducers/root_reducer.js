import { combineReducers } from 'redux';
import todosReducer from '../reducers/todos_reducer';
import stepsReducer from '../reducers/steps_reducer';

const rootReducer = combineReducers({
  todos: todosReducer,
  steps: stepsReducer,
});

export default rootReducer;
