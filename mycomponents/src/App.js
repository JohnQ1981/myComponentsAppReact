
import Route from './components/Route';
import AccordionPages from './pages/AccordionPages';
import DropdownPage from './pages/DropdownPage';
import Sidebar from './components/Sidebar';
import ButtonPage from './pages/ButtonPage';

function App() {
  return (
    <div className='container mx=auto grid-cols-6 gap-4 mt-4'>
      <Sidebar />
      <div className='col-span-5'>
        <Route path="/accordion">
          <AccordionPages />
        </Route>
        <Route path="/">
          <DropdownPage />
        </Route>
        <Route path="/buttons"><ButtonPage /></Route>
      </div>
    </div>
  );
}

export default App;
