import ActionType from '@src/actions/ActionType';

const initialState = {}

export default (state = initialState, action) => {
  console.log(action.type, action)
  switch (action.type) {
    case ActionType.GET_TERMS:
      return {
        ...state,
      };
    case ActionType.GET_TERMS_SUCCESS:
      return {
        ...state,
        definitions: action.payload
      };  
    case ActionType.ADD_TERM: 
      return {
        ...state,
        termAdded: action.payload
      }
    case ActionType.ADD_TERM_SUCCESS: 
      return {
        ...state,
        termAdded: action.payload
      }
    default:
      return state;
  }
};