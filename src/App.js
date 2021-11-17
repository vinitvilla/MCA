// import {NavigationBar} from "./components/Navbar/navbar"
import {Navi} from "./components/Navbar/navi";
import {Home} from "./pages"

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navi />
      <Routes>
        <Route path="/about" exact element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
