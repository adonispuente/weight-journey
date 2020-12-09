import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { PieChart } from 'react-minimal-pie-chart';
import {useSelector, useDispatch} from 'react-redux'
import allActions from "../actions";
import { getPerson } from "../actions/submitWeightAction";
import Form from './FormUI/Form'


export default function Calculations(){
 
//styling for the pie chart ---------------------------------------
    var piestyle={
        height: '40vh',
        padding:'0,40',
    }
    // const shiftSize = 7;
    const lineWidth = 60;
    const defaultLabelStyle = {
        fontSize: '5px',
        // fontFamily: 'sans-serif',
      };    
//----------------------------------------


    const initialPerson = {
        WeightType: "",
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


    
    // console.log(person)


    const Changing = (event)=>{
        // setPerson({...person, [event.target.name]: event.target.value})
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
        <div>
        <Form> </Form>
                <form onSubmit={submitForm}>
                    <h1>Step 1</h1>
                    <label>
                        <select
                         id ="WeightType" name = "WeightType" placeholder ="Weight Type?" value={currentPerson.WeightType} onChange={Changing}>
                            <option>Select Weight Conversion</option>
                            <option >Lb</option>
                            <option >Kg </option>
                        </select>
                    </label>
                            <label>
                            <DatePicker placeholder="Date" name="date" selected={startDate} onChange={date => setStartDate(date)}  />
                            </label>
                    <label>
                            <input
                            name ="CW"
                            placeholder="Current Weight"
                            value={currentPerson.CW}
                            onChange={Changing}
                            />
                    </label>
                    <label>
                            <input
                            name ="EBF"
                            placeholder="Estimated BodyFat%?"
                            value={currentPerson.EBF}
                            onChange={Changing}
                            />
                    </label>
                    <label>
                            <input
                            name ="GWCPW"
                            placeholder="Goal Weight Change Per week??"
                            value={currentPerson.GWCPW}
                            onChange={Changing}
                            />
                    </label>
                    <label>
                            <input
                            name ="height"
                            placeholder="Height in cm"
                            value={currentPerson.height}
                            onChange={Changing}
                            />
                    </label>
                    <label>
                            <input
                            name ="age"
                            placeholder="age"
                            value={currentPerson.age}
                            onChange={Changing}
                            />
                    </label>
                    

                    <button onClick={()=>dispatch(allActions.postPerson(currentPerson))}>Add your stats!</button>
                </form>
                <hr></hr>
                <h3>Don't know youre Body Fat%? Lets get you an estimate!</h3>
        </div>
                  


        <div>
               <h2>Step 2</h2>
               <p style={{color:'red'}}>Protein</p>
               <p style={{color:'green'}}>carbs</p>
               <p style={{color:'blue'}}>fats</p>
               <div style={piestyle}>
               <PieChart 
                    totalValue={100}
                        data={[
                            { title: 'Protein', value: 20, color: '#457b9d' },
                            { title: 'Carbs', value: 40, color: '#ef233c' },
                            { title: 'Fats', value: 40, color: '#52b788' },
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
               <p style={{paddingTop:'40px'}}>Your Total Daily Energy Expenditure and macronutrient requirments</p>
               <div>
                            {metrics !== false ? (
                                    <p>Your estimated Current TDEE is {Math.round(1.4* (66 + (6.23 * person.CW) +(12.7 * person.height) - (6.8 * person.age)))}</p>
                                    


                                ) : (
                                    <div />
                                )}
                    </div>   
                 
        </div>
    </div>
    );
}

