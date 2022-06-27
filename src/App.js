import Homepage from './pages/Homepage';
import PostView from './pages/PostView';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/Post-view" element={<PostView/>}/>
  </Routes>
  );
}

export default App;
