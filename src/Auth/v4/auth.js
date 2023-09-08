import { Amplify } from 'aws-amplify';
import config from "../aws-exports";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Auth } from "aws-amplify";

// Configure Amplify in index file or root file
Amplify.configure(config)
Auth.configure(config)

function App() {
    return (
        <Authenticator.Provider>
            {({ signOut, user }) => (
                <div>
                    <p>Welcome {user.username}</p>
                    <button onClick={signOut}>Sign out</button>
                </div>
            )}
        </Authenticator.Provider>
    );
}

export default App;