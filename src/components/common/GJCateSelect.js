import React from "react";
import { Select } from "antd";

import { getCates } from "@/store/actions/goodAction";
import { connect } from "react-redux";

const { Option } = Select;

function mapStateToProps(store) {
  return {
    cates: store.good.cates,
  };
}

function mapActionToProps(dispatch) {
  return {
    getCates: (params) => dispatch(getCates(params)),
  };
}

class GJCateSelect extends React.Component {
  changHandler(val) {
    this.props.onChange(val);
  }

  componentDidMount() {
    this.props.getCates({});
  }

  createOptions() {
    let { cates } = this.props;
    return cates.map((ele) => (
      <Option key={ele._id} value={ele.cate}>
        {ele.cate_zh}
      </Option>
    ));
  }

  render() {
    return (
      <Select
        style={{ width: 200 }}
        value={this.props.value}
        onChange={this.changHandler.bind(this)}
      >
        {this.createOptions()}
      </Select>
    );
  }
}

export default connect(mapStateToProps, mapActionToProps)(GJCateSelect);
