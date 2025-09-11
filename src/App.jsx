import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Dashboard_User from "./pages/Dashboard_User";
import Footer from "./components/Footer";

export default function App() {
    return (
        <Router>
            <div className="font-poppins">
                <Navbar />
                <div className="px-20 py-10">
                    <Routes>
                        <Route
                            path="/dashboard-admin"
                            element={<Dashboard />}
                        />
                        <Route
                            path="/dashboard-user"
                            element={<Dashboard_User />}
                        />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}
