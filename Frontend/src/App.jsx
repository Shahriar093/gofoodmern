import './App.css'
import Home from './screens/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './screens/Login';
import Signup from './screens/Signup';
import MyCart from './screens/MyCart';
import { CartProvider } from './components/ContextReducer';
import AdressForm from './screens/AdressForm';
import MyOrder from './screens/MyOrder';
function App() {

  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/loginuser' element={< Login />} />
            <Route exact path='/createuser' element={< Signup />} />
            <Route exact path='/adressform' element={<AdressForm />}></Route>
            <Route exact path='/myorder' element={<MyOrder />}></Route>
          </Routes>
        </div>
      </Router>
    </CartProvider>

  )
}

export default App
