import Link from './components/Link';
import Route from './components/Route';
import AccordionPages from './pages/AccordionPages';
import DropdownPage from './pages/DropdownPage';

function App() {
  return (
    <div>
      <Link to="/accordion">Go to accordion</Link>
      <br/><hr/>
      <Link to="/dropdown">Go to dropdown</Link>
      <div>
        <Route path="/accordion">
          <AccordionPages />
        </Route>
        <Route path="/dropdown">
          <DropdownPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
