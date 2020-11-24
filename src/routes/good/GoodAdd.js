import React from "react";

import { connect } from "react-redux";
import { Form, Input, Button, Switch, message } from "antd";
import { GJCateSelect, GJUpload } from "@/components";
import { fetchAddGood } from "@/utils/api";
import { getDetail, restDetail } from "@/store/actions/goodAction";
const { TextArea } = Input;

function mapStateToProps(store) {
  return {
    detail: store.good.detail,
  };
}

function mapActionToProps(dispatch) {
  return {
    getDetail: (params) => dispatch(getDetail(params)),
    restDetail:(payload)=>dispatch(restDetail(payload))
  };
}

class GoodAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cate: "",
      imageUrl: "",
    };
  }

  // 挂载完成没有id则清空表单，有id则获取对应商品数据
  componentDidMount() {
    let id = this.props.match.params.id;
    if (id === "0") {
      this.props.restDetail({
        name: "",
        desc: "",
        price: "",
        cate: "",
        img: "",
        hot: false,
      });
    } else {
      this.props.getDetail({ id: id });
    }
  }

  // 当store中的props发生更新，
  shouldComponentUpdate(props) {
    // 设置Form表单值
    this.refs.form.setFieldsValue(props.detail);
    return true;
  }

  // 提交所有的数据
  onFinish(values) {
    let id = this.props.match.params.id;
    if (id !== "0") {
      values.id = id;
    }
    fetchAddGood(values).then((res) => {
      if (res.err === 0) {
        message.success(id !== '0' ? "修改商品成功" : "添加商品成功");
        this.refs.form.setFieldsValue({
          name: "",
          desc: "",
          price: "",
          cate: "",
          img: "",
          hot: false,
        });
        this.props.history.goBack();
      }
    });
  }

  render() {
    let id = this.props.match.params.id;
    const layout = {
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 8,
      },
    };
    const tailLayout = {
      wrapperCol: {
        offset: 4,
        span: 16,
      },
    };
    return (
      <div>
        <h2>{id !== '0' ? "商品修改" : "商品新增"}</h2>
        <Form
          {...layout}
          ref="form"
          name="basic"
          onFinish={this.onFinish.bind(this)}
        >
          <Form.Item
            label="商品名称"
            name="name"
            rules={[
              {
                required: true,
                message: "商品名称不符合要求",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="商品描述"
            name="desc"
            rules={[
              {
                required: true,
                message: "商品不符合要求",
              },
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item
            label="商品价格"
            name="price"
            rules={[
              {
                required: true,
                message: "商品不符合要求",
              },
            ]}
          >
            <Input prefix="￥" suffix="RMB" style={{ width: 200 }} />
          </Form.Item>

          <Form.Item
            label="商品品类"
            name="cate"
            rules={[
              {
                required: true,
                message: "商品不符合要求",
              },
            ]}
          >
            <GJCateSelect />
          </Form.Item>

          <Form.Item label="商品图片" name="img">
            <GJUpload />
          </Form.Item>

          <Form.Item label="是否热销" name="hot" valuePropName="checked">
            <Switch />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              {id !== '0' ? "修改" : "新增"}
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapActionToProps)(GoodAdd);
