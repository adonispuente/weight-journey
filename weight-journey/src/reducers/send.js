import allActions from '../actions/index'

const initialState = {
    person:[],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_PERSON":
        return {
          ...state,
          person: action.payload,
        };
      case "POST_PERSON":
        const newPerson = {
          name: action.payload.WeightType,
          CW: action.payload.CW,
          EBF: action.payload.EBF,
          GWCPW:action.payload.GWCPW,
          date: action.payload.startDate
        };
        return { ...state, person: [...state.person, newPerson] };
  
      default:
        return state;
    }
  };

  export default reducer;