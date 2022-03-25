import "./App.css";
import React, { Component } from 'react'
import {Contacs} from "./Component/Contacs"
import {createStore} from "redux"
import {Provider} from "react-redux"
import {RootReducer} from "./Component/Reducer/RootReducer";

const myStore=createStore(RootReducer);

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={myStore}>
          <Contacs/>
        </Provider>
      </div>
    )}}

