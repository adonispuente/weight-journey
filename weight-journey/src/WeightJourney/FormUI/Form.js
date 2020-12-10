// // import { reduxForm, Field } from 'redux-form'
// // import MenuItem from 'material-ui/MenuItem'
// // import { RadioButton } from 'material-ui/RadioButton'
// // import {
// //   Checkbox,
// //   RadioButtonGroup,
// //   SelectField,
// //   TextField,
// //   Toggle,
// //   DatePicker
// // } from 'redux-form-material-ui'
// // import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


// // function MyForm (){
  
// //     return (
// //         <MuiThemeProvider >
// //       <form>

// //         <Field name="WeightType" component={SelectField} hintText="Weight in Lb or Kg?" value={currentPerson.WeightType} onChange={Changing}>
// //           <MenuItem value="Lb" primaryText="Lb"/>
// //           <MenuItem value="Kg" primaryText="Kg"/>
// //         </Field>

// //         <Field name="agreeToTerms" component={Checkbox} label="Agree to terms?"/>

// //         <Field name="eventDate" component={DatePicker} format={null} hintText="What day is the event?"/>

// //         <Field name="receiveEmails" component={Toggle} label="Please spam me!"/>

// //         <Field name="bestFramework" component={RadioButtonGroup}>
// //           <RadioButton value="react" label="React"/>
// //           <RadioButton value="angular" label="Angular"/>
// //           <RadioButton value="ember" label="Ember"/>
// //         </Field>
// //       </form>
// //       </MuiThemeProvider>
// //     )
  
// // }

// // // Decorate with redux-form
// // MyForm = reduxForm({
// //   form: 'myForm'
// // })(MyForm)

// // export default MyForm


// function MyForm (){
  
//     return (
//         <MuiThemeProvider >
//       <form className="container">


//         {/* <Field id="WeightType" name="WeightType" component={SelectField} hintText="Weight in Lb or Kg?" value={currentPerson.WeightType} onChange={Changing}>
//           <MenuItem  value="Lb" primaryText="Lb"/>
//           <MenuItem value="Kg" primaryText="Kg"/>
//         </Field> */}

//         {/* <Field name="WeightType" component={RadioButtonGroup} value={currentPerson.WeightType} onChange={Changing}>
//            <RadioButton value="Lb" label="Lb"/>
//            <RadioButton value="Kg" label="Kg"/>
//         </Field> */}
//         <TextField
//         hintText={'Kg or Lb?'}
//         name={"WeightType"}
//         onChange={Changing}
//         value={currentPerson.WeightType}
//         />


//         <TextField
//         hintText={'Current Weight?'}
//         type="number"
//         name ="CW"
//         value={currentPerson.CW}
//         onChange={Changing}
//         />
//         <TextField
//         hintText={'Estimated Boday fat %?'}
//         type="number"
//         value={currentPerson.EBF}
//         name ="EBF"
//         onChange={Changing}
//         />
//         <TextField
//         hintText={"Goal Weight Change per Week?"}
//         type="number"
//         value={currentPerson.GWCPW}
//         name ="GWCPW"
//         onChange={Changing}
//         />
//         <TextField
//         hintText={'Age'}
//         type="number"
//         name ="age"
//         value={currentPerson.age}
//         onChange={Changing}
//         />

//         <TextField
//         hintText={'height in cm'}
//         type="number"
//         name ="height"
//         value={currentPerson.height}
//         onChange={Changing}
//         />

//         <Field name="date" component={DatePicker} format={null} hintText="What day are you starting this Journey?" onChange={date => setStartDate(date)}/>
//         <button onClick={()=>dispatch(allActions.postPerson(currentPerson))}>Add your stats!</button>
//       </form>
//       </MuiThemeProvider>
//     )
  
// }

// // Decorate with redux-form
// MyForm = reduxForm({
//     form: 'myForm'
//   })(MyForm)
  