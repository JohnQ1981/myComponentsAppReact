import {useState} from 'react';
import Dropdown from '../components/Dropdown';

function DropdownPage() {
const options =[
  {label: 'Red' , value: 'red'},
  {label: 'Green' , value: 'green'},
  {label: 'Blue' , value: 'blue'}
];

const [selection, setSelection] =useState(null);
const handleSelection =(option)=>{
  setSelection(option)
}

  return (
    
    <div>
      <div> <Dropdown  options ={options} value ={selection} onChange ={handleSelection}/></div>
    <div><hr/></div>
    <br/>
   
    <br/>
    <hr/>
    
    </div>
);
  
}

export default DropdownPage;
