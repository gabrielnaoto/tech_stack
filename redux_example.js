const reducer = (state = [], { type, payload }) => {
  //always return a brand new object
  if (type === 'split_string') {
    return payload.split('');
  } else if (type === 'add_character') {
    return [...state, payload];
  }

  return state;
};

const store = Redux.createStore(reducer);
store.getState();

const action = {
  type: 'split_string',
  payload: 'qwer'
};
store.dispatch(action);
store.getState();

const action2 = {
  type: 'add_character',
  payload: 't'
};
store.dispatch(action2);
store.getState();
