import { useState } from "react";
import Modal from "../components/modal/index";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const onCancel = () => {
    alert("点击了取消");
  };
  const onConfirm = () => {
    alert("点击了确定");
  };
  return (
    <div className="container">
      <h1>主页</h1>
      <Modal
        showModal={showModal}
        mask={true}
        type="info"
        title="这是标题"
        handleClose={closeModal}
        onCancel={onCancel}
        onConfirm={onConfirm}
      >
        这是内容
      </Modal>
      <button onClick={openModal}>打开弹窗</button>
    </div>
  );
};

export default App;
