import axios from "axios";


export const getPerson = (personObj) => {
    
}
    // return function(dispatch) {
    //   dispatch({ type: "GET_PERSON "});
    //   // then make the async call
    //   axios
    //     .get("http://localhost:3000")
    //     .then((res) => {
    //       console.log(res.data);
    //       dispatch({ type: "GET_PERSON", payload: res.data });
    //     })
    //     .catch((err) => console.log(err));
    // };
// }
  
  
    export const postPerson = (newPerson) => {
        return {
            type: "GET_PERSON",
            payload:newPerson,
            
        }
    // axios
    //   .post("http://localhost:3000", newPerson)
    //   .then((res) => {
    //       console.log(res)
    //     dispatch({ type: "POST_PERSON", payload: res.data.results });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  

export default {
    getPerson,
    postPerson,
}




