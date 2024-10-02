import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import AppRoutes from './AppRoutes';
import { AuthProvider } from './AuthContext';

const App = () => {
    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <AppRoutes />
                </Router>
            </AuthProvider>
        </div>
    );
};

export default App;
