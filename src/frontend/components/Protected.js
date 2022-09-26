import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext.js';

/**
 * If the user is not logged in, redirect to the home page. Otherwise, render the children
 * @returns The children of the component.
 */
const Protected = ({ children }) => {
    const { user } = UserAuth();
    return !user ? <Navigate to='/' /> : children;
};

/* Exporting the Protected component. */
export default Protected;