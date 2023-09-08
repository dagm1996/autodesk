import { useEffect } from "react";
import { Auth } from "@aws-amplify/auth";

const Login = () => {
    useEffect(() => {
        const initiateLogin = async () => {
            await Auth.federatedSignIn();
        };
        initiateLogin();
    }, []);

    return <div>Redirecting to SSO provider...</div>;
};

export default Login;