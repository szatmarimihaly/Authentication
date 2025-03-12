import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";


function App() {
    return (
        <Router>
            <Routes>
                <Route path = "/" element = {<Navigate to = "/Home"/>}></Route>
                <Route path = "/Home" element = {<Home/>}></Route>
            </Routes>
        </Router>
    );
}

export default App;
