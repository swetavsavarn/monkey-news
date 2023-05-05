

import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

      <Route exact path="/" element={<News country='in'></News>} />
        <Route exact path="/india" element={<News country='in'></News>} />
        <Route exact path="/russia" element={<News country='rs'></News>} />
        <Route exact path="/japan" element={<News country='jp'></News>} />
        <Route exact path="/hongkong" element={<News country='hk'></News>} />
        <Route exact path="/top-headlines" element={<News category='top-headlines'></News>} />
        <Route exact path="/sports" element={<News category='sports'></News>} />
        <Route exact path="/business" element={<News category='business'></News>} />
        <Route exact path="/entertainment" element={<News category='entertainment'></News>} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
