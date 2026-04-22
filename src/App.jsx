import './App.css';
import Header from './component/header/Header';
import {Routes, Route} from "react-router-dom";
import {routes} from "./routes/routes"
import Footer from './component/footer/Footer';

function App() {
  return (

<div className='container'>
    <Header />
    <Routes>
          {routes.map((route, index) => (
            <Route 
            key={index}
            path={route.path}
            element={route.element}
            />
          ))}
        </Routes>
    <Footer />
    </div> 
    
  );
}

export default App;
