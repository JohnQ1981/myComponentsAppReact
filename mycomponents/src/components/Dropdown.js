import { useState } from "react";
import {GoChevronDown} from 'react-icons/go';


function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

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
      <div
        className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"
        onClick={handleClick}
      >
        {value?.label || "Select ..."}
        <GoChevronDown className="text-lg" />
      </div>
      {isOpen && <div className="absolute top-full order rounded p-3 shadow bg-white w-full"> {renderedOption}</div>}
    </div>
  );
}
export default Dropdown;
