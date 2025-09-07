import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "@/pages/Home";
// import About from "@/pages/About";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Dashboard_User from "./pages/Dashboard_User";

export default function App() {
    return (
        <Router>
            <div className="font-poppins">
                <Navbar />
                <div className="px-20 py-10">
                    <Routes >
                        <Route path="/dashboard_admin" element={<Dashboard />} />
                        <Route path="/dashboard_user" element={<Dashboard_User />} />
                    </Routes>
                </div>
                
            </div>
        </Router>
    );
}
