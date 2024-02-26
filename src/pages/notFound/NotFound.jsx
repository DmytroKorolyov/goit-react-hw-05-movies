import React from 'react';
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <h1>Page is not found... Try again</h1>
            <Link to='/'>Go home</Link>
        </div>
    );
}

export default NotFound;
