import React from 'react'
import { useUser } from '@auth0/nextjs-auth0';

function cart() {
    const { user, error, isLoading } = useUser();
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;
  
    if (user) {
      return (
        <div>
          <p>User id: {user.sub.split('|')[1]}</p>
          <a href="/api/auth/logout">Logout</a>
        </div>
      );
    }
  
    return <a href="/api/auth/login">Login</a>;
}

export default cart
