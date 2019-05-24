export default (state = null, action) => {
  switch (action.type) {
    case 'select_library':
      return action.payload == state ? null : action.payload;
    default:
      return state;
  }
};
