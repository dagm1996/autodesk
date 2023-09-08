import React, { useState } from "react";
import { Amplify, Auth } from 'aws-amplify';

const SSO = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleSignIn = () => {
        Auth.signIn();
    };

    const handleSignOut = () => {
        Auth.signOut();
    };

    return (
        <div>
            {isAuthenticated ? (
                <h1>You are authenticated!</h1>
            ) : (
                <h1>You are not authenticated!</h1>
            )}
            <button onClick={handleSignIn}>Sign In</button>
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
    );
};

export default SSO;