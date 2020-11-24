import React from "react";

import img from "@/utils/img";
import { Upload } from "antd";

const GJUpload = (props) => {
  const onChange = (e) => {
    if (e.file && e.file.response && e.file.response.data) {
      const url = e.file.response.data.url;
      props.onChange(url);
    }
  };
  return (
    <Upload
      name="file"
      listType="picture-card"
      className="avatar-uploader"
      multiple={false}
      action={img.uploadUrl + "/api/upload/img"}
      onChange={onChange}
      showUploadList={false}
    >
      <img
        src={props.value ? img.imgBaseUel + props.value : img.uploadIcon}
        alt=""
      />
    </Upload>
  );
};

export default GJUpload;
