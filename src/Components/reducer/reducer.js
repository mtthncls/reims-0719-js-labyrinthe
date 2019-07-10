const initialState = {
    
   };
   

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CHANGE_FILTER':
        return {
          ...state,
          filter: action.filter
        };
        
      default:
        return state;
    }
   };
   
   export default reducer;
   