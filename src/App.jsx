// App.jsx
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomeComponent from './components/ui/HomeComponent'


function App() {
  return (
    <Routes>
    
      <Route path="/" element={<HomeComponent />} />

    </Routes>
  )
}

export default App
