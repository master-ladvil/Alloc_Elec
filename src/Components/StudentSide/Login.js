import React, { createRef } from 'react';
import '../Styles/Login.css'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const data = {
    regNo: '',
    pwd: ''
}

const response = {
    studentName : '',
    regNo : '',
    token: ''
}

export default function Login(){
    var history = useHistory()
    var LogInput1 = createRef();
    var LogInput2 = createRef();
    const loginURL = 'https://anten4.herokuapp.com/students/login'
    const proxyURL = 'https://cors-anywhere.herokuapp.com/'

    function NoChangeName(){
        return(
            <div className='StatelessName'>Elective</div>
        )
    }

    function Labeler(props){
        return(
            <label className='labeler' htmlFor={props.htmlFor}>{props.name}</label>
        )
    }

    function handleClick(){

        data.regNo = LogInput1.current.value
        data.pwd = LogInput2.current.value

        // console.log(data) https://anten4.herokuapp.com/
        
        axios.post(proxyURL+loginURL,data, {
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'POST',
              'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            }
          })
          .then(res=>{
              if(res.data.status){
                  console.log(res.data)
                  alert('Login failed')
              }
              else if(res.data.token){
                  console.log(res.data)
                  response.studentName = res.data.response.studentName
                  response.regNo = res.data.response.regNo
                  response.token = res.data.token
                  console.log(response)
                  localStorage.setItem('AntennaWaveForm', JSON.stringify(response))
                  history.push('/electives')
              }
          })
    }

    function StuLoginForm(){
        return(
            <div>
                <div className='StuLogBoxes'>
                    <Labeler name='Register Number' htmlFor='inputReg1'/>
                    <input id='inputReg1' ref={LogInput1} placeholder='92131910xxxx' className='textBoxInput'/>
                    <Labeler name='Password' htmlFor='inputReg2'/>
                    <input id='inputReg2' ref={LogInput2} placeholder='givenPWD' className='textBoxInput'/>      
                </div>
                <button className='StuLogBoxes StuLogButton' onClick={handleClick}>Login</button>
                <div className='NavigateTo' onClick={()=>{
                    history.push('signup')
                }}>New User? SignUp</div>
                <div className='NavigateTo' onClick={()=>{
                    history.push('admin')
                }}>Admin</div>
            </div>
        )
    }

    return (
        <div className='StuLogin'>
            <NoChangeName/>
            <StuLoginForm/>
        </div>
    )
}










// <div className='StuLogBoxes'>
// <form className={classes.root} noValidate autoComplete="off">
// <TextField
// label="Size"
// id="filled-size-small"
// defaultValue="Small"
// variant="filled"
// size="small"
// />
// </form>
// <form className={classes.root} noValidate autoComplete="off">
//     <TextField
//         required
//         label="Required"
//         defaultValue="Hello World"
//         variant="filled"
//     />
// </form>
// </div>