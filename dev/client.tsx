import * as React from "react";
import * as ReactDOM from "react-dom";

import "./base.css";

import { App } from "./app";

const rootElm = document.getElementById("root");
ReactDOM.hydrate(<App />, rootElm);
