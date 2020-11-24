import {
  GET_CATES_LIST,
  GET_GOOD_LIST,
  GET_GOOD_DETAIL,
  REST_GOOD_DETAIL,
} from "@/store/actionType";

const initState = {
  cates: [],
  list: [],
  total: 0,
  detail: {},
};

export default function goodReducer(state = initState, action) {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case GET_CATES_LIST:
      newState.cates = action.payload;
      return newState;
    case GET_GOOD_LIST:
      newState.list = action.payload.list;
      newState.total = action.payload.total;
      return newState;
    case GET_GOOD_DETAIL:
      newState.detail = action.payload;
      return newState;
    case REST_GOOD_DETAIL:
        newState.detail=action.payload
        return newState
    default:
      return state;
  }
}
