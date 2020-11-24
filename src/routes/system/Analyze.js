import React from "react";
import { connect } from "react-redux";

import { DatePicker} from "antd";

const { RangePicker } = DatePicker;

function mapStateToProps(store) {
  return {};
}

function mapActionToProps(dispatch) {
  return {};
}

class Analyze extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="system-analyze">
        <h1>数据分析</h1>
          <RangePicker showTime />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapActionToProps)(Analyze);
