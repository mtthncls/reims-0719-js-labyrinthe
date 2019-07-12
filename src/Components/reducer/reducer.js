const initialState = {
  isWelcomePageDisplayed: true,
  isMazePageDisplayed: false,
  isWinnerPageDisplayed: false,
  positionPlayerOne: 2,
  positionPlayerTwo: 20,
  count: 5,
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DISPLAY_MAZE':
      return {
        ...state,
        isWelcomePageDisplayed: !state.isWelcomePageDisplayed,
        isMazePageDisplayed: !state.isMazePageDisplayed,
        count: action.count,
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
      case 'TIME':
      return {
        ...state,
        count: state.count !== 0 ? state.count - 1 : state.count,
      }  
    default:
      return state;
  }
};

export default reducer;
