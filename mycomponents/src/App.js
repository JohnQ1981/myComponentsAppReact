import {useState} from 'react';
import "./App.css";
import AccordionPages from "./pages/AccordionPages";
import Dropdown from "./components/Dropdown";

function App() {
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
    <div><AccordionPages /></div>
    </div>
);
  
}

export default App;
