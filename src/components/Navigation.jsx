import {Link} from 'react-router-dom';
import {useEffect, useState} from "react";

function Navigation() {

    return (
        <nav className="app-nav">
            <Link to="/">Home</Link>
            <Link to="/customers">Customers</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/inventory">Inventory</Link>
        </nav>
    )
}

export default Navigation;