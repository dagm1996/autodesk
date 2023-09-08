import { Amplify } from "aws-amplify";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "@aws-amplify/ui-react/styles.css";
import { ProtectedPage } from "./auth";
import config from '../aws-exports';


Amplify.configure(config);

export default function App() {
    return (
        <Router>
            <div>
                <h2>React Router with AWS Amplify Cognito UI</h2>
                <ul>
                    <li>
                        page 1
                    </li>
                    <li>
                        <Link to="/protected">Protected Page</Link>
                    </li>
                </ul>
                <hr />
                <Routes>
                    <>
                    <Route path="/protected">
                        <ProtectedPage />
                    </Route>
                    </>
                </Routes>
            </div>
        </Router>
    );
}