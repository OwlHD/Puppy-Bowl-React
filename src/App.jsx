import { Routes, Route } from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import AllPlayers from "./components/AllPlayers";
import NewPlayerForm from "./components/NewPlayerForm";
import SinglePlayer from "./components/SinglePlayer";

function App() {

  return (
      <div>
        <NavBar />
        <Routes>
        <Route path='/Puppy-Bowl-React/' element={<AllPlayers />} />
        <Route path='/Puppy-Bowl-React/players/:id' element={<SinglePlayer />} />
        <Route path='/Puppy-Bowl-React/NewPlayerForm' element={<NewPlayerForm />} />
        </Routes>
      </div>
  )
}

export default App
