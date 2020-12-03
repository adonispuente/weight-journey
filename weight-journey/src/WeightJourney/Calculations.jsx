import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';




export default function Calculations(){
    const initialForm = {
        WeightType: "",
        //currentWeight
        CW:"",
        //Estimated body fat
        EBF:"",
        //Goal weight Change Per week
        GWCPW:""
    }
    //mock data for bat chart
    const data = [
        { year: '1950', population: 2.525 },
        { year: '1960', population: 3.018 },
        { year: '1970', population: 3.682 },
        { year: '1980', population: 4.440 },
        { year: '1990', population: 5.310 },
        { year: '2000', population: 6.127 },
        { year: '2010', population: 6.930 },
      ];

    const [form,setForm] = useState(initialForm);
    const [error,setError] = useState();
    const [startDate, setStartDate] = useState(new Date());

    const Changing = (event)=>{
        const name = event.target.name;
        const value = event.target.value;

        setForm({
            ...form,
            [name]: value,
        })
    }

    return(
    <div>
        <div>
                <form>
                    <h1>Step 1</h1>
                    <label>
                        <select id ="WeightType" name = "WeightType" placeholder ="Weight Type?">
                            <option value = "Lb">Lb</option>
                            <option value = "Kg">Kg </option>
                        </select>
                    </label>
                            <label>
                            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                            </label>
                    <label>
                            <input
                            name ="CW"
                            placeholder="Current Weight"
                            value={form.CW}
                            onChange={Changing}
                            />
                    </label>
                    <label>
                            <input
                            name ="EBF"
                            placeholder="Estimated BodyFat%?"
                            value={form.EBF}
                            onChange={Changing}
                            />
                    </label>
                    <label>
                            <input
                            name ="GWCPW"
                            placeholder="Goal Weight Change Per week??"
                            value={form.GWCPW}
                            onChange={Changing}
                            />
                    </label>
                </form>
                <hr></hr>
                <h3>Don't know youre Body Fat%? Lets get you an estimate!</h3>
        </div>
        <div>
               <h2>Step 2</h2>
               <p>Your Total Daily Energy Expenditure and macronutrient requirments</p>     
        </div>
        </div>
    );
}