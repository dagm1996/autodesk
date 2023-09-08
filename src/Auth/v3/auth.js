import React from 'react';
import { BrowserRouter as Router, Routes, Link, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from 'react-oidc-context';
import config from './config';


const Home = () => {
    const { user } = useAuth();

    return (
        <div>
            <h1>Welcome to the App!</h1>
            {user ? (
                <p>Logged in as: {user.profile.name}</p>
            ) : (
                <p>Please log in to access the app.</p>
            )}
        </div>
    );
};

const Login = () => {
    const { signinRedirect } = useAuth();

    const handleLogin = () => {
        signinRedirect();
    };

    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleLogin}>Login with Cognito</button>
        </div>
    );
};

const Callback = () => {
    const { signinRedirectCallback } = useAuth();

    React.useEffect(() => {
        signinRedirectCallback();
    }, [signinRedirectCallback]);

    return <div>Signing you in...</div>;
};

const Logout = () => {
    const { signoutRedirect } = useAuth();

    React.useEffect(() => {
        signoutRedirect();
    }, [signoutRedirect]);

    return <div>Signing you out...</div>;
};

const SecureRoute = ({ component: Component, ...rest }) => {
    const { user } = useAuth();

    return (
        <Routes
            {...rest}
            render={(props) =>
                user ? (
                    <Component {...props} />
                ) : (
                        <Navigate to="/login" />
                )
            }
        />
    );
};

const SSO = () => (
    <AuthProvider {...config}>
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/logout">Logout</Link>
                    </li>
                </ul>
            </nav>

            <Routes exact path="/" component={Home} />
            <Routes path="/login" component={Login} />
            <Routes path="/callback" component={Callback} />
            <SecureRoute path="/logout" component={Logout} />
        </Router>
    </AuthProvider>
);

export default SSO;