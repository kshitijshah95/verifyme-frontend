import { Button } from "antd";
import { Link, BrowserRouter as Router } from "react-router-dom";

const HomePage = () => {
    return ( 
        <Router>
            <Button type="primary">
                <Link to="/login">Login</Link>
            </Button>
            <Button type="primary">
                <Link to="/signup">Sign Up</Link>
            </Button>
        </Router>
    )
}

export default HomePage;