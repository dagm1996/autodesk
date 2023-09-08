import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SSO from "./Auth/authv5";
import Dashboard from "./pages/TableauDashboard";
import { Amplify } from "aws-amplify";
import config from "./components/Auth/AuthConfig";
import "@aws-amplify/ui-react/styles.css";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import { Provider } from "react-redux";
import { store } from "./components/DataLayer/store";

Amplify.configure(config);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AmplifyProvider>
        <SSO />
      </AmplifyProvider>
    </Provider>
  </React.StrictMode>
);
