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

const [] =useState();

  return (
    
    <div>
      <div> <Dropdown  options ={options}/></div>
    <AccordionPages />
    
    </div>
);
  
}

export default App;
