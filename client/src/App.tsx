import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BoardIndex } from './components/features/BoardIndex';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BoardIndex />}></Route>
      </Routes>
    </Router>
  )
}

export default App
