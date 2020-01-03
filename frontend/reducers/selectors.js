export const allTodos = ({ todos }) => (
  Object.keys(todos).map(id => todos[id])
);

export const stepsByTodoId = (state, todoId) => {
  const filteredSteps = [];
  for (let id in state.steps) {
    const step = state.steps[id];
    if (step.todo_id === todoId) {
      filteredSteps.push(state.steps[id]);
    }
  }
  return filteredSteps;
}
