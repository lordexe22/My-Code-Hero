// modules
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// components
import ScreenLoader from './components/ScreenLoader.comp'

// pages
import Home from './pages/home.page';

//styles
import './styles/logos.style.css'

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path='/My-Code-Hero' element={<Home/>}/>
        <Route path='/My-Code-Hero/*' element={<ScreenLoader/>}>
        </Route>
      </Routes>
    </Router>
  );
}