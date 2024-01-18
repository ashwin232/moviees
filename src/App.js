import './App.css';
import Home from './Home';
import Single from './Single';
import Error from './Error';
import{Routes,Route} from "react-router-dom"

function App() {
  return (
    <>
  
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="movie/:id" element={<Single/>}/>
    <Route path="*" element={<Error/>}/>
  </Routes>
    </>
  );
}

export default App;
