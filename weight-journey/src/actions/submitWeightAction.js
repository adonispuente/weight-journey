import axios from "axios";


 export const getPerson = (personObj) => {
    
}
   
  
  
    export const postPerson = (newPerson) => {
        return {
            type: "GET_PERSON",
            payload:newPerson,
            
        }
   
  };
  

export default {
    getPerson,
    postPerson,
}




