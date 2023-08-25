import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Header = () => {



    return (
        <header className="header " style={{ height: "50px", marginBottom: "40px" }}>
            <Link to='/userlist'>
                <Button className="mt-2 p-1" variant="danger">User App</Button>
            </Link>
            <Link to='/map'>
                <Button className="m-2 p-1" variant="primary">Weather App</Button>
            </Link>
            <Link to='/todo'>
                <Button className="m-2 p-1" variant="success">Todo App</Button>
            </Link>
        </header>
    )

}

export default Header;