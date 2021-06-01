import './App.css';
import Navbar from './Common/Navbar/Navbar';
import { AllRoutes } from './Routes/Routes';
function App() {
  return (
    <div className='App'>
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
