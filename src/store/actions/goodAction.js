import {
  GET_CATES_LIST,
  GET_GOOD_LIST,
  GET_GOOD_DETAIL,
  REST_GOOD_DETAIL
} from "@/store/actionType";
import { fetchAllCate, fetchGoodList, fetchDetail } from "@/utils/api";

// 商品品类
export function getCates(params) {
  return function (dispatch) {
    fetchAllCate(params)
      .then((res) => {
        dispatch({
          type: GET_CATES_LIST,
          payload: res.list,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_CATES_LIST,
          payload: [],
        });
      });
  };
}

// 商品列表
export function getGoodList(params) {
  return function (dispatch) {
    fetchGoodList(params).then((res) => {
      dispatch({
        type: GET_GOOD_LIST,
        payload: res,
      });
    });
  };
}

// 商品详情
export function getDetail(params) {
  return function (dispatch) {
    fetchDetail(params).then((res) => {
      dispatch({
        type: GET_GOOD_DETAIL,
        payload: res,
      });
    });
  };
}

// 重置商品详情
export function restDetail(payload){
  return{
    type:REST_GOOD_DETAIL,
    payload
  }
}
