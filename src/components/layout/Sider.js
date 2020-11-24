import React from "react";
import { Menu } from "antd";
import routes from "@/routes";
import { Link } from "react-router-dom";
import img from '@/utils/img'

const { SubMenu } = Menu;

export default class GjSider extends React.Component {
  createNavs() {
    let arr = [];
    routes.map((ele) => {
      arr.push(
        <SubMenu key={ele.id} title={ele.text} icon={ele.icon}>
          {this.createMenuItem(ele.children)}
        </SubMenu>
      );
      return false;
    });
    return arr;
  }

  createMenuItem(children) {
    if (children) {
      return children.map((ele) => (
        <Menu.Item key={ele.id} icon={ele.icon}>
            <Link to={ele.path}>{ele.text}</Link>
        </Menu.Item>
      ));
    }
  }

  render() {
    return (
      <div className="gj-sider">
          <div className='gj-logo'>
              <img src={img.logo} alt='gj'/>
          </div>
        <Menu defaultOpenKeys={["sub1"]} mode="inline" theme="light">
          {this.createNavs()}
        </Menu>
      </div>
    );
  }
}
