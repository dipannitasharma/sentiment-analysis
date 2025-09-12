import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard_User from "./pages/Dashboard_User";
import Footer from "./components/Footer";
import CommentExplorer from "./pages/CommentExplorer";
import Dashboard_Admin from "./pages/Dashboard_Admin";
import CommentUploader from "./pages/CommentUploader";
import CreateNewDraft from "./pages/CreateNewDraft";
import  Home from "./components/Home";

export default function App() {
    return (
        <Router>
            <div className="font-poppins">
                <Navbar />
                {/* <Home /> */}
                <div className="px-20 py-10">
                    <Routes>
                        <Route path="/" element={<Home />} />
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
                        <Route
                            path="/dashboard-user/:slug"
                            element={<CommentUploader />}
                        />
                        <Route
                            path="/new"
                            element={<CreateNewDraft />}
                        />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}
