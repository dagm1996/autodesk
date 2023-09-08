import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Auth } from "@aws-amplify/auth";

function withAuthenticator(WrappedComponent) {
    const Wrapper = (props) => {
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
            checkUserSession();
        }, []);

        async function checkUserSession() {
            try {
                await Auth.currentSession();
                setIsLoading(false);
            } catch (error) {
                // Redirect to login if the user is not authenticated
                props.history.replace("/login");
            }
        }

        return isLoading ? <div>Loading...</div> : <WrappedComponent {...props} />;
    };

    return withRouter(Wrapper);
}

export default withAuthenticator;