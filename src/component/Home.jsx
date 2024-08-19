import { Link } from 'react-router-dom';
import './home.css'
import { Nav } from 'react-bootstrap';
const HomePage = () => {

    return (
        <div className="homediv">
            <Nav justify variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link as={Link} to="/view">View Product</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/show-user">Show User</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/registration">Registration</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}
export default HomePage;