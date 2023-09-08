import React from "react";
import { withRouter } from "react-router-dom";
import { Auth } from "@aws-amplify/auth";
import withAuthenticator from "./withAuthenticator";

function ProtectedComponent({ history }) {
    const handleLogout = async () => {
        await Auth.signOut({ global: true });
        history.replace("/login");
    };

    return (
        <div>
            <h1>Protected Content</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default withAuthenticator(withRouter(ProtectedComponent));