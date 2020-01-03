import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from '../actions/todo_actions';

const initialState = {
  1: {
    id: 1,
    title: 'Simple List; No bodies',
    body: '',
    done: false,
  },
  2: {
    id: 2,
    title: 'Short List',
    body: 'with a body',
    done: false,
  },
  3: {
    id: 3,
    title: 'Shorter List',
    body: 'Has nothing.',
    done: false,
  },
  4: {
    id: 4,
    title: 'Really long stuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuff',
    body: "Every single person tries to survive because they desire peace of mind. The struggle to acquire fame, power over others, and money is all towards this end. Marriage and friendship is also for this purpose. To serve others, to fight for war and peace, all of these are attempts to sustain peace of mind. The search for peace of mind is the ultimate goal of all human beings. So... what's wrong with serving me? By serving me, you can easily obtain peace of mind.",
    done: false,
  },
  5: {
    id: 5,
    title: 'Everything is done',
    body: '',
    done: true,
  },
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_TODOS:
      nextState = {};
      action.todos.forEach(todo => nextState[todo.id] = todo);
      return nextState;
    case RECEIVE_TODO:
      nextState[action.todo.id] = action.todo;
      return nextState;
    case REMOVE_TODO:
      delete nextState[action.todo.id];
      return nextState;
    default: 
      return state;
  }
}

export default todosReducer;
