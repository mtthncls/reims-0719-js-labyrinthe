const initialState = {
  isWelcomePageDisplayed: true,
  isMazePageDisplayed: false,
  isWinnerPageDisplayed: false,
  positionPlayerOne: 2,
  positionPlayerTwo: 20,
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
        positionPlayerOne: action.positionPlayerOne,
        positionPlayerTwo: action.positionPlayerTwo,
      };
    case 'RETRY':
      return {
        ...state,
        isWelcomePageDisplayed: false,
        isMazePageDisplayed: true,
        positionPlayerOne: 2,
        positionPlayerTwo: 20,
      }  

    default:
      return state;
  }
};

export default reducer;
