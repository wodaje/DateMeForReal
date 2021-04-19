import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import "./styles/style.css";
import "./styles/no-touch.min.css";

Amplify.configure(awsconfig);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
