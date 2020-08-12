import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useRecoilValue, useRecoilState } from "recoil";
import { cartCount, fruit, selectedItems } from "home/atoms";

export default function ResetButton() {
  const [visible, setVisible] = useState(false);
  const [f, fruitSet] = useRecoilState(fruit);
  const [si, selectedSet] = useRecoilState(selectedItems);
  const count = useRecoilValue(cartCount);

  return <>
    <Button disabled={count === 0} type="primary" onClick={() => {
      if (count > 0) {
        setVisible(true)
      }
    }}>Reset Items ({count})!</Button>
    
    <Modal
      title="Confirm reset"
      visible={visible}
      onOk={() => {
        setVisible(false);
        selectedSet([]);
      }}
      onCancel={() => {
        setVisible(false);
      }}
    >
      <p>You have selected {count} item(s). Are you sure you want to reset to 0?</p>
    </Modal>
  </>;
};
