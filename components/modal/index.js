import { useState, useEffect } from "react";
import "./index.scss";
import {
  CheckCircleTwoTone,
  InfoCircleTwoTone,
  CloseCircleTwoTone,
  ExclamationCircleTwoTone,
  CloseOutlined,
} from "@ant-design/icons";

// Icon
const Icon = (props) => {
  switch (props.type) {
    case "success":
      return <CheckCircleTwoTone twoToneColor="#52c41a" />;
    case "info":
      return <InfoCircleTwoTone twoToneColor="#1890ff" />;
    case "error":
      return <CloseCircleTwoTone twoToneColor="#ff4d4f" />;
    case "warning":
      return <ExclamationCircleTwoTone twoToneColor="#faad14" />;
    default:
      return "";
  }
};

function Modal(props) {
  const [show, setShow] = useState(props.showModal); // 是否显示
  const title = props.title || ""; //标题
  const showConfirmBtn = props.showConfirmBtn || true; // 是否显示确认按钮
  const showCancelBtn = props.showCancelBtn || true; // 是否显示取消按钮
  const confirmBtnText = props.confirmBtnText || "确定"; // 确认按钮文字
  const cancelBtnText = props.cancelBtnText || "取消"; // 取消按钮文字
  const closeModal = () => {
    setShow(false);
  };

  useEffect(() => {
    setShow(props.showModal);
  }, [props.showModal, setShow]);
  return (
    <div className={show ? "l-modal l-modal-show" : "l-modal"}>
      {props.mask ? <div className="l-modal-mask"></div> : ""}
      <div className="l-modal-box">
        <div className="l-modal-box-header">
          <div className="icon-title-box">
            {props.type ? (
              <div className="icon">
                <Icon type={props.type} />
              </div>
            ) : (
              ""
            )}
            <div className="title">{title}</div>
          </div>
          <div className="close-box" onClick={props.handleClose}>
            <CloseOutlined />
          </div>
        </div>
        <div
          className={
            !props.type
              ? "l-modal-box-content"
              : "l-modal-box-content l-modal-box-content-right-move"
          }
        >
          {props.children}
        </div>

        <div className="l-modal-box-btns">
          {showCancelBtn ? (
            <button className="btn-confirm" onClick={props.onCancel}>
              {cancelBtnText}
            </button>
          ) : (
            ""
          )}
          {showConfirmBtn ? (
            <button className="btn-cancel" onClick={props.onConfirm}>
              {confirmBtnText}
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
