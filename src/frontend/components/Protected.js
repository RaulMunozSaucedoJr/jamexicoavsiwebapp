import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext.js';

const Protected = ({ children }) => {
    const { user } = UserAuth();
    return !user ? <Navigate to='/' /> : children;
};

export default Protected;