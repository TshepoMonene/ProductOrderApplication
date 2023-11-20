import "./App.css";
import Cart from "./Cart";
import CustomerForm from "./CustomerForm";
import LoginForm from "./LoginForm";
import ProuctList from "./ProuctList";
import { Route,Routes} from "react-router-dom";

function App() {
  return (
    < >  

      <Routes> 
        <Route exact path="/" element={<CustomerForm/>}/> 
        <Route exact path="/home" element={<ProuctList/>}/> 
        <Route exact path="/Cart" element={<Cart/>}/> 
        <Route exact path="/Login" element={<LoginForm/>}/> 
      </Routes> 
    </>
  );
}

export default App;
