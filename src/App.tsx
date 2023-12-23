import "bootstrap/dist/css/bootstrap.min.css"
import { Routes,Route, Navigate } from "react-router-dom"

function App() {

  return (
      <Routes>
        <Route path = "/" element = {<h1> Home</h1>} />
        <Route path = "/about" element = {<h1> about</h1>} />
        <Route path = "*" element = {<Navigate to = "/" />} />
      </Routes>
       
  )
}

export default App
