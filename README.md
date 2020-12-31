# l-modal

一个 react 弹窗

## 介绍

整体框架使用了 next.js  
图标使用了 ant Icon  
动画使用了 Animate.css 库
部分样式借鉴了 element

## 运行

```
git clone 仓库
yarn install
yarn run dev
```

## 使用

```
import Modal from "../components/modal/index";
......
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
.......
```

## 参数说明

| 参数           | 说明                                  | 默认值 |
| -------------- | ------------------------------------- | ------ |
| showModal      | 是否显示 Modal                        | false  |
| mask           | 是否显示遮罩                          | true   |
| maskClose      | 是否点击遮罩关闭                      | true   |
| type           | modal 类型:success,warning,error,info | ""     |
| title          | 标题                                  | ""     |
| showClose      | 是否显示关闭图标                      | true   |
| showConfirmBtn | 是否显示确认按钮                      | true   |
| confirmBtnText | 确定按钮文字                          | "确定" |
| showCancelBtn  | 是否显示取消按钮                      | true   |
| cancelBtnText  | 取消按钮文字                          | "取消" |
| onConfirm()    | 点击确认按钮事件                      | -      |
| onCancel()     | 点击取消按钮事件                      | -      |
| handleClose()  | 点击关闭事件                      | -      |
## TODO
1. 增加modal自定义class，用于自定义样式
2. 增加动画选项
3. 方法调用
