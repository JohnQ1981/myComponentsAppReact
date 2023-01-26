import "./App.css";
import { DiApple } from "react-icons/di";
import { CiBatteryFull } from "react-icons/ci";
import { MdShoppingCart } from "react-icons/md";
import Button from "./components/Button";

function App() {
  return (
    <div>
      App-New App being created!
      <div>
        <Button success>
          <DiApple />
          Click Me!
        </Button>
      </div>
      <div>
        <Button success rounded outline>
          <CiBatteryFull />
          Charge Me!
        </Button>
      </div>
      <div>
        <Button danger>Click Me!</Button>
      </div>
      <div>
        <Button warning><MdShoppingCart />Buy Now!</Button>
      </div>
      <div>
        <Button outline danger>
          <CiBatteryFull />
          See Deal!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Hide Ads!
        </Button>
      </div>
    </div>
  );
}

export default App;
