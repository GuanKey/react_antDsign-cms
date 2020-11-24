import React from "react";
import { connect } from "react-redux";
import {
  changeMsg,
  todoAdd,
  todoClear,
  todoRemove,
  todoTask
} from "@/store/actions/todoAction";

function mapStateToProps(store) {
  return {
    msg: store.todo.msg,
    list: store.todo.list,
  };
}

function mapActionToProps(dispatch) {
  return {
    change: (payload) => dispatch(changeMsg(payload)),
    add: (payload) => dispatch(todoAdd(payload)),
    clear: () => dispatch(todoClear()),
    remove:(payload)=>dispatch(todoRemove(payload)),
    task:(payload)=>dispatch(todoTask(payload))
  };
}

class Home extends React.Component {
  changeMsg() {
    this.props.change("2626262");
  }

  addHandle(arg,e) {
    console.log(arg)
    if(arg==='add'){
      if (e.keyCode === 13) {
        this.props.add({
          id: Date.now(),
          task: e.target.value,
        });
        e.target.value = "";
      }
    }else{
      let param={
        idx:arg,
        task:e.target.value
      }
      this.props.task(param)
    }
    
  }

  clearHandler() {
    this.props.clear();
  }

  removeItem(id) {
    this.props.remove(id)
  }

  createList() {
    let { list } = this.props;
    return list.map((ele,idx) => (
      <div key={ele.id}>
        <span>{ele.id}</span>
        <span>-</span>
        <input value={ele.task} onChange={this.addHandle.bind(this,idx)}/>
        <span>-</span>
        <span onClick={this.removeItem.bind(this, ele.id)}>X</span>
      </div>
    ));
  }

  render() {
    return (
      <div className="system-home">
        <h1>首页概况</h1>
        <h2>{this.props.msg}</h2>
        <button onClick={this.changeMsg.bind(this)}>改变msg</button>
        <hr />
        <input onKeyUp={this.addHandle.bind(this,'add')} />
        <button onClick={this.clearHandler.bind(this)}>清空</button>

        {this.createList()}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapActionToProps)(Home);
