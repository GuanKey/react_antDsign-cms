import fetch from "./axios";

// 全部品类
export function fetchAllCate(params) {
  return fetch({
    url: "/cates/all",
    method: "Get",
    params,
  });
}

// 添加商品
export function fetchAddGood(data) {
  return fetch({
    url: "/goods/create",
    method: "POST",
    data,
  });
}

// 获取商品列表
export function fetchGoodList(params) {
  return fetch({
    url: "/goods/list",
    method: "GET",
    params,
  });
}

// 删除商品
export function fetchRemoveGood(params) {
  return fetch({
    url: "/goods/remove/list",
    method: "GET",
    params,
  });
}

// 商品详情
export function fetchDetail(params) {
  return fetch({
    url: "/goods/detail",
    method: "GET",
    params,
  });
}

// 登录注册
export function fetchLogin(data) {
  return fetch({
    url: "/users/cms/login",
    method: "POST",
    data,
  });
}
