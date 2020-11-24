import {
  CHANGE_MSG,
  TODO_ADD,
  TODO_CLEAR,
  TODO_REMOVE,
  TODO_TASK
} from "@/store/actionType";

const initState = {
  msg: "10000",
  list: [],
};

export default function todoReducer(state = initState, action) {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case CHANGE_MSG:
      newState.msg = action.payload;
      return newState;
    case TODO_ADD:
      newState.list.push(action.payload);
      return newState;
    case TODO_CLEAR:
      newState.list = [];
      return newState;
    case TODO_REMOVE:
      let id=action.payload
      newState.list=newState.list.filter(ele=>ele.id!==id)
      return newState
    case TODO_TASK:
      let {idx,task}=action.payload
      newState.list[idx].task=task
      return newState
    default:
      return state;
  }
}
