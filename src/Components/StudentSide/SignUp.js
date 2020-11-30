import React, { createRef } from 'react'
import axios from 'axios'

const data = {
    studentName: '',
    regNo: '',
    pwd: ''
}

export default function SignUp() {

    var LogInput1 = createRef()
    var LogInput2 = createRef()
    var LogInput0 = createRef()
    const signUpURL = 'http://localhost:4200/students/signup'
    // const proxyURL = 'https://cors-anywhere.herokuapp.com/'

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

        data.studentName = LogInput0.current.value
        data.regNo = LogInput1.current.value
        data.pwd = LogInput2.current.value

        console.log(data)
        
        axios.post(signUpURL,data, {
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'POST',
              'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            }
          })
          .then(res=>{
              if(res.data.message)console.log(res.data.message)
              else if(!res.data.message){
                  alert('Now you can login')
              }
          })
    }

    function StuLoginForm(){
        return(
            <div>
                <div className='StuLogBoxes'>
                    <Labeler name='Name' htmlFor='inputReg0'/>
                    <input id='inputReg0' ref={LogInput0} placeholder='Not-a-Robot' className='textBoxInput'/>
                    <Labeler name='Register Number' htmlFor='inputReg1'/>
                    <input id='inputReg1' ref={LogInput1} placeholder='92131910xxxx' className='textBoxInput'/>
                    <Labeler name='Password' htmlFor='inputReg2'/>
                    <input id='inputReg2' ref={LogInput2} placeholder='givenPWD' className='textBoxInput'/>      
                </div>
                <button className='StuLogBoxes StuLogButton' onClick={handleClick}>Signup</button>
                <div className='NavigateTo'>New User? SignUp</div>
                <div className='NavigateTo'>Admin</div>
            </div>
        )
    }

    return (
        <div className='StuSign'>
            <NoChangeName/>
            <StuLoginForm/>
        </div>
    )
}
