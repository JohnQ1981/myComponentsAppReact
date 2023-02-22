import { useState, useEffect } from "react";
import {GoChevronDown} from 'react-icons/go';
import Panel from "./Panel";


function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  useEffect (()=>{
    const handler =(event)=>{
      console.log(event.target);
    };
    document.addEventListener('click', handler, true)
  },[])

  const handleOptionClick = (option) => {
    //Close Dropdown
    setIsOpen(false);
    //What color user selected
    //console.log(option);
    onChange(option);
  };
  const renderedOption = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // let content = 'Select ...';
  // if(selection){
  //   content = selection.label;
  // }

  return (
    <div className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer "
        onClick={handleClick}
      >
        {value?.label || "Select ..."}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && <Panel className="absolute top-full "> {renderedOption}</Panel>}
    </div>
  );
}
export default Dropdown;
