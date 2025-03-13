import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";


function App() {
    return (
        <Router>
            <Routes>
                <Route path = "/" element = {<Navigate to = "/home"/>}></Route>
                <Route path = "/Home" element = {<Home/>}></Route>
                <Route path = "/Login" element = {<LoginPage/>}></Route>
                <Route path = "/Register" element = {<RegisterPage/>}></Route>
            </Routes>
        </Router>
    );
}

export default App;
