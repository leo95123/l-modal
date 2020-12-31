import "animate.css";
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

function Modal({
  showModal = false, // 是否显示Modal
  mask = true, // 是否显示遮罩
  maskClose = true, // 点击遮罩是否关闭
  type = "", // modal 类型:success,warning,error,info
  title = "", //标题
  showClose = true, // 是否显示关闭图标
  showConfirmBtn = true, // 是否显示确认按钮
  confirmBtnText = "确定", //确定按钮文字
  showCancelBtn = true, // 是否显示取消按钮
  cancelBtnText = "取消", // 取消按钮文字
  onConfirm = () => {}, // 点击确认按钮事件
  onCancel = () => {}, // 点击取消按钮事件
  handleClose = () => {}, // 点击关闭事件
  children = "主体内容", // 内容
}) {
  return (
    <div className={showModal ? "l-modal l-modal-show" : "l-modal"}>
      {mask ? (
        maskClose ? (
          <div className="l-modal-mask" onClick={handleClose}></div>
        ) : (
          <div className="l-modal-mask"></div>
        )
      ) : (
        ""
      )}
      <div
        className={
          showModal
            ? "l-modal-box animate__animated animate__fadeInDown animate__faster"
            : "l-modal-box l-modal-box-hide"
        }
      >
        <div className="l-modal-box-header">
          <div className="icon-title-box">
            {type ? (
              <div className="icon">
                <Icon type={type} />
              </div>
            ) : (
              ""
            )}
            <div className="title">{title}</div>
          </div>
          {showClose ? (
            <div className="close-box" onClick={handleClose}>
              <CloseOutlined />
            </div>
          ) : (
            ""
          )}
        </div>
        <div
          className={
            !type
              ? "l-modal-box-content"
              : "l-modal-box-content l-modal-box-content-right-move"
          }
        >
          {children}
        </div>

        <div className="l-modal-box-btns">
          {showCancelBtn ? (
            <button className="btn-cancel" onClick={onCancel}>
              {cancelBtnText}
            </button>
          ) : (
            ""
          )}
          {showConfirmBtn ? (
            <button className="btn-confirm" onClick={onConfirm}>
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
