import React, { useState } from 'react'
import '../Styles/Electives.css'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl'
import axios from 'axios'

const Years = [
    'Third',
    'Final'
];

const Sections = [
    'A','B','C','D','E','F'
];

const thirdElectives = ['CS8075-Data Warehousing-and-Data Mining','IT8076-Software-Testing','CS8077-Graph-Theory-and-Applications','IT8071-Digital-Signal-Processing','GE8075-Intellectual-Property-Rights']
const finalFirst = ['CS8085-Social-Network-Analysis','IT8073-Information-Security','CS8074-Cyber-Forensics','CS8086-Soft-Computing','GE8076-Professional-Ethics-in-Engineering']
const finalSecond = ['CS8080-Information-Retrieval-Techniques','CS8078-Green-Computing']

const StudentData = {
    studentName : '',
    regNo : '',
    token: ''
}

const UploadData3 = { 
    studentName : '',
    regNo : '',
    class : '',
    sec : '',
    year : '',
    peOne : ''
}

const UploadData4 = { 
    studentName : '',
    regNo : '',
    class : '',
    sec : '',
    year : '',
    peFour: '',
    peFive : ''
}

export default function Electives() {
    // const getCurr = JSON.parse(localStorage.getItem('AntennaWaveForm'))
    // StudentData.studentName = UploadData3.studentName = UploadData4.regNo = getCurr.studentName
    // StudentData.regNo = UploadData3.regNo = UploadData4.regNo = getCurr.regNo
    // StudentData.token = getCurr.token

    const loginURL = 'http://localhost:4200/students/login'

    const [Year, setYear] = useState('3')
    const [Section, setSection] = useState('A')
    const [E1, setE1] = useState()
    const [E2, setE2] = useState()
    const [E3, setE3] = useState()

    function NoChangeName(){
        return(
            <div className='StatelessName'>Elective</div>
        )
    }   

    const handleYear = (event) => {
      setYear(event.target.value)
      UploadData3.year = Year
      UploadData4.sec = Section
    };

    const handleSection = (event) => {
      setSection(event.target.value)
      UploadData3.sec = Section
      UploadData4.sec = Section
    };

    const handleE1 = (event) => {
        setE1(event.target.value)
        UploadData3.peOne = E1
    }

    const handleE2 = (event) => {
        setE2(event.target.value)
        UploadData4.peFour = E2
    }

    const handleE3 = (event) => {
        setE3(event.target.value)
        UploadData4.peFive = E3
    }

    function SelectFromList(){
        if(Year === 'Third'){
            return(
            <>
                <InitialInputs list={thirdElectives} value={E1} helperText="Select your Choice" stater={handleE1}/>
            </>
            )
        }else if(Year === 'Final'){
            return(
                <>
                    <InitialInputs list={finalFirst} value={E2} helperText="Select your Choice" stater={handleE2}/> 
                    <InitialInputs list={finalSecond} value={E3} helperText="Select your Choice" stater={handleE3}/>
                </>
            )
        }
        return null
    }

    function Divider(){
        return (
            <div style={{
                borderWidth: 'thin',
                borderStyle: 'Solid',
                width: '99.89%',
                height: '0',
                marginTop: '10px',
                borderColor: '#0C0E2E'
            }}></div>
        )
    }

    function StatelessDetails(){
        return(
            <>
            <div className='StuDetails'>
                <div className='StuName StuLable'>NAME</div>
                <div className='StuRegis StuLable'>Register Number</div>
            </div>
            <div className='StuDetails'>
                <div className='StuName'>{StudentData.studentName}</div>
                <div className='StuRegis'>{StudentData.regNo}</div>
            </div>
            </>
        )
    }

    function Lister(props){
        return(
            <>
            <FormControl variant='outlined'>
                <TextField
                    select
                    label="Select"
                    value={props.value}
                    onChange={props.stater}
                    helperText={props.helperText}
                >
                    {props.list.map((option) => (
                        <MenuItem style={{color: 'black'}} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
                </FormControl>
            </>
        )
    }

    function InitialInputs(props){
        return(
            <div className='StuYear'>
                <Lister list={props.list} value={props.value} helperText={props.helperText} stater={props.stater}/>
            </div>
        )
    }

    function UploadSubmits(){
        var data = {}
        if(Year === 3)data = UploadData3
        else data = UploadData4

        axios.post(loginURL,data,  {
            headers: {
              'auth-token': StudentData.token,
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'POST',
              'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            }
          })
          .then(res => {
              if(!res.data.message){
                alert('Choice Submitted Successfully!')
              }else alert('Error SomeHow')
          })
    }

    return (
        <div className='StuElective'>
            <NoChangeName/>
            <StatelessDetails/>
            <Divider/>
            <InitialInputs list={Years} value={Year} helperText="Select your Year" stater={handleYear}/>
            <InitialInputs list={Sections} value={Section} helperText="Select your Section" stater={handleSection}/>
            <SelectFromList/>
            <div className='ButtonDiv'><button className='ElectiveSubmit' onClick={UploadSubmits}>Submit</button></div>
        </div>
    )
}
