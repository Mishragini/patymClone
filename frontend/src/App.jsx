import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signup from "./components/Signup"
import Signin from "./components/Signin"
import Dashboard from "./components/Dashboard"
import Landing from "./components/Landing"
import Confirmation from "./components/Confirmation"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path='/confirmation' element={<Confirmation />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
