const initialState = {
  isWelcomePageDisplayed: true,
  isMazePageDisplayed: false,
  position: 2,
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DISPLAY_MAZE':
      return {
        ...state,
        isWelcomePageDisplayed: !state.isWelcomePageDisplayed,
        isMazePageDisplayed: !state.isMazePageDisplayed,
      };
    case 'MOVE_PLAYER':
      return {
        ...state,
        position: action.position,
      };

    default:
      return state;
  }
};

export default reducer;
