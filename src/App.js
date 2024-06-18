import {Routes,Route} from "react-router-dom";

import Login from '../src/pages/Login';


function App() {
  
  return (
    <div className="">    
    <h1 className="text-center text-2xl text-blue-200">Hello</h1>
     
      <Routes>
        <Route element={<Login/>}path="/Login"></Route>

      </Routes>
    </div>
  );
}
export default App;