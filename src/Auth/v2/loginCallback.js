import { useEffect } from "react";
import { Auth } from "@aws-amplify/auth";
import { withRouter } from "react-router-dom";

const LoginCallback = ({ history }) => {
    useEffect(() => {
        const handleAuth = async () => {
            await Auth.currentAuthenticatedUser();
            history.push("/protected");
        };

        handleAuth();
    }, [history]);

    return <div>Loading...</div>;
};

export default withRouter(LoginCallback);