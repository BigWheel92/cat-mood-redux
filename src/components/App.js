import React, { Component } from "react";

import {store} from "../store/index"
import {Buttons} from "./Buttons"
import "../css/App.css"
class App extends Component {

  render() {
    const {mood}=store.getState();
    return(
      <div className="center">
      <img src={`./pics/${mood}.png`}  alt={`cat ${mood} mood`}  width="500" height="600"/>
      <Buttons/>
      </div>
      );
    }
}

export {App};
