// modules
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// components
import ScreenLoader from './components/ScreenLoader.comp'

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path='/My-Code-Hero/*' element={<ScreenLoader/>}>
        </Route>
      </Routes>
    </Router>
  );
}