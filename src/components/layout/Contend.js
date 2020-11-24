import React from "react";
import routes from "@/routes";
import { Switch, Redirect, Route } from "react-router-dom";

export default class GjContent extends React.Component {
  createRoutes() {
    let res = [];

    function create(children) {
        children.map((ele) => {
          res.push(
            <Route exact key={ele.id} path={ele.path} component={ele.component} />
          );
          // 有子路由则递归
          if (ele.children) {
            create(ele.children);
          }
          return false
        });
      }

    routes.map((ele) => {
      create(ele.children);
      return false;
    });
    return res;
  }

  render() {
    return (
      <div className="gj-content">
        <Switch>
          {this.createRoutes()}
          <Redirect from="/*" to="/home" />
        </Switch>
      </div>
    );
  }
}
