import { BrowserRouter, Routes, Route } from "react-router"
import Dashboard from "./components/pages/Dashboard"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/:address" element={<div>Wallet Info</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
