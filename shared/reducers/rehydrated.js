export default (state = false, action) => {
  const { type } = action;

  switch (type) {
    case 'persist/REHYDRATE':
      return true;

    default:
      return state;
  }
};
