import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard_User from "./pages/Dashboard_User";
import Footer from "./components/Footer";
import CommentExplorer from "./pages/CommentExplorer";
import Dashboard_Admin from "./pages/Dashboard_Admin";

export default function App() {
    return (
        <Router>
            <div className="font-poppins">
                <Navbar />
                <div className="px-20 py-10">
                    <Routes>
                        <Route
                            path="/dashboard-admin"
                            element={<Dashboard_Admin />}
                        />
                        <Route
                            path="/dashboard-user"
                            element={<Dashboard_User />}
                        />
                        <Route
                            path="/dashboard-admin/:slug"
                            element={<CommentExplorer  />}
                        />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}
