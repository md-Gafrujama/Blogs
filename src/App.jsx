import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog1 from './components/Blog1';
import FrontPage from './components/Frontpage';

  function App() {
  return (
   
     <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/blog1" element={<Blog1 />} />
      </Routes>
    </Router>
   
  );
}

export default App


