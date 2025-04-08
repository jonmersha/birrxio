// import NavBar from './components/NavBar'
// import { Route, BrowserRouter as Router, Routes,} from 'react-router-dom';
// import About from './page/About';
// import Contact from './page/Contact';

import Footer from "./components/Footer";
import Home from "./page/Home";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  //const [count] = useState(0)

  return (
    <>
      <Home />
      <Footer />
    </>

    // <Router>
    //   {/* <div>
    //   //<NavBar/>

    //     {/* Routing configuration */}
    //     <Routes>
    //       <Route  path="/" Component={Home} />
    //       <Route path="/about" Component={About} />
    //       <Route path="/contact" Component={Contact} />
    //     </Routes>
    //   </div>
    // </Router> */}
  );
}

export default App;
