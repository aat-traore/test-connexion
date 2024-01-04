import Layout from './pages/Layout/Layout';
import Register from './pages/register/Register';
import {  Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login/Login'

function App() {
  return (
    <> 
    <Routes>
                <Route
                    path="/"
                    element={ <Layout /> }
                />
                {/* The next line is very important for the Navigate component to work */}
                <Route
                    path="/register"
                    element={ <Register/> }
                />
                <Route
                    path="/login"
                    element={ <Login/> }
                />
            </Routes>

    </>
    );
   
}

export default App;
