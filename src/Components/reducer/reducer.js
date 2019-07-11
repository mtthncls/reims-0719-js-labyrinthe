const initialState = {
  isWelcomePageDisplayed: true,
  isMazePageDisplayed: false,
  isWinnerPageDisplayed: false,
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
    case 'RETRY':
      return {
        ...state,
        isWelcomePageDisplayed: true,
        isMazePageDisplayed: false,
        position: 2,
      }  

    default:
      return state;
  }
};

export default reducer;
