import {useEffect} from "react";
import {Route, Router, Routes} from "react-router-dom";
import axios from "axios";

import "./App.css";
// components
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import History from "./components/History";
import {useState} from "react";

function App() {
    axios.defaults.baseURL = "http://localhost:5000";
    axios.defaults.withCredentials = true;

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Initialize user (in a real app, this would be from authentication)
        const initUser = async () => {
            try {
                let userName = localStorage.getItem("userName");
                if (!userName) {
                    // const response = await axios.post(`/users/register`, {
                    //     name: "Demo User",
                    //     email: "demo@example.com",
                    //     dailyGoal: 2000,
                    // });
                    // userName = response.data.userName;
                    // localStorage.setItem("userName", userName);
                    console.log("No user found in localStorage, please register.");
                    return;
                }

                const userResponse = await axios.get(`/users/${userName}`);
                setUser(userResponse.data.user);
                localStorage.setItem(userResponse.data.user);
            } catch (error) {
                console.error("Error initializing user:", error);
            } finally {
                setLoading(false);
            }
        };

        initUser();
    }, []);

    return (
        <div className="min-h-screen bg-gray-700">
            <NavBar />
            <Routes>
                <Route path="/" element={<Dashboard user={user} />} />
                <Route
                    path="/settings"
                    element={<Settings user={user} setUser={setUser} />}
                />
                <Route path="/history" element={<History user={user} />} />
            </Routes>
        </div>
    );
}

export default App;
