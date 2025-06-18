import {Route, Router, Routes} from "react-router-dom";
import axios from "axios";

import "./App.css";
// components
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import History from "./components/History";

function App() {
    axios.defaults.baseURL = "http://localhost:5000";
    axios.defaults.withCredentials = true;
    return (
        <div className="min-h-screen bg-gray-700">
            <NavBar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/history" element={<History />} />
            </Routes>
        </div>
    );
}

export default App;
