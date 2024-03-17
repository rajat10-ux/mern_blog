import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import Signup from './pages/SignUp'
import Dashboard from './pages/DashBoard'
import Projects from './pages/Projects'
function App() {
   
  return (
<BrowserRouter>
<Header/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/sign-in" element={<SignIn/>}/>
    <Route path="/sign-up" element={<Signup/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/project" element={<Projects/>}/>
  </Routes>
</BrowserRouter>
  )
}

export default App
