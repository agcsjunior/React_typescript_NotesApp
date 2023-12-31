import "bootstrap/dist/css/bootstrap.min.css"
import { Routes,Route, Navigate } from "react-router-dom"
import { NewNote } from "./NewNote"

export type Note = {
  id:string 
}

export type NoteData = {
  title:string
  markdown:string
  tags:Tag[]
}

export type Tag = {
  id:string
  lebel:string
}


function App() {

  return (
    <div className = "container my-4">
      <Routes>
        <Route path = "/" element = {<h1> Home</h1>} />
        <Route path = "/new" element = {<NewNote/>} />
        <Route path = "/:id">
           <Route index element = {<h1>Show</h1>}/>
           <Route path = "edit" element = {<h1>Edit</h1>}/>
        </Route>
        <Route path = "*" element = {<Navigate to = "/" />} />
      </Routes>
     </div>   
  )
}

export default App
