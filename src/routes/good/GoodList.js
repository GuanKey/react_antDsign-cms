import React from "react";
import { Row, Col, DatePicker, Table, Modal, Button } from "antd";
import { GJCateSelect } from "@/components";

import { toDate } from "@/utils/date";

import { getGoodList } from "@/store/actions/goodAction";
import { fetchRemoveGood } from "@/utils/api";
import img from "@/utils/img";

import { connect } from "react-redux";

const { RangePicker } = DatePicker;

function mapStateToProps(store) {
  return {
    goodArr: store.good.list,
    total: store.good.total,
  };
}

function mapActionToProps(dispatch) {
  return {
    getList: (params) => dispatch(getGoodList(params)),
  };
}

class GoodList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      curRow: null,
      filter: {
        cate: "",
        hot: false,
        page: 1,
        size: 3,
      },
    };
  }

  // 挂载完成请求数据
  componentDidMount() {
    let { filter } = this.state;
    this.props.getList(filter);
  }

  // 判断分类和分页变化,重新请求数据渲染
  updataFilter(key, val) {
    let { filter } = this.state;
    if (key === "cate") {
      filter.page = 1;
    }
    filter[key] = val;
    this.setState({ filter });
    this.props.getList(filter);
  }

  // 品类变化
  cateFilter(val) {
    this.updataFilter("cate", val);
  }

  // 分页变化执行
  pageFilter(page) {
    this.updataFilter("page", page);
  }

  // 显示弹出框
  showModel(row) {
    this.setState({ show: true, curRow: row });
  }

  // 编辑商品和新增
  skipToEdit(row) {
    if(row==='add'){
      this.props.history.push('/good/add/0')
    }else{
      this.props.history.push('/good/add/'+row._id)
    }
  }

  // 弹出框确定删除
  handleOk() {
    let {filter,curRow} =this.state
    fetchRemoveGood({ id: curRow._id }).then(() => {
      let {goodArr}=this.props
      if(goodArr.length===1){
        filter.page--
      }
      // 触发刷新列表
      this.props.getList(filter);
      this.setState({ show: false });
    });
  }

  // 取消弹出款
  handleCancel() {
    this.setState({ show: false });
  }

  // 日期变化
  dateFilter(e){
    // 日期字符 '2020-08-01 12:00:05'
    let startTime=e[0].format('YYYY-MM-DD HH:mm:ss')
    // 时间戳 10929382392939
    let endTime=e[1].valueOf()
    console.log(startTime,endTime)
  }

  render() {
    let { filter, show } = this.state;
    let { goodArr, total } = this.props;
    const columns = [
      {
        title: "商品名称",
        dataIndex: "name",
        key: "name",
        align: "center",
        render: (text, row, index) => (
          <div className="row-first">
            <img
              className="row-img"
              src={img.imgBaseUel + row.img}
              alt={row.name}
            />
            <div>{row.name}</div>
          </div>
        ),
      },
      {
        title: "价格",
        dataIndex: "price",
        key: "price",
        align: "center",
        render: function (text) {
          return <div>{"￥" + text + "元"}</div>;
        },
      },
      {
        title: "是否热销",
        dtaIndex: "hot",
        key: "hot",
        align: "center",
        render: (text) => <div>{text ? "是" : "否"}</div>,
      },
      {
        title: "上架时间",
        dataIndex: "create_time",
        key: "create_time",
        align: "center",
        render: (text) => <div>{toDate(text)}</div>,
      },
      {
        title: "操作栏",
        dataIndex: "handle",
        key: "handle",
        align: "center",
        render: (text, row, index) => (
          <div className="row_handle">
            <span onClick={this.showModel.bind(this, row)}>删除</span>
            <span onClick={this.skipToEdit.bind(this, row)}>编辑</span>
          </div>
        ),
      },
    ];
    return (
      <div className="good-list">
        <h1>商品列表</h1>
        <div className="good-cate">
          <Row align="middle">
            <Col span={2}>品类筛选：</Col>
            <Col span={6}>
              <GJCateSelect
                value={filter.cate}
                onChange={this.cateFilter.bind(this)}
              />
            </Col>
            <Col span={2}>日期筛选：</Col>
            <Col span={6}>
              <RangePicker showTime onChang={this.dateFilter.bind(this)} />
            </Col>
            <Col span={2} offset={4}>
              <Button onClick={this.skipToEdit.bind(this,'add')}>新增</Button>
            </Col>
          </Row>
        </div>
        <div className="good-table">
          <Table
            rowKey="_id"
            columns={columns}
            dataSource={goodArr}
            pagination={{
              total,
              pageSize: filter.size,
              current: filter.page,
              onChange: this.pageFilter.bind(this),
            }}
          ></Table>
        </div>

        <Modal
          title="警告"
          visible={show}
          onOk={this.handleOk.bind(this)}
          onCancel={this.handleCancel.bind(this)}
          cancelText="取消"
          okText="确定"
        >
          <p>你确定要删除这条商品吗？</p>
        </Modal>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapActionToProps)(GoodList);
