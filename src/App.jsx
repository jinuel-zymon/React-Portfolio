import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './components/pages/home/Home'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<h1>page not found</h1>}/>
        <Route path="/" element={<Home/>}/>    
      </Routes>
    </Router>
  )
}

export default App