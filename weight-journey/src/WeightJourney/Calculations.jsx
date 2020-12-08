import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { PieChart } from 'react-minimal-pie-chart';
import {useSelector, useDispatch} from 'react-redux'
import allActions from "../actions";


// import Paper from '@material-ui/core/Paper';
// import {
//   Chart,
//   BarSeries,
//   Title,
//   ArgumentAxis,
//   ValueAxis,
// } from '@devexpress/dx-react-chart-material-ui';
// import { Animation } from '@devexpress/dx-react-chart';




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
    }
   
   

    const [person,setPerson] = useSelector(state => state.person);
    // const [error,setError] = useState();
    const [startDate, setStartDate] = useState(new Date());
    const dispatch = useDispatch()
    
    const [currentPerson,setCurrentPerson] = useState(initialPerson);
    const Changing = (event)=>{
        // setPerson({...person, [event.target.name]: event.target.value})
        const name = event.target.name;
        const value = event.target.value;

        setCurrentPerson({
            ...currentPerson,
            [name]: value,
        })
    }
    
    

    // useEffect(()=>{
    //     dispatch.allActions.getPerson(person)
    // },[])
    

//   console.log(person)

    return(
    <div>
        <div>
                <form>
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
                    <button onClick={()=>dispatch(allActions.postPerson())}>Add your stats!</button>
                </form>
                <hr></hr>
                <h3>Don't know youre Body Fat%? Lets get you an estimate!</h3>
        </div>

        
        <div>
               <h2>Step 2</h2>
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
        </div>
        </div>
    );
}

