import allActions from '../actions/index'

const initialState = {
    person:{
      Lifestyle: "",
        CW:"",
        //Estimated body fat
        EBF:"",
        //Goal weight Change Per week
        GWCPW:"",
        date:""
    },
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
          Lifestyle: action.payload.Lifestyle,
          CW: action.payload.CW,
          EBF: action.payload.EBF,
          GWCPW:action.payload.GWCPW,
          date: action.payload.startDate,
          height:action.payload.height,
          age:action.payload.age,
          MF:action.payload.MF,
        };
        return { ...state, person: [...state.person, newPerson] };
  
      default:
        return state;
    }
  };

  export default reducer;