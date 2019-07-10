const initialState = {
    position : 2,
};
   

const reducer = (state = initialState, action) => {
    switch (action.type) {
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
   