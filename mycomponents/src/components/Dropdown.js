import { useState } from "react";
function Dropdown({ options, selection, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick =(option)=>{
    //Close Dropdown
    setIsOpen(false);
    //What color user selected
    console.log(option);
    onSelect(option);
  }
  const renderedOption = options.map((option) => {
    return <div onClick={()=>handleOptionClick(option)} key={option.value}>{option.label}</div>;
  });

  const handleClick =()=>{
    setIsOpen(!isOpen);
  };

  let content = 'Select ...';
  if(selection){
    content = selection.label;
  }
  return (
    <div>
      <div onClick ={handleClick}>Select ...</div>
      {isOpen && <div> {renderedOption}</div>}
    </div>
  );
}
export default Dropdown;
