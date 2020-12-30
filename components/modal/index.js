import React, { useState } from "react";
import {
  CheckCircleOutlined,
  InfoCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  CloseOutlined,
} from "@ant-design/icons";

// Icon
const Icon = (props) => {
  switch (props.icon) {
    case "success":
      return <CheckCircleOutlined twoToneColor="#52c41a" />;
    case "info":
      return <InfoCircleOutlined twoToneColor="#1890ff" />;
    case "error":
      return <CloseCircleOutlined twoToneColor="#ff4d4f" />;
    case "warning":
      return <ExclamationCircleOutlined twoToneColor="#faad14" />;
    case "":
      return "";
    default:
      return "";
    // return <img src="{icon}" className="l-modal-box-header-icon" />;
  }
};
// Buttons
const Buttons = (props) => {
  let ConfirmBtn = () => <button>{props.confirmBtnText}</button>;
  if (!props.showConfirmBtn) {
    ConfirmBtn = "";
  }
  let CancelBtn = () => <button>{props.cancelBtnText}</button>;
  if (!props.showCancelBtn) {
    CancelBtn = "";
  }
  return (
    <div className="btns-container">
      <ConfirmBtn />
      <CancelBtn />
    </div>
  );
};

function Modal(props) {
  const [show, setShow] = useState(props.showModal); // 是否显示
  const title = props.title || ""; //标题
  const showConfirmBtn = props.showConfirmBtn || true; // 是否显示确认按钮
  const showCancelBtn = props.showCancelBtn || true; // 是否显示取消按钮
  const confirmBtnText = props.confirmBtnText || "确定"; // 确认按钮文字
  const cancelBtnText = props.cancelBtnText || "取消"; // 取消按钮文字
  return (
    <div className="l-modal ">
      <div className="l-modal-box">
        <div className="l-modal-box-header">
          <div className="icon-title-box">
            <div className="icon">
              <Icon icon={props.icon} />
            </div>
            <div className="title">{title}</div>
          </div>
          <div className="close-box">
            <CloseOutlined />
          </div>
        </div>
        <div className="l-modal-box-content">{props.children}</div>
        <div className="l-modal-box-btns">
          <Buttons
            showConfirmBtn={showConfirmBtn}
            showCancelBtn={showCancelBtn}
            cancelBtnText={cancelBtnText}
            confirmBtnText={confirmBtnText}
          />
        </div>
      </div>
    </div>
  );
}

export default Modal;
