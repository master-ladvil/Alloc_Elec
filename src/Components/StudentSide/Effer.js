import React, {useState} from 'react'
import '../Styles/Effer.css'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl'
import { Link } from 'react-router-dom';

const Years = [
    'Third',
    'Final'
];

const Sections = [
    'A','B','C','D','E','F'
];

export default function Effer() {
    const [Year, setYear] = useState('3')
    const [Section, setSection] = useState('A')

    function NoChangeName(){
        return(
            <div className='StatelessName'>Elective</div>
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
                        <MenuItem style={{height: 'min-content'}} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
                </FormControl>
            </>
        )
    }

    const handleYear = (event) => {
        setYear(event.target.value)
      };
  
      const handleSection = (event) => {
        setSection(event.target.value)
      };

    function InitialInputs(props){
        return(
            <div className='StuYear'>
                <Lister list={props.list} value={props.value} helperText={props.helperText} stater={props.stater}/>
            </div>
        )
    }

    return (
        <div className='Effer'>
            <NoChangeName/>
            <InitialInputs list={Years} value={Year} helperText="Select the Year" stater={handleYear}/>
            <InitialInputs list={Sections} value={Section} helperText="Select the Seciton" stater={handleSection}/>
            <Link to='/pdf' year={Year} sec={Section}><button className='pdfButton'>Show Records</button></Link>
        </div>
    )
}
