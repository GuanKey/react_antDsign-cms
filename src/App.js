import React from "react";
import "@/assets/scss/App.scss";
import "antd/dist/antd.css";
import { Layout } from "@/components";
import { Login } from "@/routes";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "@/store";

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      token: localStorage.getItem("token"), // 初始化
    };
  }

  onLogin() {
    this.setState({
      token: localStorage.getItem("token"), //更新token
    });
  }

  render() {
    let { token } = this.state;
    return (
      <div className="App">
        <HashRouter>
          <Provider store={store}>
            {token ? <Layout /> : <Login onLogin={this.onLogin.bind(this)} />}
          </Provider>
        </HashRouter>
      </div>
    );
  }
}
