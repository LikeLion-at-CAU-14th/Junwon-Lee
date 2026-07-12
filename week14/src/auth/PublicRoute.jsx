import React from 'react'
import { getAccessToken } from './tokenStorage'
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
    const accessToken = getAccessToken();

    if(accessToken) {
        return <Navigate to="/mypage" replace />;
    }

  return children;
}

export default PublicRoute