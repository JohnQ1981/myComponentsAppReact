import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();
  useEffect(() => {
    const handler = (event) => {
      //console.log("Event Target", event.target);
      //console.log("DivEl", divEl.current);
      if(!divEl.current){
        return;
      }
      if(!divEl.current.contains(event.target)){
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

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
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer "
        onClick={handleClick}
      >
        {value?.label || "Select ..."}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full "> {renderedOption}</Panel>
      )}
    </div>
  );
}
export default Dropdown;
