import grid from '../Grid';

const initialState = {
  isWelcomePageDisplayed: true,
  isMazePageDisplayed: false,
  isWinnerPageDisplayed: false,
  positionPlayerOne: 2,
  positionPlayerTwo: 20,
  positionKey: 190,
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DISPLAY_MAZE':
      return {
        ...state,
        isWelcomePageDisplayed: !state.isWelcomePageDisplayed,
        isMazePageDisplayed: !state.isMazePageDisplayed,
      };
    case 'MOVE_PLAYER_ONE_UP':
      return {
        ...state,
        positionPlayerOne: grid[state.positionPlayerOne - 1].up !== 0 ? grid[state.positionPlayerOne - 1].up : state.positionPlayerOne,
      };
    case 'MOVE_PLAYER_ONE_DOWN':
      return {
        ...state,
        positionPlayerOne: grid[state.positionPlayerOne - 1].down !== 0 ? grid[state.positionPlayerOne - 1].down : state.positionPlayerOne,
      };
    case 'MOVE_PLAYER_ONE_LEFT':
      return {
        ...state,
        positionPlayerOne: grid[state.positionPlayerOne - 1].left !== 0 ? grid[state.positionPlayerOne - 1].left : state.positionPlayerOne,
      };
    case 'MOVE_PLAYER_ONE_RIGHT':
      return {
        ...state,
        positionPlayerOne: grid[state.positionPlayerOne - 1].right !== 0 ? grid[state.positionPlayerOne - 1].right : state.positionPlayerOne,
      };
    case 'MOVE_PLAYER_TWO_UP':
      return {
        ...state,
        positionPlayerTwo: grid[state.positionPlayerTwo - 1].up !== 0 ? grid[state.positionPlayerTwo - 1].up : state.positionPlayerTwo,
      };
    case 'MOVE_PLAYER_TWO_DOWN':
      return {
        ...state,
        positionPlayerTwo: grid[state.positionPlayerTwo - 1].down !== 0 ? grid[state.positionPlayerTwo - 1].down : state.positionPlayerTwo,
      };
    case 'MOVE_PLAYER_TWO_LEFT':
      return {
        ...state,
        positionPlayerTwo: grid[state.positionPlayerTwo - 1].left !== 0 ? grid[state.positionPlayerTwo - 1].left : state.positionPlayerTwo,
      };
    case 'MOVE_PLAYER_TWO_RIGHT':
      return {
        ...state,
        positionPlayerTwo: grid[state.positionPlayerTwo - 1].right !== 0 ? grid[state.positionPlayerTwo - 1].right : state.positionPlayerTwo,
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
