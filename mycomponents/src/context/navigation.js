import { useState, createContext, useEffect } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
        setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handler);

    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);
  const navigate = (to)=>{
    window.history.pushState({},'',to)
    setCurrentPath(to);
  }

  return (
    <NavigationContext.Provider value={{currentPath, navigate}}>
        {/* <div>
            <button onClick={()=>navigate('/accordion')}>Go to Accordion</button>
            <br/><hr/>
            <button onClick ={()=>navigate('/dropdown')}>Got to Dropdown</button>
        </div>
      {currentPath} */}
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;
