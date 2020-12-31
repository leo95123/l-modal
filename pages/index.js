import { useState } from "react";
import Modal from "../components/modal/index";
import "./index.scss";
const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [mask, setMask] = useState(true);
  const [maskClose, setMaskClose] = useState(true);
  const [type, setType] = useState("");
  const [title, setTitle] = useState("标题");
  const [showClose, setShowClose] = useState(true);
  const [showConfirmBtn, setShowConfirmBtn] = useState(true);
  const [confirmBtnText, setConfirmBtnText] = useState("确定");
  const [showCancelBtn, setShowCancelBtn] = useState(true);
  const [cancelBtnText, setCancelBtnText] = useState("取消");

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const onCancel = () => {
    alert("点击了取消");
    setShowModal(false);
  };
  const onConfirm = () => {
    alert("点击了确定");
  };
  const getInput = (e) => {
    switch (e.target.name) {
      case "mask":
        setMask(e.target.value === "false" ? false : true);
        break;
      case "maskClose":
        setMaskClose(e.target.value === "false" ? false : true);
        break;
      case "type":
        setType(e.target.value);
        break;
      case "title":
        setTitle(e.target.value);
        break;
      case "showClose":
        setShowClose(e.target.value === "false" ? false : true);
        console.log(33);
        break;
      case "showConfirmBtn":
        setShowConfirmBtn(e.target.value === "false" ? false : true);
        break;
      case "confirmBtnText":
        setConfirmBtnText(e.target.value);
        break;
      case "showCancelBtn":
        setShowCancelBtn(e.target.value === "false" ? false : true);
        break;
      case "cancelBtnText":
        setCancelBtnText(e.target.value);
        break;
    }
  };
  return (
    <div className="container">
      <h1>Modal框测试</h1>
      <div className="debug">
        <div className="input">
          <label>mask: </label>
          <select name="mask" defaultValue="true" onChange={getInput}>
            <option value="true">true</option>
            <option value="false">false</option>
          </select>
        </div>
        <div className="input">
          <label>maskClose: </label>
          <select name="maskClose" defaultValue="true" onChange={getInput}>
            <option value="true">true</option>
            <option value="false">false</option>
          </select>
        </div>
        <div className="input">
          <label>type: </label>
          <select name="type" defaultValue="" onChange={getInput}>
            <option value="">无</option>
            <option value="info">info</option>
            <option value="success">success</option>
            <option value="warning">warning</option>
            <option value="error">error</option>
          </select>
        </div>
        <div className="input">
          <label>title: </label>
          <input
            type="text"
            name="title"
            defaultValue="标题"
            onChange={getInput}
          />
        </div>
        <div className="input">
          <label>showClose: </label>
          <select name="showClose" defaultValue="true" onChange={getInput}>
            <option value="true">true</option>
            <option value="false">false</option>
          </select>
        </div>
        <div className="input">
          <label>showConfirmBtn: </label>
          <select name="showConfirmBtn" defaultValue="true" onChange={getInput}>
            <option value="true">true</option>
            <option value="false">false</option>
          </select>
        </div>
        <div className="input">
          <label>confirmBtnText: </label>
          <input
            type="text"
            name="confirmBtnText"
            defaultValue="确定"
            onChange={getInput}
          />
        </div>
        <div className="input">
          <label>showCancelBtn: </label>
          <select name="showCancelBtn" defaultValue="true" onChange={getInput}>
            <option value="true">true</option>
            <option value="false">false</option>
          </select>
        </div>
        <div className="input">
          <label>cancelBtnText: </label>
          <input
            type="text"
            name="cancelBtnText"
            defaultValue="取消"
            onChange={getInput}
          />
        </div>
        <button onClick={openModal}>打开弹窗</button>
      </div>

      <div className="tips">
        <h2>说明</h2>
        <div>
          <p>参数: </p>
          <p>showModal:boolean=false // 是否显示Modal </p>
          <p>mask:boolean=false // 是否显示遮罩 </p>
          <p>type:string='' // modal类型:success,warning,error,info </p>
          <p>title:string='' //标题</p>
          <p>showClose:boolean=true // 是否显示关闭图标 </p>
          <p>showConfirmBtn:boolean=true // 是否显示确认按钮</p>
          <p>showCancelBtn:boolean=true // 是否显示取消按钮</p>
          <p>confirmBtnText:string='确定' //确定按钮文字</p>
          <p>cancelBtnText:string='取消' // 取消按钮文字 </p>
          <p>handleClose() //点击关闭图标事件 </p>
          <p>onCancel() // 点击取消按钮事件 </p>
          <p>onConfirm() //点击确认按钮事件</p>
          <p>图标使用了ant icon,样式借鉴了Element,动画使用了Animate库</p>
        </div>
      </div>
      <Modal
        showModal={showModal}
        mask={mask}
        maskClose={maskClose}
        type={type}
        title={title}
        showClose={showClose}
        showConfirmBtn={showConfirmBtn}
        confirmBtnText={confirmBtnText}
        showCancelBtn={showCancelBtn}
        cancelBtnText={cancelBtnText}
        handleClose={closeModal}
        onCancel={onCancel}
        onConfirm={onConfirm}
      >
        这是内容
      </Modal>
    </div>
  );
};

export default App;
