import loadable from "@loadable/component";
import React from "react";
import {
  ApartmentOutlined,
  HomeOutlined,
  PieChartOutlined,
  AppstoreAddOutlined,
  SafetyCertificateOutlined,
  InsertRowLeftOutlined,
  UserOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import Login from './login/login'

export{
  Login
}

const Home = loadable(() => import("./system/Home"));
const Analyze = loadable(() => import("./system/Analyze"));
const GoodAdd = loadable(() => import("./good/GoodAdd"));
const GoodList = loadable(() => import("./good/GoodList"));

const routes = [
  {
    id: 1,
    text: "系统概况",
    icon: <ApartmentOutlined />,
    children: [
      {
        id: 11,
        text: "首页概况",
        path: "/home",
        component: Home,
        icon: <HomeOutlined />,
      },
      {
        id: 12,
        text: "数据分析",
        path: "/analyze",
        component: Analyze,
        icon: <PieChartOutlined />,
      },
    ],
  },
  {
    id: 2,
    text: "商品管理",
    icon: <AppstoreAddOutlined />,
    children: [
      {
        id: 21,
        text: "商品列表",
        path: "/good/list",
        component: GoodList,
        icon: <FileTextOutlined />,
        children: [
          {
            id: 2101,
            text: "商品新增",
            path: "/good/add/:id",
            component: GoodAdd,
            icon: "",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    text: "系统管理",
    icon: <InsertRowLeftOutlined />,
    children: [
      {
        id: 31,
        text: "角色管理",
        path: "",
        component: "",
        icon: <UserOutlined />,
      },
      {
        id: 32,
        text: "权限管理",
        path: "",
        component: "",
        icon: <SafetyCertificateOutlined />,
      },
      {
        id: 33,
        text: "用户管理",
        path: "",
        component: "",
        icon: <UserOutlined />,
      },
    ],
  },
];

export default routes;
