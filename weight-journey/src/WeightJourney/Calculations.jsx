import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { PieChart } from 'react-minimal-pie-chart';
import {useSelector, useDispatch} from 'react-redux'
import allActions from "../actions";
import { getPerson } from "../actions/submitWeightAction";
import Form from './FormUI/Form'
import { reduxForm, Field } from 'redux-form'
import MenuItem from 'material-ui/MenuItem'
import { RadioButton } from 'material-ui/RadioButton'
// // import {
// //   Checkbox,
// //   RadioButtonGroup,
// //   SelectField,
// //   TextField,
// //   Toggle,
// //   DatePicker
// // } from 'redux-form-material-ui'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import "./Calculations.css"


export default function Calculations(){
 
//styling for the pie chart ---------------------------------------
    var piestyle={
        height: '40vh',
        padding:'0,40',
    }
    const lineWidth = 60;
//----------------------------------------




    const initialPerson = {
        Lifestyle: "",
        //currentWeight
        CW:"",
        //Estimated body fat
        EBF:"",
        //Goal weight Change Per week
        GWCPW:"",
        height:"",
        age:"",
    }
   
   
    const data = false;
    const person = useSelector(state => state.person);
    // const [error,setError] = useState();
    const [startDate, setStartDate] = useState(new Date());
    const dispatch = useDispatch()
    const [metrics,setMetrics]= useState(false)
    const [currentPerson,setCurrentPerson] = useState(initialPerson);



    const Changing = (event)=>{
        // setPerson({...person, [event.target.name]: event.target.value})
        console.log(event.target)
        const name = event.target.name;
        const value = event.target.value;

        setCurrentPerson({
            ...currentPerson,
            [name]: value,
        })
    }
    
    const submitForm = (e) => {
        e.preventDefault();
        setMetrics(true)
      };
    
    

 


    return(
    <div>
        
        <div className="flex">
            <div class="spacing">
                <form onSubmit={submitForm} class="box container">
                    <h1 class= 'h1'>Step 1</h1>
                    <label className="form-input">
                        <select class="form-input"
                         id ="Lifestyle" name = "Lifestyle" placeholder ="Activity Level" value={currentPerson.Lifestyle} onChange={Changing}>
                            <option style={{color:'white'}}>Whats your lifestyle?</option>
                            <option value={1.2}>little to none</option>
                            <option value={1.375}> 1-3 days a week</option>
                            <option value={1.55}>3-5 days a week</option>
                            <option value={1.7}>6-7 days a week </option>
                            <option value={1.9}>Every day!!!</option>
                            
                        </select>
                    </label>
                    {/* <label>
                            <DatePicker class="form-input" placeholder="Date" name="date" selected={startDate} onChange={date => setStartDate(date)}  />
                    </label> */}
                    <label>
                            <input 
                            class="form-input"
                            name ="CW"
                            placeholder="Weight in Lbs"
                            value={currentPerson.CW}
                            onChange={Changing}
                            />
                    </label>
                    {/* <label>
                            <input
                            class="form-input"
                            name ="EBF"
                            placeholder="Estimated BodyFat%?"
                            value={currentPerson.EBF}
                            onChange={Changing}
                            />
                    </label> */}
                    <label>
                           
                            <p style={{color:'white',opacity:'0.5',fontSize:'14px'}}>This is per week</p>
                             <select class="form-input"
                         id ="GWCPW" name = "GWCPW" placeholder="Goal Weight Change Per week??" value={currentPerson.GWCPW} onChange={Changing}>
                            <option style={{color:'white'}}>Goal Weight Change</option>
                            <option value={-500}>-1lb a week</option>
                            <option value={-250}> -0.5lb a week</option>
                            <option value={0}>Maintain</option>
                            <option value={250}>0.5lb a week </option>
                            <option value={500}>1lb a week</option>
                            
                        </select>
                    </label>
                    <label>
                            <input
                            class="form-input"
                            name ="height"
                            placeholder="Height in cm"
                            value={currentPerson.height}
                            onChange={Changing}
                            />
                    </label>
                    <label>
                            <input
                            class="form-input"
                            name ="age"
                            placeholder="Age"
                            value={currentPerson.age}
                            onChange={Changing}
                            />
                    </label>
                    

                    <button class="button" onClick={()=>dispatch(allActions.postPerson(currentPerson))}>Add your stats!
        
                    </button>
                    
                    
                </form>
            </div>

        <div className="spacing step2">
               <h1 class= 'h1'>Step 2</h1>
               <div class="pcf">
                    <p style={{color:'#23c7da'}}>Protein</p>
                    <p style={{color:'black'}}>Carbohydrates</p>
                    <p style={{color:'#c0c0c0'}}>Fats</p>
               </div>
               <div style={piestyle} class="pie">
               <PieChart 
               
                    totalValue={100}
                        data={[
                            { title: 'Protein', value: 20, color: '#c0c0c0' },
                            { title: 'Carbs', value: 40, color: '#23c7da' },
                            { title: 'Fats', value: 40, color: 'black' },
                        ]}
                        segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
                        animate
                        // onClick={PieChart.animate}
                        
                        animationDuration={1000}
                        //the donut part
                        lineWidth={60}
                        label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
                        labelPosition={100 - lineWidth / 2}
                        labelStyle={{
                            fill: '#fff',
                            opacity: 0.75,
                            pointerEvents: 'none',
                          }}
                          style={{
                            fontFamily:
                              '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
                            fontSize: '10px',
                          }}
                          radius= {PieChart.defaultProps.radius-6}
                          //this is making the blue pop out more
                        //   segmentsShift={(index) => (index === 0 ? shiftSize : 0.5)}


                    />
                </div>
               <p style={{paddingTop:'40px', color:'white'}}>Your Total Daily Energy Expenditure is...</p>
               <div>
                            {metrics !== false ? (
                                <div>
                                    
                                    <p style={{color:'white'}}>Your estimated Current TDEE is {Math.round(person.Lifestyle * (66 + (6.23 * person.CW) +(12.7 * person.height) - (6.8 * person.age)))}</p>
                                    <hr></hr>
                                    <p style={{color:'white'}}> To reach your goal, you have to eat {+currentPerson.GWCPW +(+Math.round(person.Lifestyle * (66 + (6.23 * person.CW) +(12.7 * person.height) - (6.8 * person.age))))}</p>
                                
                                </div>


                                ) : (
                                    <div />
                                )}
                    </div>   
                 
        </div>
                
                {/* <h3>Don't know youre Body Fat%? Lets get you an estimate!</h3> */}
        </div>
                  


    </div>
    );
}

