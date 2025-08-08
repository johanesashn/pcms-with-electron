import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"

function App() {

  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />

      {/* default is login */}
      <Route path="/" element={<Login />} />
    </Routes>
  )
}

export default App
