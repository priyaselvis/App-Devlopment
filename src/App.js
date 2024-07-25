// import Login from './Components/loginn';
// import Signup from './Components/Signup';
// import Homepage from './Components/Homepage';
import Routing from './Components/Routing';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
    {/* <Homepage/> */}
      {/* <Login/> */}
    {/* <Signup/>  */}
    <Routing/>
      </BrowserRouter>
    </div>
  );
}
export default App;
