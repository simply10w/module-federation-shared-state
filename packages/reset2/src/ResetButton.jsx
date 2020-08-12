import React from "react";
import { Button } from "antd";
import { useRecoilValue, useRecoilState } from "recoil";
import { cartCount, fruit, selectedItems } from "home/atoms";

export default function ResetButton() {
  const [f, fruitSet] = useRecoilState(fruit);
  const [si, selectedSet] = useRecoilState(selectedItems);
  const count = useRecoilValue(cartCount);

  const onReset = () => {
    selectedSet([]);
  };

  return <div>
    You have <b>{count}</b> items! <br />
    {count > 0 &&  <Button type="primary" danger onClick={onReset}>Reset</Button>}
  </div>;
};
