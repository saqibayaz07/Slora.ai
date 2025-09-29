import './App.css';
import TextEditor from './Components/TextEditor';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import LoginForm from './Components/Login';
import RegisterForm from './Components/Register';
import ProtectedRoute from './Components/ProtectedRoute';
import RowAnimation from './Components/Landing_Page';
import Main_Layout from './Sloara/components/Main_Layout';
import Footer from './Sloara/components/Footer';
import BirdsBackground from './Components/Landing_Page';
import { SpiralDemo } from './Sloara/components/Landing Page/SpiralDemo';
import { useState } from 'react';
import FixedRowAnimation from './Components/Landing_Page';
function App() {
  return (
    // <Router>
    //   <Routes>
    //     {/* Public routes */}
    //     <Route path='/login' element={<LoginForm />} />
    //     <Route path='/register' element={<RegisterForm />} />

    //     {/* Protected routes */}
    //     <Route path='/' element={<ProtectedRoute Element={<Home />} />} />
    //     <Route path='/documents/:id' element={<ProtectedRoute Element={<TextEditor />} />} />
    //   </Routes>
    // </Router>
    <>
      <>
        <FixedRowAnimation>
          <Main_Layout />
          <footer>
            <Footer></Footer>
          </footer>
        </FixedRowAnimation>
      </>
    </>
  );
}

export default App;
