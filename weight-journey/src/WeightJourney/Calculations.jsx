import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { PieChart } from 'react-minimal-pie-chart';
import {useSelector, useDispatch} from 'react-redux'
import allActions from "../actions";
import "./Calculations.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain } from '@fortawesome/free-solid-svg-icons'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import bg4 from '../Pictures/bg4.png'


const Background = styled.section`
  background-attachment: fixed;
  background-image: url(${bg4});
  width: 100%;
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
  background-repeat: no-repeat;
  overflow-x: hidden;
`;




export default function Calculations(){
 
//styling for the pie chart ---------------------------------------
    var piestyle={
        // height: '40vh',
        // padding:'0,40',
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
        MF:"",
    }
   
   
    const data = false;
    const [male,setMale] = useState(false);
    const [female,setFemale] = useState(false);
    const person = useSelector(state => state.person);
    // const [error,setError] = useState();
    // const [startDate, setStartDate] = useState(new Date());
    const dispatch = useDispatch()
    const [metrics,setMetrics]= useState(false)
    const [currentPerson,setCurrentPerson] = useState(initialPerson);
    const [tdee, setTdee] = useState()



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

        if(currentPerson.MF=='Male'){
            setMale(true);
            setFemale(false);
            setTdee(+currentPerson.GWCPW +(+Math.round(person.Lifestyle * (66 + (6.23 * person.CW) +(12.7 * person.height) - (6.8 * person.age)))));
        }else if(currentPerson.MF=='Female'){
            setFemale(true);
            setMale(false);
            setTdee(+currentPerson.GWCPW +(+Math.round(person.Lifestyle * (66 + (6.23 * person.CW) +(12.7 * person.height) - (6.8 * person.age)))));
        }
        
      };
    //   console.log(Math.round(personWeight + currentPerson.GWCPW))
    
    //   if (male === true){
    //     let personweight = Math.round(person.Lifestyle * (66 + (6.23 * person.CW) +(12.7 * person.height) - (6.8 * person.age)));
    //   } else if (female === true){
    //     let personweight = Math.round(person.Lifestyle * (655 + (4.35 * person.CW) +(4.7 * person.height) - (4.7 * person.age)));
    //   }
      
      


    return(
    <Background >
            <div class="wrapper">
                {/* <h2>Figure Out How to Eat For Your Goals!</h2> */}
               
                <div className="flex">
                
                    

                        <div className="spacing step2">
                            
                            <div class="pcf">
                                    <p style={{color:'#4361EE'}}>Protein</p>
                                    <p style={{color:'black'}}>Carbohydrates</p>
                                    <p style={{color:'white'}}>Fats</p>
                            </div>
                            <div style={piestyle} class="pie">
                            <PieChart 
                            
                                    totalValue={100}
                                        data={[
                                            { title: 'Fats', value: 30, color: '#adb5bd' },
                                            { title: 'Protein', value: 30, color: '#4361EE' },
                                            { title: 'Carbs', value: 40, color: 'black' },
                                        ]}
                                        segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
                                        animate
                                        animationDuration={1000}
                                        //the donut part
                                        lineWidth={60}
                                        label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
                                        labelPosition={100 - lineWidth / 2}
                                        labelStyle={{
                                            fill: '#fff',
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
                                {metrics === false? (
                                                <div >
                                                    
                                                    <p style={{paddingTop:'40px'}}>Your Estimated Total Daily Energy Expenditure is...</p>

                                                
                                                </div>


                                                ) : (
                                                    <div />
                                                )}
                                        <div>
                                            {metrics !== false&& male == true ? (
                                                <div >
                                                    
                                                    <p style={{color:'white'}}>Your estimated Current TDEE is {Math.round(person.Lifestyle * (66 + (6.23 * person.CW) +(12.7 * person.height) - (6.8 * person.age)))} calories</p>
                                                    
                                                    <p style={{color:'white'}}> To reach your goal, you have to eat {+currentPerson.GWCPW +(+Math.round(person.Lifestyle * (66 + (6.23 * person.CW) +(12.7 * person.height) - (6.8 * person.age))))} calories a day. </p>
                                                <p style={{color:'white'}}>For Macros, try to aim for :</p>
                                                <div class= 'flex2'>
                                                        <p style={{color:'#4361EE', textDecoration:'underline'}}>{Math.round(((.30)*tdee/4))}g of Protein</p> 
                                                        <p style={{color:'black',textDecoration:'underline'}}>{Math.round(((.40)*tdee/4))}g of Carbohydrates</p>
                                                        <p style={{color:'#F72585',textDecoration:'underline'}}>{Math.round(((.30)*tdee/9))}g of Fat</p>
                                                    </div>
                                                </div>


                                                ) : (
                                                    <div />
                                                )}
                                                {metrics !== false&& female == true ? (
                                                <div class ='flex2'>
                                                    
                                                    <p style={{color:'white'}}>Your estimated Current TDEE is {Math.round(person.Lifestyle * (655 + (4.35 * person.CW) +(4.7 * person.height) - (4.7 * person.age)))}</p>
                                                    
                                                    <p style={{color:'white'}}> To reach your goal, you have to eat {+currentPerson.GWCPW +(+Math.round(person.Lifestyle * (66 + (6.23 * person.CW) +(12.7 * person.height) - (6.8 * person.age))))}</p>
                                                
                                                    <p style={{color:'#4361EE'}}>{Math.round(((.30)*tdee/4))}g of Protein</p> 
                                                    <p style={{color:'black'}}>{Math.round(((.40)*tdee/4))}g of Carbohydrates</p>
                                                    <p style={{color:'#F72585'}}>{Math.round(((.30)*tdee/9))}g of Fat</p>
                                                
                                                </div>


                                                ) : (
                                                    <div />
                                                )}
                                                
                                        </div>   
                                
                        </div>
                        <div class="spacing">
                        <form onSubmit={submitForm} class="box container">
                            
                            <label className="form-input">
                                <p class='formp'>Lifestyle:</p>
                                <select class="form-input"
                                id ="Lifestyle" name = "Lifestyle" placeholder ="Activity Level" value={currentPerson.Lifestyle} onChange={Changing}>
                                    <option style={{color:'white'}}>Whats your lifestyle?</option>
                                    <option value={1}>little to none</option>
                                    <option value={1.2}> 1-3 days a week</option>
                                    <option value={1.375}>3-5 days a week</option>
                                    <option value={1.55}>6-7 days a week </option>
                                    <option value={1.7}>Every day!!!</option>
                                    
                                </select>
                            </label>
                           
                            <label>
                            <p class='formp'>Gender:</p>
                                <select class="form-input"
                                    id ="MF" name = "MF" placeholder="Male or Female" value={currentPerson.MF} onChange={Changing}>
                                    <option style={{color:'white'}}>Male or Female</option>
                                    <option value={'Male'}>Male</option>
                                    <option value={'Female'}> Female</option>
                                
                                </select>
                            </label>
                            
                            <label>
                            <p class='formp'>Change Per Week:</p>
                                
                                    {/* <p style={{color:'white',opacity:'0.5',fontSize:'14px'}}>This is per week</p> */}
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
                            
                            <label style={{paddingTop:'40px'}}>
                            <p class='formp'>Current Weight:</p>
                                    <input 
                                    class="form-input"
                                    name ="CW"
                                    placeholder="Weight in Lbs"
                                    value={currentPerson.CW}
                                    onChange={Changing}
                                    />
                            </label>
                            
                            <label>
                            <p class='formp'>Height in inches:</p>
                                    <input
                                    class="form-input"
                                    name ="height"
                                    placeholder="Height in inches"
                                    value={currentPerson.height}
                                    onChange={Changing}
                                    />
                            </label>
                            
                            <label>
                            <p class='formp'>Current Age:</p>
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
                        
                </div>
                  
            
            </div>
                                           
    </Background>
    );
}



 {/* <div>                          
                    <h1 style={{color:'black', textDecoration:'underline'}}>Why be passionate about exercise?</h1>
                        <div class='flex2'>
                            <div class='card'>
                                <FontAwesomeIcon icon ={faBrain} size="4x" color="#4361EE"/>
                               <p>Exercise provides mental clarity. For many people it is a source of stress relief!</p>
                            </div>
                            <div class='card'>
                                <FontAwesomeIcon icon ={faDumbbell} size="4x"color="#4361EE" />
                                <p>Exercise makes muscles stronger, and with provided nutrients they become larger!</p>
                            </div>  
                            <div class='card'>
                                <FontAwesomeIcon icon ={faHeartbeat} size="4x" color="#4361EE"/>
                                <p>Execise greatly helps reduce risk of heart attack, lower bad cholesterol, and improves recovery time from things like hospitilizations</p>
                            </div>
                        </div>


                  </div>  */}

