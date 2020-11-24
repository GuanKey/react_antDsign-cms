import React from "react";
import GjHeader from "./Header";
import GjContent from "./Contend";
import GjSider from "./Sider";
import './layout.scss'
import { Layout } from "antd";

const { Header, Sider, Content } = Layout;

export default class GjLayout extends React.Component {
  render() {
    return (
      <div className="gj-layout">
        <Layout>
          <Sider>
            <GjSider />
          </Sider>
          <Layout>
            <Header>
              <GjHeader />
            </Header>
            <Content>
              <GjContent />
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}
