import "./App.css";
import Cart from "./Cart";
import CustomerForm from "./CustomerForm";
import ProuctList from "./ProuctList";
import { Route,Routes} from "react-router-dom";

function App() {
  return (
    < >  

      <Routes> 
        <Route exact path="/" element={<CustomerForm/>}/> 
        <Route exact path="/home" element={<ProuctList/>}/> 
        <Route exact path="/Cart" element={<Cart/>}/> 
      </Routes> 
    </>
  );
}

export default App;
