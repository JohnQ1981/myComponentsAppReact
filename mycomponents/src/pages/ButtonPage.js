import "./App.css";
import { DiApple } from "react-icons/di";
import { CiBatteryFull } from "react-icons/ci";
import { MdShoppingCart } from "react-icons/md";
import Button from "../components/Button";

function ButtonPage() {
  // const handleClick=()=>{
  //   console.log('working');
  // }
  return (
    <div>
      App-New App being created!
      <div>
        <Button className='mb-3' success>
          <DiApple />
          Click Me!
        </Button>
      </div>
      <div>
        <Button className='mb-3' success rounded outline>
          <CiBatteryFull />
          Charge Me!
        </Button>
      </div>
      <div>
        <Button className='mb-3' danger>Click Me!</Button>
      </div>
      <div>
        <Button className='mb-3' warning><MdShoppingCart />Buy Now!</Button>
      </div>
      <div>
        <Button className='mb-3' outline danger>
          <CiBatteryFull />
          See Deal!
        </Button>
      </div>
      <div>
        <Button className='mb-3' primary rounded>
          Hide Ads!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
